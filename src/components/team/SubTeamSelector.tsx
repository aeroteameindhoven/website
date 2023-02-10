import React from "react";

interface SubTeamSelectorProps {
  subTeams: string[];
  currentSelection: string | null;
  onSelect(subteam: string): void;
}
export function SubTeamSelector({ subTeams, currentSelection, onSelect }: SubTeamSelectorProps) {
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
}
