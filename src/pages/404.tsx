import * as React from "react";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 - Page not found">
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
};

export default NotFoundPage;
