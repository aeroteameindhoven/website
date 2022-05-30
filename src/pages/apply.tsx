import * as React from "react";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-grid-system";
import "../components/styles/apply.scss";

const Apply = () => {
  return (
    <Layout
      pageTitle="Apply"
      metaDescription="Fill in our application form to show your interest in the team!"
      postHeader={<div style={{ height: 30 }} />}
    >
      <div className="apply-page">
        <div className="apply-page-bg" />
        <div className="column">
          <h1>Apply for Aero Team Eindhoven</h1>
          <div className="window">
            <div className="step">
              <div className="step-number">1</div>
              <div className="description">
                Fill in our{" "}
                <a className="nolink" href="https://forms.gle/kx6CGWCvHLoDeZf88" target="_blank" rel="noreferrer">
                  interest form
                </a>
                . After you have send the form, we will get in touch with you to plan a coffee meeting at our office.
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="description">Go to the coffee date to get to know more about Aero Team Eindhoven!</div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="description">
                Interested in joining? Send your CV and motivation letter to{" "}
                <a className="nolink joinmail" href="mailto:join@aeroteameindhoven.nl">
                  join@aeroteameindhoven.nl
                </a>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="description">Go to the follow-up meeting to get your perfect spot in the team!</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;
