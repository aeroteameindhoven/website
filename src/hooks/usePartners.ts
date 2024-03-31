import { graphql, useStaticQuery } from "gatsby";

const QUERY = graphql`
  query Partners {
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

export const partner_packages = ["platinum", "gold", "silver"] as const;
export type PartnerPackage = (typeof partner_packages)[number];
export function isPartnerPackage(package_type: unknown): package_type is PartnerPackage {
  return partner_packages.includes(package_type as PartnerPackage);
}

interface PartnerInfo {
  name: string;
  logo: string;
  url: string;
  html: string;
}

export function usePartners(): Map<PartnerPackage, PartnerInfo[]> {
  const query = useStaticQuery<Queries.PartnersQuery>(QUERY);

  // TODO: verify partner package in front matter matches folder
  return new Map(
    query.sponsors.group.map((g) => {
      if (!isPartnerPackage(g.partner_package)) {
        throw new Error(`Invalid package in sponsor definitions: ${g.partner_package}`);
      }

      return [
        g.partner_package,
        g.nodes.map<PartnerInfo>((node) => {
          if (node.markdown == null) {
            throw "Partner is missing markdown";
          }

          // Remove leading slash in logo file names
          const logo_file_no_slash = node.markdown?.frontmatter?.logo?.replace(/^\//, "");

          const logo = query.images.nodes.find((img) => img.relativePath === logo_file_no_slash)?.publicURL;

          if (logo === null || logo === undefined) {
            throw new Error(
              `Unable to find image '${node.markdown?.frontmatter?.logo}' for ${node.markdown?.frontmatter?.name}`
            );
          }

          return {
            name: node.markdown?.frontmatter?.name || "",
            logo,
            url: node.markdown?.frontmatter?.url || "/",
            html: node.markdown?.html || ""
          };
        })
      ];
    })
  );
}
