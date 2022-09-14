import React from "react";
import { Col, Row } from "react-grid-system";
import { TeamInfo, TeamMember } from "../../pages/team";
// import LinkedIn from "../images/icons/linkedin.svg";
import Mail from "../../images/icons/email.svg";

interface Props {
  teamInfo: TeamInfo;
  members: TeamMember[];
}

const TeamView: React.FC<Props> = ({ teamInfo, members }) => {
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
            <Col key={member.name} sm={12} md={6} lg={4}>
              <TeamMemberCard member={member} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default TeamView;

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="TeamMember">
      <div style={{ backgroundImage: `url('/members/${getPictureFileName(member.name)}.jpg')` }} className="photo" />
      <div className="contact-details">
        <a href={`mailto:${member.email}`}>
          <Mail className="icon mail" />
        </a>
        {/* <a href={member.linkedin} target="_blank" rel="noreferrer">
          <LinkedIn className="icon linkedin" />
        </a> */}
      </div>
      <div className="line" />
      <div className="name">{member.name}</div>
      <div className="title">{member.title}</div>
    </div>
  );
};

function getPictureFileName(s: string): string {
  return s.replace(/\s/g, "").toLowerCase();
}

interface SubTeamSelectorProps {
  subTeams: string[];
  currentSelection: string | null;
  onSelect(subteam: string): void;
}

const SubTeamSelector: React.FC<SubTeamSelectorProps> = ({ subTeams, currentSelection, onSelect }) => {
  return (
    <div className="SubTeamSelector">
      <ul>
        {subTeams.map((subTeam) => (
          <li
            key={subTeam}
            onClick={() => onSelect(subTeam)}
            className={currentSelection === subTeam ? "selected" : undefined}
          >
            {subTeam}
          </li>
        ))}
      </ul>
    </div>
  );
};
