// import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-grid-system";
import "../components/styles/project.scss";
import { HeadContent } from "../components/HeadContent";
import { StaticImage } from "gatsby-plugin-image";

export function Head() {
  return <HeadContent title="Project" />;
}

export default function Project() {
  return (
    <Layout>
      <div className="project-page">
        <div className="animation">
          <div className="clouds">
            <StaticImage
              src="../images/project/clouds/cloud1.png"
              alt="cloud"
              style={{ "--i": "2" } as React.CSSProperties}
            />
            <StaticImage
              src="../images/project/clouds/cloud3.png"
              alt="cloud"
              style={{ "--i": "2.5" } as React.CSSProperties}
            />
            <StaticImage
              src="../images/project/clouds/cloud3.png"
              alt="cloud"
              style={{ "--i": "3" } as React.CSSProperties}
            />
            <StaticImage
              src="../images/project/clouds/cloud4.png"
              alt="cloud"
              style={{ "--i": "4" } as React.CSSProperties}
            />
            <StaticImage
              src="../images/project/clouds/cloud5.png"
              alt="cloud"
              style={{ "--i": "5" } as React.CSSProperties}
            />
          </div>
          <div className="overlay-drone">
            <StaticImage
              className="render-background"
              src="../images/project/front-overlay.png"
              placeholder="blurred"
              alt="drone flying"
            />
          </div>
        </div>
        <div>
          <Container>
            <Row className="center">
              <iframe
                className="animation-video"
                title="YouTube video player"
                src="https://www.youtube.com/embed/Bbd129OPXqo?autoplay=0&controls=0&showinfo=0&vq=720p&loop=1&cc_load_policy=1"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p>
                Aero Team Eindhoven is on a mission to revolutionize long-range package delivery by drones. To address
                the limitation of drone range, we have devised a new solution in-air battery swaps. Where we use
                battery-swap drones to swap the depleted battery of a cargo drone mid-flight, enabling the cargo drone
                to fly endlessly!
              </p>
            </Row>
            <Row>
              <Col>
                <StaticImage
                  className="drone"
                  src="../images/project/Aegle2.png"
                  placeholder="blurred"
                  alt="3D Render of the drone concept"
                />
              </Col>
              <Col>
                <h2>Aegle</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab mollitia reiciendis aut praesentium
                  quam veniam provident harum vitae quia. Molestiae enim placeat maiores expedita. Quidem culpa modi
                  perferendis commodi!
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Spaerow</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque magnam sunt hic tenetur,
                  cum animi expedita consectetur nam, consequatur aspernatur! Natus impedit dolore quam reiciendis ipsa
                  dolorum quas perferendis.
                </p>
              </Col>
              <Col>
                <StaticImage
                  src="../images/project/Spaerow.png"
                  placeholder="blurred"
                  alt="3D Render of the drone concept"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
