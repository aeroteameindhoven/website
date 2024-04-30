import type { CreatePagesArgs } from "gatsby";
import type { TeamContext } from "./src/templates/team";
import type { Years } from "./src/queries/team_members";

function isYears(years: unknown): years is Years {
  return typeof years === "string" && /[0-9]{2}-[0-9]{2}/.test(years);
}

export const createPages = async function ({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<Queries.AllTeamsQuery>(`
    query AllTeams {
      teams: allFile(filter: { sourceInstanceName: { eq: "teams" } }, sort: { name: DESC }) {
        nodes {
          data: childJson {
            year
            description
          }
        }
      }
    }
  `);

  if (data === undefined) {
    throw new TypeError("GraphQL query returns NULL");
  }

  const teams = data.teams.nodes.map((team) => {
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
};
