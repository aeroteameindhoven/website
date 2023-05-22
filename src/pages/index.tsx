import React from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import HomePageSideSection from "../components/HomePageSideSection";
import Layout from "../components/Layout";
import "../components/styles/index.scss";
// import GlobeIllustration from "../images/globe.svg";
import TUELogo from "../images/sponsors/tue.svg";
import "react-slideshow-image/dist/styles.css";
import { HeadContent } from "../components/HeadContent";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../components/Video";

export function Head() {
  return <HeadContent />;
}

function PostHeader() {
  return (
    <div className="homepage-preheader">
      <div className="content-wrapper">
        <Video className="reveal-video" />
        <div className="overlay-text">
          <h1 className="slogan">
            <span className="color-a">A</span>ero presents: <span className="color-a">A</span>egle takes flight
            <span className="dot">.</span>
          </h1>
          <h2 className="secondary">
            Join us on <span className="bold-details">June 19th</span> at the{" "}
            <span className="bold-details">High Tech Campus</span>
            <br /> for an extraordinary launch event,
            <br /> where we will unveil and demonstrate the flight
            <br /> of our new cutting-edge drone.
            <br />
            <a
              href="https://www.eventbrite.com/e/aero-reveals-aegle-takes-flight-tickets-633934102967"
              target="_blank"
              rel="noreferrer"
              className="apply-button"
            >
              Get your ticket!
            </a>
            <div className="studentteam">
              <span className="pre-tue">Official student team of</span>
              <a href="https://tue.nl" target="_blank" rel="noreferrer">
                <TUELogo className="tue-logo" />
              </a>
            </div>
          </h2>
          <div className="interest-lunch">
            <h2 className="secondary">
              Want to know more?
              <br />
              Join our interest lunch on <span className="bold-details">May 30th 12:30-13:30</span>
              <br /> at our office in <span className="bold-details">Momentum</span> to explore
              <br /> the opportunities to be part of our team!
              <br />
              <a
                href="https://www.eventbrite.com/e/interest-lunch-tickets-637996152667"
                target="_blank"
                rel="noreferrer"
                className="apply-button"
              >
                Sign up now!
              </a>
            </h2>
          </div>
        </div>
        {/* <GlobeIllustration className="globe" /> */}
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <Layout postHeader={<PostHeader />}>
      <div className="homepage">
        <div className="air-wrapper">
          <div className="air" />
          <div className="air-content">
            <Container>
              <Row>
                <Col lg={6}>
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
  );
}
