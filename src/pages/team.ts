import "../components/styles/team.scss";
import { Years } from "../hooks/useTeamMembers";
import { HeadProps, navigate, PageProps } from "gatsby";

export interface TeamInfo {
  name: string;
  text: string;
}

// TODO: put this in a file somewhere
export const ALL_TEAMS = new Map<Years, TeamInfo>([
  [
    "21-22",
    {
      name: "21/22",
      text: "In 2022 the first year of Aero Team started, and was founded by members from the old teams Blue Jay Eindhoven and Team Syfly."
    }
  ],
  [
    "22-23",
    {
      name: "22/23",
      text: "The second year of Aero Team, our focus is on the Battery Swap mechanism and the construction of our Cargo Drone"
    }
  ],
  [
    "23-24",
    {
      name: "23/24",
      text: "In our third year of Aero Team we will focus on building onto the success of last year's Cargo Drone, as well as on further developing the Battery Swap mechanism."
    }
  ]
]);

const CURRENT_TEAM = Array.from(ALL_TEAMS.keys()).at(-1)!;

import TeamPage, { Head as TeamHead } from "./team/{Members.parent__(File)__name}";
import { useEffect } from "react";

export function Head(props: HeadProps) {
  // Use the current team's head to reduce changes
  return TeamHead({ ...props, params: { parent__name: CURRENT_TEAM } });
}

/**
 * Redirect to the current team's page
 */
export default function TeamRedirect(props: PageProps) {
  // ""Redirect"""
  useEffect(() => {
    navigate(`/team/${CURRENT_TEAM}/`, { replace: true });
  });

  // Show the current team content to reduce flicker
  return TeamPage({ ...props, params: { parent__name: CURRENT_TEAM } });
}
