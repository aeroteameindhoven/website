import "../components/styles/team.scss";
import { HeadProps, navigate, PageProps } from "gatsby";
import TeamPage, { TeamContext, Head as TeamHead } from "../templates/team";
import { useEffect } from "react";
import { useCurrentTeamContext } from "../queries/teams";

export function Head(props: HeadProps) {
  const context = useCurrentTeamContext();

  // Use the current team's head to reduce changes
  return TeamHead({ ...props, pageContext: context });
}

/**
 * Redirect to the current team's page
 */
export default function TeamRedirect(props: PageProps) {
  const context = useCurrentTeamContext();

  // ""Redirect"""
  useEffect(() => {
    navigate(`/team/${context.year}/`, { replace: true });
  });

  // Show the current team content to reduce flicker
  return TeamPage({
    ...props,
    pageContext: context
  } as PageProps<object, TeamContext>);
}
