import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import HomePageSideSection from "../components/homePageSideSection";
import Layout from "../components/layout";
import renderImage from "../images/render01.png";
import test1 from "../images/test2.png";
import "../components/styles/home.scss";
import GlobeIllustration from "../images/globe.svg";

const Index = () => {
  return (
    <Layout>
      <div className="homepage">
        <div style={{ height: 100 }} />
        <div className="content-wrapper">
          <Container>
            <Row>
              <Col lg={6}>
                <h1 className="slogan">
                  Redefine Flying<span className="dot">.</span>
                </h1>
                <h2 className="secundary">
                  Developing an autonomous drone network
                  <br /> for sustainable transport
                  <br /> by zero-emission in air delivery
                </h2>
              </Col>
              <Col lg={6}>
                <div className="globe-container">
                  <GlobeIllustration className="globe" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="air-wrapper">
          <div className="air" />
          <div className="air-content">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="group-photo">group photo</div>
                </Col>
                <Col lg={6}>
                  <HomePageSideSection
                    title="About us"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia orci ligula, vitae pharetra nisi vulputate non. Nulla rhoncus lorem nec enim bibendum, ac viverra mauris"
                    buttonLabel="Meet the team"
                    allignment="right"
                    href="/about-us"
                  />
                </Col>
              </Row>
              <div style={{ height: 300 }} />
              <Row>
                <Col lg={6}>
                  <HomePageSideSection
                    title="Our mission"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia orci ligula, vitae pharetra nisi vulputate non. Nulla rhoncus lorem nec enim bibendum, ac viverra mauris"
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
