import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";
import "../components/styles/join.scss";
import { JoinEmail } from "../components/Email";

export function Head() {
  return <HeadContent title="Join" />;
}

function PostHeader() {
  return (
    <div className="join-page">
      <Container>
        <div className="join-header">
          <h1>Join Aero Team</h1>
          <div>
            Do you want to be part of Eindhoven&apos;s big, ambitious drone team? Do you want to work in a team where
            students from various study programs come together to create solutions for aerial transportation? You can
            apply by sending your resume and motivation letter to{" "}
            <JoinEmail className="nolink">join@aeroteameindhoven.nl</JoinEmail>!
          </div>
          <p>
            Within Aero Team Eindhoven you have the possibility and flexibility to choose how you want to contribute to
            our cause. With positions ranging from part-time options next to your studies to opting for a gap year as a
            board member, you have the flexibility to see what fits you and the team best. Like every other team, Aero
            requires a management subteam responsible for project management, finance, partners, etc. Are you into
            engineering? Aero has a wide variety of engineering teams, ranging from software to electronics and
            hardware.
          </p>

          <div className="button-wrapper">
            <Link to="/apply" className="apply-button">
              Apply now!
            </Link>
          </div>
        </div>

        <Row>
          {vacancies.map((v) => (
            <Col key={v.title} md={12} lg={4}>
              <div className={classNames("vacancy", toClass(v.title))}>
                <div className="text">{v.title}</div>
                <div className="extra">
                  {v.text ||
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, magni et. Consectetur, debitis laborum magni nisi quidem eius accusantium dolor. Doloremque consectetur incidunt voluptatem harum. Nulla ab repudiandae dolorem at."}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

/**
 * Join page
 */
export default function Join() {
  return <Layout postHeader={<PostHeader />} />;
}

const vacancies = [
  {
    title: "Management",
    text: "As a management member, you are responsible for coordinating a big team together with a group of passionate and diverse students. Here you can tackle a variety of exciting problems and have the possibility to take on several different roles."
  },
  {
    title: "Engineering",
    text: "As an engineer you are in charge of researching, designing and developing crucial technology for the future of aerial transportation. You will be working together in a multidisciplinary team of students of various backgrounds towards a single goal."
  },
  {
    title: "Marketing",
    text: "As a marketing member, you will be thinking of various different and creative ways to make Aero team Eindhoven known to students, people and companies. Create social media posts, set-up events, design team clothing and anything else you can think of."
  },
  {
    title: "Interaction Research",
    text: "As an interaction research member, you will be investigating how people react to drones and how we can adapt our design process to better accommodate the integration of drones within society through various technologies like Virtual Reality."
  }
];

const toClass = (s: string) => s.replace(" ", "").toLowerCase();
