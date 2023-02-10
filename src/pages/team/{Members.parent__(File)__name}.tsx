import React from "react";
import { HeadProps, Link, PageProps } from "gatsby";
import { HeadContent } from "../../components/HeadContent";
import { useTeamMembers, Years } from "../../hooks/useTeamMembers";
import { ALL_TEAMS } from "../team";
import Layout from "../../components/Layout";
import { Container } from "react-grid-system";
import { StaticImage } from "gatsby-plugin-image";
import TeamView from "../../components/team/TeamView";

export function Head(props: HeadProps) {
  return <HeadContent title={`The ${props.params["parent__name"]} Team`} />;
}

/**
 * Team page, containing all team members and their details
 */
export default function Team(props: PageProps) {
  const year = props.params["parent__name"] as Years;

  const activeTeam = ALL_TEAMS.get(year)!;
  // TODO: make these members show seperatly somehow
  const current_members = useTeamMembers(year)!.filter((member) => member.status != "inactive");

  // TODO: make this a dropdown, not a toggle
  const nextTeam = (() => {
    const keys = Array.from(ALL_TEAMS.keys());

    const currentIndex = keys.findIndex((key) => key == year);
    const nextKey = keys[(currentIndex + 1) % keys.length]!;

    return `/team/${nextKey}`;
  })();

  return (
    <Layout>
      <div className="TeamPage">
        <Container className="teamcontainer">
          <h1>
            OUR TEAM
            {/* TODO: make this a dropdown, not a toggle */}
            <Link className="year" to={nextTeam}>
              {activeTeam.name}
              <StaticImage
                // FIXME: this really should be SVG
                src="../../images/switch.png"
                alt="Switch to a different team"
                className="switch-team"
                loading="eager"
                placeholder="none"
              />
            </Link>
          </h1>
          <TeamView teamInfo={activeTeam} members={current_members} />
        </Container>
      </div>
    </Layout>
  );
}
