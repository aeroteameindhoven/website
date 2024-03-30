import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

const QUERY = graphql`
  query Projects {
    projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        slug: name
        markdown: childMarkdownRemark {
          meta: frontmatter {
            name
            image
            academic_year
            blurb
          }
          html
        }
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "project-images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export interface Project {
  name: string;
  image?: IGatsbyImageData;
  academic_year: number;
  html: string;
  blurb: string;
  slug: string;
}

export function useProjects(): Project[] {
  const query = useStaticQuery<Queries.ProjectsQuery>(QUERY);

  return query.projects.nodes.map((project): Project => {
    const image_path_no_slash = project?.markdown?.meta?.image?.replace(/^\//, "");
    const image = query.images.nodes.find((image) => image.relativePath === image_path_no_slash);

    return {
      html: project?.markdown?.html ?? "",
      name: project?.markdown?.meta?.name ?? "",
      academic_year: project?.markdown?.meta?.academic_year ?? 0,
      image: image?.childImageSharp?.gatsbyImageData,
      blurb: project?.markdown?.meta?.blurb ?? "",
      slug: project.slug
    };
  });
}
