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

  show_subteams: boolean;
  subteam: string | null;

  setSubteam: (team: string) => void;
  clearSubteam: () => void;
}

export default function TeamView({ teamInfo, members, subteam, setSubteam, clearSubteam, show_subteams }: Props) {
  const handleSubteamChange = (choice: string) => {
    if (choice !== subteam) {
      setSubteam(choice);
    } else {
      clearSubteam();
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
          membersToShow.map((member, i) => (
            <Col key={member.email} sm={12} md={6} lg={4}>
              <TeamMemberCard
                member={member}
                above_fold={i < 4}
                onSelect={handleSubteamChange}
                currentSelection={subteam}
                show_subteam={show_subteams}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}
