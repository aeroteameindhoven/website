import React from "react";
import { Container } from "react-grid-system";
import Layout from "../components/layout";
import "../components/styles/team.scss";
import { graphql } from "gatsby";
import TeamView from "../components/team/TeamView";

export interface TeamInfo {
  name: string;
  text: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  photo: string;
  linkedin: string;
  time: string;
  subteams: string[];
}

const allTeams: TeamInfo[] = [
  {
    name: "21/22",
    text: "In 2022 the first year of Aero Team started, and was founded by members from the old teams Blue Jay Eindhoven and Team Syfly."
  },
  {
    name: "22/23",
    text: "The second year of Aero Team, our focus is on the Battery Swap mechanism and the construction of our Cargo Drone"
  }
];

/**
 * Team page, containing all team members and their details
 */
const Team = ({ data }) => {
  const [activeTeamId, setActiveTeamId] = React.useState<number>(1);

  const activeTeam = allTeams[activeTeamId];

  const handleChangeTeam = () => {
    setActiveTeamId(activeTeamId == 1 ? 0 : 1);
  };

  const membersData = {
    "21/22": data.allMembers2122Csv.nodes,
    "22/23": data.allMembers2223Csv.nodes
  };

  const members: TeamMember[] = membersData[activeTeam.name].map((m) => ({
    id: m.id,
    name: m.first_name + " " + m.surname,
    title: m.function,
    email: m.Aero_e_mail,
    time: m.time,
    subteams: m.subteam.split(", ")
  }));

  return (
    <Layout pageTitle="Meet the team">
      <div className="TeamPage">
        <Container className="teamcontainer">
          <h1>
            OUR TEAM{" "}
            <span className="year" onClick={handleChangeTeam}>
              {activeTeam.name}
              <img src="/switch.png" alt="Switch to a different team" className="switch-team" />
            </span>
          </h1>
          <TeamView teamInfo={activeTeam} members={members} />
        </Container>
      </div>
    </Layout>
  );
};

export default Team;

export const query = graphql`
  query MyQuery {
    allMembers2122Csv {
      nodes {
        id
        first_name
        surname
        Aero_e_mail
        function
        subteam
        time
      }
    }
    allMembers2223Csv {
      nodes {
        id
        first_name
        surname
        Aero_e_mail
        function
        subteam
        time
      }
    }
  }
`;
