import { CreatePagesArgs } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

// TODO: keep in sync with useProjects
export const createPages = async function ({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<Queries.ProjectsPagesQuery>(`
    query Projects {
      projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        nodes {
          slug: name
          markdown: childMarkdownRemark {
            meta: frontmatter {
              name
              images
              academic_year
              blurb
              model
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
      models: allFile(filter: { sourceInstanceName: { eq: "project-models" } }) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);

  if (data === undefined) {
    return;
  }

  const all_images = new Map(
    data.images.nodes.map((image) => [image.relativePath, image.childImageSharp!.gatsbyImageData!])
  );

  const all_models = new Map(data.models.nodes.map((image) => [image.relativePath, image.publicURL]));

  for (const project of data?.projects.nodes ?? []) {
    const initial_images = project?.markdown?.meta?.images ?? [];
    const images = initial_images
      .map((image_path) => all_images.get(image_path?.replace(/^\//, "") ?? ""))
      .filter((image): image is IGatsbyImageData => image !== undefined);

    const model = all_models.get(project?.markdown?.meta?.model?.replace(/^\//, "") ?? "") ?? undefined;

    actions.createPage({
      path: `/projects/${project.slug}`,
      component: `${__dirname}/src/templates/project.tsx`,
      context: {
        html: project?.markdown?.html ?? "",
        name: project?.markdown?.meta?.name ?? "",
        academic_year: project?.markdown?.meta?.academic_year ?? 0,
        images: images,
        blurb: project?.markdown?.meta?.blurb ?? "",
        slug: project.slug,
        model
      }
    });
  }
};
