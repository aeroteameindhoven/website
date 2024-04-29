import classNames from "classnames";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TeamMember } from "../../queries/team_members";
import Mail from "../../images/icons/email.svg";
import LinkedIn from "../../images/icons/linkedin-minimalist.svg";

export interface TeamMemberCardProps {
  member: TeamMember;
  above_fold: boolean;
  show_subteam: boolean;

  currentSelection: string | null;
  onSelect(subteam: string): void;
}

export function TeamMemberCard({ member, above_fold, show_subteam, currentSelection, onSelect }: TeamMemberCardProps) {
  let image;
  if (member.photo === undefined) {
    image = (
      <StaticImage
        src="../../images/placeholders/member.png"
        alt={member.fullName()}
        className="photo"
        loading="eager"
      />
    );
  } else {
    image = (
      <GatsbyImage
        image={member.photo}
        alt={member.fullName()}
        className="photo"
        loading={above_fold ? "eager" : "lazy"}
      />
    );
  }

  return (
    <div className="TeamMember">
      <div className="photo-container">
        {image}
        <div className="contact-details">
          <a href={`mailto:${member.email}`}>
            <Mail className="icon mail" />
          </a>
          {member.linkedin === undefined ? null : (
            <a href={member.linkedInLink()} target="_blank" rel="noreferrer">
              <LinkedIn className="icon linkedin" />
            </a>
          )}
        </div>
      </div>
      <div className="line" />
      {/* TODO: style first and last names differently */}
      <div className="name">{member.fullName()}</div>
      <div className="title">{member.title}</div>
      {member.study === undefined ? null : <div className="study">{member.study}</div>}
      <div className="subteams" aria-hidden={!show_subteam}>
        {member.subteams.map((team) => (
          <div
            className={classNames("subteam", currentSelection === team ? "selected" : undefined)}
            key={team}
            onClick={() => onSelect(team)}
          >
            {team}
          </div>
        ))}
      </div>
    </div>
  );
}
