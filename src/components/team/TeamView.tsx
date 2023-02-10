import React from "react";
import { Col, Row } from "react-grid-system";
import { TeamMember } from "../../hooks/useTeamMembers";
import { TeamInfo } from "../../pages/team";
import { SubTeamSelector } from "./SubTeamSelector";
// import LinkedIn from "../images/icons/linkedin.svg";
import { TeamMemberCard } from "./TeamMemberCard";

interface Props {
  teamInfo: TeamInfo;
  members: TeamMember[];
}

export default function TeamView({ teamInfo, members }: Props) {
  const [subteam, setSubteam] = React.useState<string | null>(null);

  const handleSubteamChange = (choice: string) => {
    if (choice !== subteam) {
      setSubteam(choice);
    } else {
      setSubteam(null);
    }
  };

  const allSubTeams = members.flatMap((m) => m.subteams);
  const subTeams = [...new Set(allSubTeams)];

  const membersToShow = subteam ? members.filter((m) => m.subteams.includes(subteam)) : members;

  return (
    <div>
      <p>{teamInfo.text}</p>
      <SubTeamSelector subTeams={subTeams} currentSelection={subteam} onSelect={handleSubteamChange} />
      <Row>
        {
          // Loop over all members
          membersToShow.map((member) => (
            <Col key={member.email} sm={12} md={6} lg={4}>
              <TeamMemberCard member={member} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}
