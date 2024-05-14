import classNames from "classnames";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { TeamMember } from "../../queries/team_members";
import Mail from "../../images/icons/email.svg";
import LinkedIn from "../../images/icons/linkedin-minimalist.svg";
import * as styles from "./TeamMemberCard.module.scss";
import SubTeamList from "./SubteamList";

export interface TeamMemberCardProps {
  member: TeamMember;
  above_fold: boolean;
  show_subteam: boolean;
  disable_emails: boolean;

  currentSelection: string | null;
  onSelect(subteam: string): void;
}

export function TeamMemberCard({
  member,
  above_fold,
  disable_emails,
  show_subteam,
  currentSelection,
  onSelect
}: TeamMemberCardProps) {
  let image;
  if (member.photo === undefined) {
    image = (
      <StaticImage
        src="../../images/placeholders/member.png"
        alt={member.fullName()}
        className={styles.photo}
        loading="eager"
      />
    );
  } else {
    image = (
      <GatsbyImage
        image={member.photo}
        alt={member.fullName()}
        className={styles.photo}
        loading={above_fold ? "eager" : "lazy"}
      />
    );
  }

  return (
    <div className={styles.teamMember}>
      <div className={styles.photoContainer}>
        {image}
        <div className={styles.contactDetails}>
          <a
            href={disable_emails ? undefined : `mailto:${member.email}`}
            aria-disabled={disable_emails}
            aria-label={`${member.fullName()}'s email`}
          >
            <Mail className={classNames(styles.icon, styles.mail)} aria-label="Mail Icon" />
          </a>
          {member.linkedin === undefined ? null : (
            <a href={member.linkedInLink()} target="_blank" rel="noreferrer">
              <LinkedIn className={classNames(styles.icon, styles.linkedin)} aria-label="LinkedIn Logo" />
            </a>
          )}
        </div>
      </div>
      <div className={styles.line} />
      {/* TODO: style first and last names differently */}
      <div className={styles.name}>{member.fullName()}</div>
      <div className={styles.title}>{member.title}</div>
      {member.study === undefined ? null : <div className={styles.study}>{member.study}</div>}
      <SubTeamList
        className={styles.subTeamList}
        currentSelection={currentSelection}
        subTeams={member.subteams}
        onSelect={onSelect}
        hidden={!show_subteam}
      />
    </div>
  );
}
