import classNames from "classnames";
import React from "react";

interface SubTeamSelectorProps {
  subTeams: string[];
  currentSelection: string | null;
  onSelect(subteam: string): void;
}
export function SubTeamSelector({ subTeams, currentSelection, onSelect }: SubTeamSelectorProps) {
  return (
    <ul className="subteams">
      {subTeams.map((subTeam) => (
        <li
          key={subTeam}
          onClick={() => onSelect(subTeam)}
          className={classNames("subteam", currentSelection === subTeam ? "selected" : undefined)}
        >
          {subTeam}
        </li>
      ))}
    </ul>
  );
}
