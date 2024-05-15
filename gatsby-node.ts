import type { Actions, CreatePagesArgs } from "gatsby";
import type { TeamContext } from "./src/templates/team";
import type { Years } from "./src/queries/team_members";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import type { Statistic } from "./src/queries/projects";

function isYears(years: unknown): years is Years {
  return typeof years === "string" && /[0-9]{2}-[0-9]{2}/.test(years);
}

// TODO: keep in sync with useProjects and useTeams
export const createPages = async function ({ actions, graphql }: CreatePagesArgs) {
  const [{ data: teams }, { data: projects }] = await Promise.all([
    graphql<Queries.NodeAllTeamsQuery>(`
      query NodeAllTeams {
        teams: allFile(filter: { sourceInstanceName: { eq: "teams" } }, sort: { name: DESC }) {
          nodes {
            data: childJson {
              year
              description
            }
          }
        }
      }
    `),
    graphql<Queries.NodeProjectsQuery>(`
      query NodeProjects {
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
                stats {
                  label
                  value
                }
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
    `)
  ]);

  if (teams === undefined) {
    throw new TypeError("teams query empty");
  }

  console.info("creating team pages");
  create_team_pages(teams, actions);

  if (projects === undefined) {
    throw new TypeError("projects query empty");
  }

  console.info("creating project pages");
  create_project_pages(projects, actions);
};

function create_project_pages({ projects, images, models }: Queries.NodeProjectsQuery, actions: Actions) {
  const all_images = new Map(
    images.nodes.map((image) => [image.relativePath, image.childImageSharp!.gatsbyImageData!])
  );

  const all_models = new Map(models.nodes.map((image) => [image.relativePath, image.publicURL]));

  for (const project of projects.nodes ?? []) {
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
        model,
        stats: (() => {
          const stats = project.markdown?.meta?.stats ?? undefined;
          if (stats === undefined) return undefined;

          return stats.filter((stat): stat is Statistic => {
            if (stat === null) throw TypeError("empty statistic");
            if (stat.label === null) throw TypeError("statistic missing field label");
            if (stat.value === null) throw TypeError("statistic missing field value");

            return true;
          });
        })()
      }
    });
  }
}

function create_team_pages({ teams: teams_raw }: Queries.NodeAllTeamsQuery, actions: Actions) {
  const teams = teams_raw.nodes.map((team) => {
    if (team.data === null) throw new TypeError("team data null");
    if (!isYears(team.data.year)) throw new TypeError("team year is malformed");
    if (team.data.description === null) throw new TypeError("Team has no description");

    return {
      year: team.data.year,
      description: team.data.description
    };
  });

  for (const [i, team] of teams.entries()) {
    actions.createPage<TeamContext>({
      path: `/team/${team.year}`,
      component: `${__dirname}/src/templates/team.tsx`,
      context: {
        year: team.year,
        year_index: i,

        description: team.description,

        previous_year: teams.at((i + 1) % teams.length)!.year
      }
    });
  }
}
