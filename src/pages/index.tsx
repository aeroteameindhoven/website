import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import HomePageSideSection from "../components/homePageSideSection";
import Layout from "../components/layout";
import renderImage from "../images/render01.png";
import test1 from "../images/test2.png";
import "../components/styles/home.scss";
import GlobeIllustration from "../images/globe.svg";
import TUELogo from "../images/tue.svg";

import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const Index = () => {
  return (
    <Layout
      fullScreenHeader
      postHeader={
        <div className="homepage-preheader">
          <div className="content-wrapper">
            <Container>
              <Row>
                <Col lg={12}>
                  <h1 className="slogan">
                    Redefine Flying<span className="dot">.</span>
                  </h1>
                  <h2 className="secondary">
                    Developing an autonomous drone network
                    <br /> for sustainable transport
                    <br /> by zero-emission in air delivery <br />
                    <br />
                    <div className="studentteam">
                      <span className="pre-tue">Official student team of</span>
                      <a href="https://tue.nl" target="_blank" rel="noreferrer">
                        <TUELogo className="tue-logo" />
                      </a>
                    </div>
                  </h2>
                </Col>
              </Row>
            </Container>

            <GlobeIllustration className="globe" />
          </div>
        </div>
      }
    >
      <div className="homepage">
        <div className="air-wrapper">
          <div className="air" />
          <div className="air-content">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="group-photo">
                    <Fade>
                      {[1, 2, 3].map((slideImage, index) => (
                        <div className="each-fade" key={index}>
                          <div
                            className="each-photo"
                            style={{ backgroundImage: `url("/homepage-slides/${slideImage}.jpg")` }}
                          />
                        </div>
                      ))}
                    </Fade>
                  </div>
                </Col>
                <Col lg={6}>
                  <HomePageSideSection
                    title="About us"
                    text="We are a student team from the TU/e, striving to achieve ambitious goals together. With a wide variety of disciplines within the team, we form a diverse and bursting group of students."
                    buttonLabel="Meet the team"
                    allignment="right"
                    href="/team"
                  />
                </Col>
              </Row>
              <div style={{ height: 300 }} />
              <Row>
                <Col lg={6}>
                  <HomePageSideSection
                    title="Our mission"
                    text="Aero Team Eindhoven aims to contribute to making the world of flying more sustainable. By creating a global network of autonomously flying drones that can be refueled in air, fast and sustainable delivery of high priority packages can be realized."
                    buttonLabel="Read more"
                    href="/project"
                  />
                </Col>
                <Col lg={6}>
                  <div className="render-container">
                    <img className="render-background" src={test1} alt="3D Render of the drone concept" />
                    <img className="render-image" src={renderImage} alt="3D Render of the drone concept" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
