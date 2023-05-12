import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { sitefooter, mailLink, icon, appName } from "./styles/footer.module.scss";
import Mail from "../images/icons/email.svg";
import Phone from "../images/icons/phone.svg";
import LinkedIn from "../images/icons/icons-linkedin.svg";
import Instagram from "../images/icons/icons-instagram.svg";
import Youtube from "../images/icons/icons-youtube.svg";

export default function Footer() {
  return (
    <footer className={sitefooter}>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <h2>Contact</h2>
            <p>
              <a className={mailLink} href="tel:+31619183031">
                <Phone className={icon} />
                +31 6 19183031
              </a>
              <a className={mailLink} href="mailto:info@aeroteameindhoven.nl">
                <Mail className={icon} />
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
                <LinkedIn /> <span className={appName}>LinkedIn</span>
              </a>
            </div>
            <div>
              <a className={mailLink} target="_blank" rel="noreferrer" href="https://www.instagram.com/aeroteamehv/">
                <Instagram /> <span className={appName}>Instagram</span>
              </a>
            </div>
            <div>
              <a className={mailLink} target="_blank" rel="noreferrer" href="https://twitter.com/AeroTeamEhv">
                <Youtube /> <span className={appName}>Youtube</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
