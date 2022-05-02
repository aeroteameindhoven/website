import React from "react";
import classNames from "classnames";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";
import * as uuid from "uuid";
import { withPrefix } from "gatsby";

const Partners: React.FC = () => {
  return (
    <Layout>
      <div className="partner-page">
        <Container>
          {/* <div className="partner-page"></div> */}
          <h1>Partners</h1>
          <p>Helping us lift off!</p>
          <Row>
            {partnerInfo.map((v) => (
              <div key={`svg_image_container${uuid.v4()}`}>
                <img key={`svg_image_${uuid.v4()}`} src={withPrefix(v.logo)} alt={v.name} />
              </div>
            ))}
          </Row>

          <div className="button-wrapper">
            Do you want to help us redefine flying? Contact us!
            <Contact className="contactButton">Contact</Contact>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Partners;

const partnerInfo = [
  {
    name: "Tu/E",
    logo: "../images/tue.svg",
    text: ""
  },
  {
    name: "NXP",
    logo: "../images/nxp.svg",
    text: ""
  },
  {
    name: "GLS",
    logo: "../images/gls.svg",
    text: ""
  }
];

const toClass = (s: string) => s.replace(" ", "").toLowerCase();

interface MailAProps {
  className?: string;
  children?: React.ReactNode;
}

const Contact: React.FC<MailAProps> = ({ children, className }) => {
  return (
    <a
      href={`mailto:join@aeroteameindhoven.nl?subject=Interest in joining Aero Team Eindhoven!&body=Tell us about yourself!`}
      className={className}
    >
      {children}
    </a>
  );
};
