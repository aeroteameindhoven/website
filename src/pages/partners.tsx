import React from "react";
import { Container } from "react-grid-system";
import Layout from "../components/Layout";
import "../components/styles/partners.scss";

import TUELogo from "../images/tue.svg";
import GLSLogo from "../images/gls.svg";
import NXPLogo from "../images/nxp.svg";
import ZoomworksLogo from "../images/zoomworks.svg";
import { InfoEmail } from "../components/Email";
import { HeadContent } from "../components/HeadContent";

export function Head() {
  return <HeadContent title="Partners" />;
}

function PostHeader() {
  return (
    <div className="partner-page">
      <Container>
        <div className="partner-header">
          <h1>PARTNERS</h1>
          <p>Helping us lift off! Do you want to help us redefine flying? Feel free to contact us!</p>
          <div className="button-wrapper">
            <InfoEmail className="contact-button">Contact Us!</InfoEmail>
          </div>
        </div>

        <h1>PLATINUM</h1>
        <div>
          {partnerInfo.platinum.map((v) => (
            <div key={v.name} className="partner-info">
              <div className="partner-logo">{v.logo}</div>
              <div className="text">{v.text}</div>
            </div>
          ))}
        </div>

        <h1>GOLD</h1>
        <div>
          {partnerInfo.gold.map((v) => (
            <div key={v.name} className="partner-info">
              <div className="partner-logo">{v.logo}</div>
              <div className="text">{v.text}</div>
            </div>
          ))}
        </div>

        <h1>SILVER</h1>
        <div>
          {partnerInfo.silver.map((v) => (
            <div key={v.name} className="partner-info">
              <div className="partner-logo">{v.logo}</div>
              <div className="text">{v.text}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default function Partners() {
  return <Layout postHeader={<PostHeader />} />;
}

interface PartnerInfo {
  name: string;
  logo: React.ReactElement;
  url: string;
  text: string;
}

const partnerInfo: Record<"platinum" | "gold" | "silver", PartnerInfo[]> = {
  platinum: [
    {
      name: "GLS",
      logo: <GLSLogo />,
      url: "https://gls-group.com/NL/nl/home",
      text: "GLS is one of the biggest players in the shipping industry. Aside from being a titan of industry, GLS aims to constantly evolve, innovate and grow. Topics such as sustainability cannot be overlooked and are actively considered and tackled in the company. To Aero, GLS is the main strategical sponsor, and supplies the funding, advice and platform for the initial use case of package-delivery. Our solution fits perfectly within the vision of GLS and by actively working together faster and better progress can be booked. To this end, strategic advice is given on how the technological development of Aero can be properly implemented in the world of shipping, and how developments can be steered towards the right direction."
    },
    {
      name: "TU/e",
      logo: <TUELogo />,
      url: "https://www.tue.nl/en/",
      text: "The Eindhoven University of Technology is one of the major frontrunners in Dutch (and even worldwide) technical education and research. By closely collaborating with partners in public and private setting, research is converted to meaningful solutions. Two of the most important cornerstones of the TU/e, enabling students to develop themselves optimally and advancing technology for the benefit of society, are perfectly captured within student teams and thereby Aero. Both founding teams of Aero, Bluejay and Syfly, were founded by TU/e students, and were greatly supported by the TU/e since their establishment. Similarly, Aero is given continued support by the TU/e, both in terms of resources like funding and housing, and knowledge in the form of guidance and trainings. This way, the TU/e supports its students within Aero to achieve the unimaginable."
    }
  ],
  gold: [
    {
      name: "NXP",
      logo: <NXPLogo className="nxp-logo" />,
      url: "https://www.nxp.com/",
      text: "Across a broad spectrum of applications, NXP aims to advance our world by developing and supporting technological innovations. Their state-of-the-art components and extensive expertise allow them to actively compete in the world of technical parts, software and components. With a mindset of going towards a sustainable world they are one of the frontrunners in supporting sustainable innovation. NXP supports Aero in twofold by supplying both technical components for prototyping and product development, as well as professional technical support from experienced engineers."
    }
  ],
  silver: [
    {
      name: "Zoomworks",
      logo: <ZoomworksLogo />,
      url: "https://zoomworks.nl/",
      text: "Do you want to give your marketing a strong boost with powerful video marketing? We don't just make cool videos and awesome animations. With our smart solutions in findability, interactivity and personalization, we really go one step further. We are ZoomWorks. Digital marketers and audiovisual specialists. We deliver customization and are addicted to customer satisfaction."
    }
  ]
};
