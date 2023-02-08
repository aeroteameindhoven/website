import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";

export function Head() {
  return <HeadContent title="404 - Page not found" />;
}

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1>Page not found</h1>
            <h2>Please use the menu above to navigate our website</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
