import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TeamMember } from "../../hooks/useTeamMembers";
import Mail from "../../images/icons/email.svg";

export interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const alt = `profile picture of ${member.fullName()}`;

  let image;
  if (member.photo === undefined) {
    image = <StaticImage src="../../images/placeholders/member.png" alt={alt} className="photo" loading="eager" />;
  } else {
    image = <GatsbyImage image={member.photo} alt={alt} className="photo" loading="lazy" />;
  }

  return (
    <div className="TeamMember">
      <div className="photo-container">
        {image}
        <div className="contact-details">
          <a href={`mailto:${member.email}`}>
            <Mail className="icon mail" />
          </a>
          {/* <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <LinkedIn className="icon linkedin" />
                </a> */}
        </div>
      </div>
      <div className="line" />
      {/* TODO: style first and last names differently */}
      <div className="name">{member.fullName()}</div>
      <div className="title">{member.title}</div>
    </div>
  );
}
