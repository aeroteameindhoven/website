import { CreatePagesArgs } from "gatsby";

// TODO: keep in sync with useProjects
export const createPages = async function ({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<Queries.ProjectsQuery>(`
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
  `);

  for (const project of data?.projects.nodes ?? []) {
    const image_path_no_slash = project?.markdown?.meta?.image?.replace(/^\//, "");
    const image = data?.images.nodes.find((image) => image.relativePath === image_path_no_slash);

    actions.createPage({
      path: `/projects/${project.slug}`,
      component: `${__dirname}/src/templates/project.tsx`,
      context: {
        html: project?.markdown?.html ?? "",
        name: project?.markdown?.meta?.name ?? "",
        academic_year: project?.markdown?.meta?.academic_year ?? 0,
        image: image?.childImageSharp?.gatsbyImageData,
        blurb: project?.markdown?.meta?.blurb ?? "",
        slug: project.slug
      }
    });
  }
};
