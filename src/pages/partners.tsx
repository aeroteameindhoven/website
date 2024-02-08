import React from "react";
import { Container } from "react-grid-system";
import Layout from "../components/Layout";
import "../components/styles/partners.scss";

import { PartnersEmail } from "../components/Email";
import { HeadContent } from "../components/HeadContent";
import { PartnerPackage, partner_packages, usePartners } from "../hooks/usePartners";

export function Head() {
  return <HeadContent title="Partners" />;
}

function PostHeader() {
  const partners = usePartners();

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

        {partner_packages.map((package_name: PartnerPackage) => {
          return (
            <>
              <h1>{package_name.toLocaleUpperCase()}</h1>
              {partners.get(package_name)?.map((v) => (
                <div key={v.name} className="partner-info">
                  <a href={v.url} className="partner-logo" target="_blank" rel="noreferrer">
                    <img src={v.logo} />
                  </a>
                  <div className="text" dangerouslySetInnerHTML={{ __html: v.html }} />
                </div>
              ))}
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
