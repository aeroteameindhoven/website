import React from "react";
import { Container } from "react-grid-system";
import Layout from "../components/Layout";
import {
  partnerInfo,
  partnerLogo,
  text,
  partnerPage,
  partnerHeader,
  buttonWrapper,
  contactButton,
  partnerGroup,
  details
} from "./partners.module.scss"; // TODO: https://www.npmjs.com/package/typed-scss-modules
import { PartnersEmail } from "../components/Email";
import { HeadContent } from "../components/HeadContent";
import { PartnerPackage, partner_packages, usePartners } from "../queries/partners";

export function Head() {
  return <HeadContent title="Partners" />;
}

function PostHeader() {
  const partners = usePartners();

  return (
    <div className={partnerPage}>
      <Container>
        <div className={partnerHeader}>
          <h1>PARTNERS</h1>
          <p>Helping us lift off! Do you want to help us redefine flying? Feel free to contact us!</p>
          <div className={buttonWrapper}>
            <PartnersEmail className={contactButton}>Contact Us!</PartnersEmail>
          </div>
        </div>

        {partner_packages.map((package_name: PartnerPackage) => {
          return (
            <>
              <h1>{package_name.toLocaleUpperCase()}</h1>
              <div className={partnerGroup}>
                {partners.get(package_name)?.map((v) => (
                  <div key={v.name} className={partnerInfo}>
                    <a href={v.url} className={partnerLogo} target="_blank" rel="noreferrer">
                      <img src={v.logo} />
                    </a>
                    <details className={details}>
                      <summary>Learn More...</summary>
                      <div className={text} dangerouslySetInnerHTML={{ __html: v.html }} />
                    </details>
                  </div>
                ))}
              </div>
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default function Partners() {
  return <Layout postHeader={<PostHeader />} />;
}
