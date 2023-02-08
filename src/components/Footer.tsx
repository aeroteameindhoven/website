import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { sitefooter, mailLink } from "./styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={sitefooter}>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <h2>Aero Team Eindhoven</h2>
            <p>
              <a className={mailLink} href="mailto:info@aeroteameindhoven.nl">
                info@aeroteameindhoven.nl
              </a>
            </p>
          </Col>
          <Col md={12} lg={4}>
            <h2>Visiting address</h2>
            <div>Horsten 8</div>
            <div>5612 AX Eindhoven</div>
            <div>The Netherlands</div>
            <p>TU/e campus</p>
          </Col>
          <Col md={12} lg={4}>
            <h2>Social Media</h2>
            <div>
              <a
                className={mailLink}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/aeroteamehv"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a className={mailLink} target="_blank" rel="noreferrer" href="https://www.instagram.com/aeroteamehv/">
                Instagram
              </a>
            </div>
            <div>
              <a className={mailLink} target="_blank" rel="noreferrer" href="https://twitter.com/AeroTeamEhv">
                Twitter
              </a>
            </div>
            <div>
              <a
                className={mailLink}
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/AeroTeamEindhoven"
              >
                Facebook
              </a>
            </div>
            <div>
              <a
                className={mailLink}
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UC48Rt9YAXZIi9RsOdSUUcFQ"
              >
                Youtube
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
