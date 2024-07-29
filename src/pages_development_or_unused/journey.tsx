import React from "react";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";

export function Head() {
  return <HeadContent title="Our journey" />;
}

export default function Journey() {
  return (
    <Layout>
      <div className="journey-page">
        <h1>Graphic will go here.</h1>
      </div>
    </Layout>
  );
}
