// import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "../components/styles/project.scss";
import { HeadContent } from "../components/HeadContent";
import Scroll from "../components/Scroll";
import { StaticImage } from "gatsby-plugin-image";

export function Head() {
  return <HeadContent title="Project" />;
}

export default function Project() {
  return (
    <div>
      <Layout>
        <div className="project-page">
          <div className="scroll-container">
            <Scroll />
          </div>
          <div className="text-zone">
            <h1>3 meter wingspan</h1>
            <h1>fun fact 1</h1>
            <h1>fun fact 2</h1>
            <h1>fun fact 3</h1>
          </div>
          <div className="drone-zone">
            <StaticImage  src="../images/project/front-overlay.png" alt="drone" className="drone-render" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
