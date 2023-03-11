import React from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import HomePageSideSection from "../components/HomePageSideSection";
import Layout from "../components/Layout";
import "../components/styles/home.scss";
import GlobeIllustration from "../images/globe.svg";
import TUELogo from "../images/tue.svg";
import "react-slideshow-image/dist/styles.css";
import { HeadContent } from "../components/HeadContent";
import { StaticImage } from "gatsby-plugin-image";
import BoardNotification from "../components/BoardNotification";
// import { Fade } from "react-slideshow-image";

export function Head() {
  return <HeadContent />;
}

function PostHeader() {
  return (
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
  );
}

export default function Index() {
  return (
    <>
      <BoardNotification />
      <Layout fullScreenHeader postHeader={<PostHeader />}>
        <div className="homepage">
          <div className="air-wrapper">
            <div className="air" />
            <div className="air-content">
              <Container>
                <Row>
                  <Col lg={6}>
                    {/* <div className="group-photo">
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
            </div> */}
                    <iframe
                      className="animation-video"
                      width="672"
                      height="378"
                      src="https://www.youtube.com/embed/Bbd129OPXqo"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <Visible xs sm md>
                      <div style={{ height: 50 }} />
                    </Visible>
                  </Col>
                  <Col lg={6}>
                    <HomePageSideSection
                      title="About us"
                      text="We are a student team from the TU/e, striving to achieve ambitious goals together. With a wide variety of disciplines within the team, we form a diverse and bursting group of students."
                      buttonLabel="Meet the team"
                      alignment="right"
                      href="/team"
                    />
                  </Col>
                </Row>

                <Visible xs sm md>
                  <div style={{ height: 200 }} />
                </Visible>
                <Visible lg xl xxl xxxl>
                  <div style={{ height: 300 }} />
                </Visible>

                <Row>
                  <Col lg={6}>
                    <HomePageSideSection
                      title="Our mission"
                      text="Aero Team Eindhoven aims to contribute to making the world of flying more sustainable. By creating a global network of autonomously flying drones that can be refueled in air, fast and sustainable delivery of high priority packages can be realized."
                      buttonLabel="Read more"
                      href="/project"
                    />
                    <Visible xs sm md>
                      <div style={{ height: 50 }} />
                    </Visible>
                  </Col>
                  <Col lg={6}>
                    <div className="render-container">
                      <StaticImage
                        className="render-background"
                        src="../images/render-background.png"
                        placeholder="blurred"
                        alt="3D Render of the drone concept"
                      />
                      <StaticImage
                        className="render-image"
                        src="../images/render.png"
                        placeholder="blurred"
                        alt="3D Render of the drone concept"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
