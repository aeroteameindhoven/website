import classNames from "classnames";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import Layout from "../components/layout";
import "../components/styles/join.scss";

/**
 * Join page
 */
const Join = () => {
  return (
    <Layout
      pageTitle="Join Aero Team"
      postHeader={
        <div className="join-page">
          <Container>
            <div className="join-header">
              <h1>Join Aero Team</h1>
              <div>
                Do you want to be part of Eindhoven&apos;s big, ambitious drone team? Do you want to work in a team
                where students from various study programs come together to create solutions for aerial transportation?
                You can apply by sending your resume and motivation letter to join@aeroteameindhoven.nl!
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
          <div className="a" />
        </div>
      }
    />
  );
};

export default Join;

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
    title: "Marketing"
  },
  {
    title: "Interaction Research"
  }
];

const toClass = (s: string) => s.replace(" ", "").toLowerCase();
