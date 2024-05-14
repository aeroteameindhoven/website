import React from "react";
import { HeadProps, Link, navigate, PageProps } from "gatsby";
import { HeadContent } from "../components/HeadContent";
import { useTeamMembers, Years } from "../queries/team_members";
import { Col, Container, Row } from "react-grid-system";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./team.module.scss";
import { TeamMemberCard } from "../components/team/TeamMemberCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubTeamList from "../components/team/SubteamList";

export interface TeamContext {
  year: Years;
  year_index: number;

  description: string;

  previous_year: Years;
}

export function Head(props: HeadProps<object, TeamContext>) {
  return <HeadContent title={`The ${props.pageContext.year} Team`} />;
}

/**
 * Team page, containing all team members and their details
 */
export default function Team(props: PageProps<object, TeamContext>) {
  const year = props.pageContext.year;

  // TODO: make these members show separately somehow
  const current_members = useTeamMembers(year)!;

  const sub_teams = [...new Set(current_members.flatMap((m) => m.subteams))];

  // TODO: make this a dropdown, not a toggle
  const nextTeam = `/team/${props.pageContext.previous_year}`;

  const { toggleSubteam, subteam } = (() => {
    const params = new URLSearchParams(props.location.hash.substring(1));
    const subteam = params.get("filter");

    return {
      toggleSubteam: (team: string) => {
        if (team === subteam) {
          params.delete("filter");
        } else {
          params.set("filter", team);
        }
        navigate(`#${params.toString()}`);
      },
      subteam
    };
  })();

  const filtered_members =
    subteam !== null ? current_members.filter((m) => m.subteams.includes(subteam)) : current_members;

  return (
    <>
      <Header />

      <main className={styles.teamPage}>
        <Container className={styles.teamContainer}>
          <h1>
            OUR TEAM
            {/* TODO: make this a dropdown, not a toggle */}
            <Link className={styles.yearDisplay} to={nextTeam}>
              {props.pageContext.year}
              <StaticImage
                // FIXME: this really should be SVG
                src="../images/switch.png"
                alt="Switch to a different team"
                className={styles.switchTeam}
                loading="eager"
                placeholder="none"
              />
            </Link>
          </h1>
          <p>{props.pageContext.description}</p>
          <SubTeamList subTeams={sub_teams} currentSelection={subteam} onSelect={toggleSubteam} />
          <Row>
            {
              // Loop over all members
              filtered_members.map((member, i) => (
                <Col key={member.email} sm={12} md={6} lg={4}>
                  <TeamMemberCard
                    member={member}
                    above_fold={i < 4}
                    onSelect={toggleSubteam}
                    currentSelection={subteam}
                    // FIXME: less janky
                    // Do not show the subteams under the 21-22 year
                    show_subteam={year !== "21-22"}
                    disable_emails={props.pageContext.year_index !== 0}
                  />
                </Col>
              ))
            }
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}
