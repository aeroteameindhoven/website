/* eslint-disable react/jsx-key */
import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";
import "../components/styles/join.scss";
import { Carousel } from "3d-react-carousal";
import { StaticImage } from "gatsby-plugin-image";

export function Head() {
  return <HeadContent title="Join" />;
}

function PostHeader() {
  return (
    <div className="join-page">
      <div className="photo-container">
        <h1 className="join-aero">JOIN AERO TEAM.</h1>
        <StaticImage src="../images/join/teampicture.jpg" alt="group picture" className="photo" loading="eager" />
      </div>
      <Container>
        <div className="join-header">
          <div>
            Do you want to be part of Eindhoven&apos;s big, ambitious drone team? Do you want to work in a team where
            students from various study programs come together to create solutions for aerial transportation? You can
            apply by filling in our interest form!
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSch1kiTE33zF5nW2WTz0WfSersjoqQcEDsEOiFNQncdMoM-Qw/viewform"
              target="_blank"
              rel="noreferrer"
              className="apply-button"
            >
              Apply now!
            </a>
          </div>
        </div>
        <div className="quotes">
          <h1>Member spotlight</h1>
          <Carousel slides={slides} autoplay={true} interval={5000} />
        </div>
        <div>
          <h1>Vacancies</h1>
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
        </div>
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
    title: "Board 3",
    text: "As a management member, you are responsible for coordinating a big team together with a group of passionate and diverse students. Here you can tackle a variety of exciting problems and have the possibility to take on several different roles."
  },
  {
    title: "Engineering",
    text: "As an engineer you are in charge of researching, designing and developing technology for the future of aerial transportation. You will be working together in a multidisciplinary team of students of various backgrounds towards a single goal."
  },
  {
    title: "Software & AI",
    text: "As a member of the Software and AI team at Aero Team Eindhoven, your role would be critical in designing and developing the software and algorithms that enable our drones to fly autonomously, using technologies such as machine learning and computer vision. "
  }
];

const toClass = (s: string) => s.replace(" & ", "").replace(" ", "").toLowerCase();

const slides = [
  <StaticImage src="../images/join/teampicture.jpg" alt="1" />,
  <StaticImage src="../images/join/teampicture.jpg" alt="2" />,
  <StaticImage src="../images/join/teampicture.jpg" alt="3" />
];
