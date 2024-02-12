import { graphql, useStaticQuery } from "gatsby";

const QUERY = graphql`
  {
    sponsors: allFile(
      filter: { sourceInstanceName: { eq: "sponsors" } }
      sort: { childMarkdownRemark: { frontmatter: { name: ASC } } }
    ) {
      group(field: { childMarkdownRemark: { frontmatter: { package: SELECT } } }) {
        partner_package: fieldValue
        nodes {
          markdown: childMarkdownRemark {
            html
            frontmatter {
              name
              logo
              url
            }
          }
        }
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "sponsors-images" } }) {
      nodes {
        relativePath
        publicURL
      }
    }
  }
`;

interface QueryResult {
  sponsors: {
    group: {
      partner_package: string;
      nodes: {
        markdown: {
          html: string;
          frontmatter: {
            name: string;
            logo: string;
            url: string;
          };
        };
      }[];
    }[];
  };
  images: {
    nodes: {
      relativePath: string;
      publicURL: string;
    }[];
  };
}

export const partner_packages = ["platinum", "gold", "silver"] as const;
export type PartnerPackage = (typeof partner_packages)[number];
export function isPartnerPackage(package_type: string): package_type is PartnerPackage {
  return partner_packages.includes(package_type as PartnerPackage);
}

interface PartnerInfo {
  name: string;
  logo: string;
  url: string;
  html: string;
}

export function usePartners(): Map<PartnerPackage, PartnerInfo[]> {
  const query = useStaticQuery<QueryResult>(QUERY);

  return new Map(
    query.sponsors.group.map((g) => {
      if (!isPartnerPackage(g.partner_package)) {
        throw new Error(`Invalid package in sponsor definitions: ${g.partner_package}`);
      }

      return [
        g.partner_package,
        g.nodes.map<PartnerInfo>(({ markdown }) => {
          // Remove leading slash in logo file names
          const logo_file_no_slash = markdown.frontmatter.logo.replace(/^\//, "");

          const logo = query.images.nodes.find((img) => img.relativePath === logo_file_no_slash)?.publicURL;

          if (logo === undefined) {
            throw new Error(`Unable to find image '${markdown.frontmatter.logo}' for ${markdown.frontmatter.name}`);
          }

          return {
            name: markdown.frontmatter.name,
            logo,
            url: markdown.frontmatter.url,
            html: markdown.html
          };
        })
      ];
    })
  );
}
