import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";

import TUELogo from "../images/tue.svg";
import GLSLogo from "../images/gls.svg";
import NXPLogo from "../images/nxp.svg";

const Partners: React.FC = () => {
  return (
    <Layout>
      <div className="partner-page">
        <Container>
          {/* <div className="partner-page"></div> */}
          <h1>Partners</h1>
          <p>Helping us lift off</p>
          <Row>
            <Col sm={4}>
              <div className="partner">
                <TUELogo />
                TU Eindhoven
              </div>
            </Col>
            <Col sm={4}>
              <div className="partner">
                <GLSLogo />
                GLS Netherlands
              </div>
            </Col>
            <Col sm={4}>
              <div className="partner">
                <NXPLogo />
                NXP Semiconductors
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Partners;

// const PartnerBlock = () => {
//   return (

//   );
// };
