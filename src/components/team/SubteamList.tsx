import classNames from "classnames";
import * as styles from "./SubteamList.module.scss";
import React from "react";

interface SubteamListProps {
  onSelect(subteam: string): void;
  subTeams: string[];
  currentSelection: string | null;
  hidden?: boolean;
  className?: string;
}

export default function SubTeamList({
  onSelect,
  subTeams,
  currentSelection,
  hidden = false,
  className
}: SubteamListProps) {
  return (
    <div className={classNames(styles.subTeamList, className)} aria-hidden={hidden}>
      {subTeams.map((team) => (
        <div
          className={classNames(styles.subTeam, currentSelection === team ? styles.selected : undefined)}
          key={team}
          onClick={() => onSelect(team)}
        >
          {team}
        </div>
      ))}
    </div>
  );
}
