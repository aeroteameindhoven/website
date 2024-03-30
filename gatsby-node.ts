import { CreatePagesArgs } from "gatsby";

interface ProjectPages {
  projects: {
    nodes: {
      slug: string
    }[]
  }
}

export const createPages = async function ({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<ProjectPages>(`
    query ProjectPages {
      projects: allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
        nodes {
          slug: name
        }
      }
    }
  `);

  for (const page of data?.projects.nodes ?? []) {
    actions.createPage({
      path: page.slug,
      component: `${__dirname}/src/templates/project.tsx`,
      context: { slug: page.slug }
    })
  }
};
