import React from "react";
import { Container } from "react-grid-system";
import Layout from "../components/Layout";
import "../components/styles/partners.scss";

import TUELogo from "../images/sponsors/tue.svg";
import GLSLogo from "../images/sponsors/gls.svg";
import NXPLogo from "../images/sponsors/nxp.svg";
import KPNLogo from "../images/sponsors/kpn.svg";
import LAB76Logo from "../images/sponsors/lab76.svg";
import MAXONLogo from "../images/sponsors/maxon.svg";
import UAMLogo from "../images/sponsors/uam.svg";
import ZoomworksLogo from "../images/sponsors/zoomworks.svg";
import WurthLogo from "../images/sponsors/wurth.svg";
import EasyCompositesLogo from "../images/sponsors/easy-composites.svg";

import { PartnersEmail } from "../components/Email";
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
            <PartnersEmail className="contact-button">Contact Us!</PartnersEmail>
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
    },
    {
      name: "Würth Elektronik",
      logo: <WurthLogo className="wurth-logo" />,
      url: "https://www.we-online.com/en",
      text: "Würth Elektronik is a highly successful company within the Würth Group. It's the top choice for many developers and manufacturers from various industries. By partnering with them, they provide Aero with electronic components, printed circuit boards, and smart power and control systems."
    },
    {
      name: "KPN IoT",
      logo: <KPNLogo className="kpn-logo" />,
      url: "https://www.kpn.com/",
      text: "KPN, as a leading provider of Internet of Things (IoT) services, offers us the connectivity we need to establish a robust and reliable communication infrastructure for our drone fleet. The wide coverage of KPN's network ensures that our drones can stay connected even in remote areas, allowing us to explore and operate in various environments."
    },
    {
      name: "Maxon",
      logo: <MAXONLogo className="maxon-logo" />,
      url: "https://www.maxongroup.com/",
      text: "By partnering with Maxon, we gain access to their extensive range of top-of-the-line drive systems. Their motors are known for their exceptional quality, precision, and reliability, making them an ideal choice for our drone propulsion needs. With Maxon's drive systems, we can ensure that our drones have powerful and efficient propulsion, enabling them to achieve optimal flight performance and maneuverability."
    },
    {
      name: "HTCE UAM Hub",
      logo: <UAMLogo className="uam-logo" />,
      url: "https://www.hightechcampus.com/uamhub",
      text: "Our collaboration with the Urban Air Mobility Hub at the High Tech Campus in Eindhoven provides a perfect urban testing environment for our drones. With controlled access and guidance on certifications, we can optimize our drone technologies for urban scenarios and contribute to the advancement of urban air mobility."
    },
    {
      name: "Lab76",
      logo: <LAB76Logo className="lab76-logo" />,
      url: "https://www.lab76.org/",
      text: "Impressed by our cool project renders? You should check out Lab76! Our collaboration with Lab76, brings our ideas and story to life. Through their expertise in visual storytelling, Lab76 helps us effectively communicate and visualize our project's concepts, enhancing its overall impact and engagement. "
    }
  ],
  silver: [
    {
      name: "Easy Composites",
      logo: <EasyCompositesLogo className="easycomposites-logo" />,
      url: "https://www.easycomposites.eu",
      text: "Easy Composites Ltd is a leading supplier of advanced composite materials to individuals, businesses and educational institutions.\nOur extensive selection of materials ranges from everyday composites supplies to hard-to-find advanced materials, all sourced from leading manufactures around the world. Additionally, our comprehensive selection of composites tools and equipment ensures that technologies such as vacuum bagging, resin infusion, pre-preg, CNC tooling and rapid prototyping are as accessible and achievable and possible.\n\nThe Easy Composites team are passionate about advanced composites and what they can help people to achieve.\nWe believe in sharing knowledge, not protecting it and work tirelessly to evaluate, understand and perfect new processes and techniques that we can then share through our store, guides, video tutorials and forum."
    },
    {
      name: "Zoomworks",
      logo: <ZoomworksLogo />,
      url: "https://zoomworks.nl/",
      text: "Do you want to give your marketing a strong boost with powerful video marketing? We don't just make cool videos and awesome animations. With our smart solutions in findability, interactivity and personalization, we really go one step further. We are ZoomWorks. Digital marketers and audiovisual specialists. We deliver customization and are addicted to customer satisfaction."
    }
  ]
};
