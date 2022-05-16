import React from "react";
import classNames from "classnames";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";
import "../components/styles/partners.scss";

import TUELogo from "../images/tue.svg";
import GLSLogo from "../images/gls.svg";
import NXPLogo from "../images/nxp.svg";

const Partners: React.FC = () => {
  return (
    <Layout
      pageTitle="Join Aero Team"
      postHeader={
        <div className="partner-page">
          <Container>
            <div className="partner-header">
              <h1>Partners</h1>
              <p>Helping us lift off!</p>
            </div>
            <div>
              {partnerInfo.map((v) => {
                const Logo = <div className="partner-logo">{v.logo}</div>;
                const Text = <p className="text">{v.text}</p>;
                const Info = (
                  <div className="partner-info">
                    {Logo}
                    {Text}
                  </div>
                );
                return Info;
              })}
            </div>
            <p> Do you want to help us redefine flying? Feel free to contact us!</p>
            <div className="button-wrapper">
              <Contact className="contact-button">Contact</Contact>
            </div>
          </Container>
        </div>
      }
    />
  );
};

export default Partners;

const partnerInfo = [
  {
    name: "GLS",
    logo: <GLSLogo height={600} width={600} />,
    text: "GLS is one of the biggest players in the shipping industry. Aside from being a titan of industry, GLS aims to constantly evolve, innovate and grow. Topics such as sustainability cannot be overlooked and are actively considered and tackled in the company. To Aero, GLS is the main strategical sponsor, and supplies the funding, advice and platform for the initial use case of package-delivery. Our solution fits perfectly within the vision of GLS and by actively working together faster and better progress can be booked. To this end, strategic advice is given on how the technological development of Aero can be properly implemented in the world of shipping, and how developments can be steered towards the right direction."
  },
  {
    name: "Tu/E",
    logo: <TUELogo height={400} width={400} />,
    text: ""
  },
  {
    name: "NXP",
    logo: <NXPLogo height={300} width={300} />,
    text: "Across a broad spectrum of applications, NXP aims to advance our world by developing and supporting technological innovations. Their state-of-the-art components and extensive expertise allow them to actively compete in the world of technical parts, software and components. With a mindset of going towards a sustainable world they are one of the frontrunners in supporting sustainable innovation. NXP supports Aero in twofold by supplying both technical components for prototyping and product development, as well as professional technical support from experienced engineers."
  }
];

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
