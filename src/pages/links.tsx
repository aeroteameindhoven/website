import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";

const LINKTREE = "https://linktr.ee/aeroteamehv?utm_source=qr_code";

export function Head() {
  return (
    <>
      <HeadContent title="Link Tree" />
      <meta httpEquiv="refresh" content={`3; url=${LINKTREE}`} />
    </>
  );
}

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>Visit our LinkTree</h1>
            <p>
              If you are not automatically redirected in 5 seconds, manually navigate{" "}
              <a className="nav" href={LINKTREE}>
                here
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
