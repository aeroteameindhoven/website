import { graphql, useStaticQuery } from "gatsby";
import { isYears } from "./team_members";
import { TeamContext } from "../templates/team";

const QUERY = graphql`
  query AllTeams {
    teams: allFile(filter: { sourceInstanceName: { eq: "teams" } }, sort: { childJson: { year: DESC } }) {
      nodes {
        data: childJson {
          year
          description
        }
      }
    }
  }
`;

export function useTeams() {
  const data = useStaticQuery<Queries.AllTeamsQuery>(QUERY);

  return data.teams.nodes.map((team) => {
    if (team.data === null) throw new TypeError("team data null");
    if (!isYears(team.data.year)) throw new TypeError("team year is malformed");
    if (team.data.description === null) throw new TypeError("Team has no description");

    return {
      year: team.data.year,
      description: team.data.description
    };
  });
}

export function useCurrentTeamContext(): TeamContext {
  const teams = useTeams();

  const current_team = teams.at(0)!;
  const next_team = teams.at(1 % teams.length)!;

  return {
    ...current_team,

    previous_year: next_team.year
  };
}
