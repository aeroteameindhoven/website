// import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-grid-system";
import "../components/styles/project.scss";

const Project = () => {
  return (
    <Layout pageTitle="Project">
      <div className="project-page">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="header">The problem</h2>
              <p>
                Aviation contributes to a big part of emissions globally, this remains a huge problem. Around 80% of
                aviation C02 emissions are emitted from flights of over 1500 kilometers, for which there is no practical
                alternative mode of transport. Current solutions aren't there yet or don't scale well enough. Therefore
                something has to change structurally. A transition needs to be started towards electric aviation,
                possible of overcoming the problems the sector currently faces, to empower more important players to
                embrace the transition towards a sustainable form of transport and aviation.
              </p>
            </Col>
            <Col md={6}>
              <h2 className="header">Our mission</h2>
              <p>
                Redefine flying. We want to redefine flying in order to make an impact in the world of sustainability.
                Our goal of team Aero is not to increase the range of aerial vehicles, such as airplanes or drone. Multi
                billionaire companies are investing a lot of money to increase the efficiency of aerial vehicles or the
                efficiency of batteries. It might not take very long and we can make us of hydrogen batteries, which
                improves the capacity of batteries significantly.
              </p>
              <p>
                However, these remain relatively small improvements on the range of aerial vehicles. Most flights are
                longer than 1500 km. In order to solve this problem we need to change the concept of flying. A single
                aircraft will not be able to transport goods or people in the near future at this pace.
              </p>
              <p>
                We envision a world where drones are interconnected in the sky. Our goal is to create a network of
                drones that can interact with each other on a whole new level. Rather than increase the range of a
                single drone, we are creating a network with a scalable range, practically endless. Using this network,
                we can connect Europe through the sky, in a sustainable way, electrically. We want to create the
                technology that enables the first steps of this network.
              </p>{" "}
              <p>
                The idea is that a cargo drone, transporting high priority products or necessities, is refueled in air
                by a second drone. The second drone carries a second battery and will switch the empty cargo battery
                using artificial intelligence. The cargo drone flies past charging points, created by our network. By
                creating this battery swap technology, we can innovate alongside the battery developments which will
                reduce the amount of swaps in time.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Project;
