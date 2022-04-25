import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";
import "../components/styles/team.scss";
import { graphql } from "gatsby";

import LinkedIn from "../images/icons/linkedin.svg";
import Mail from "../images/icons/email.svg";

/**
 * Team page, containing all team members and their details
 */
const Team = ({ data }) => {
  const membersCSV = data.allMembersCsv.nodes;

  const members: TeamMember[] = membersCSV.map((m) => ({
    id: m.id,
    name: m.first_name + " " + m.surname,
    title: m.function,
    email: m.Aero_e_mail,
    time: m.time
  }));

  return (
    <Layout pageTitle="Meet the team">
      <div className="TeamPage">
        <Container className="teamcontainer">
          <h1>
            OUR TEAM <span className="year">2022</span>
          </h1>
          <p>
            In 2022 the first year of Aero Team started, and was founded by members from the old teams Blue Jay
            Eindhoven and Team Syfly.
          </p>
          <Row>
            {
              // Loop over all members
              members.map((member) => (
                <Col key={member.name} sm={12} md={6} lg={4} className="TeamMemberCol">
                  <TeamMemberCard member={member} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Team;

export const query = graphql`
  query MyQuery {
    allMembersCsv {
      nodes {
        first_name
        time
        Aero_e_mail
        function
        id
        surname
      }
    }
  }
`;

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

interface TeamMember {
  id: string;
  name: string;
  title: string;
  email: string;
  photo: string;
  linkedin: string;
  time: string;
}

function getPictureFileName(s: string): string {
  return s.replace(/\s/g, "").toLowerCase();
}
