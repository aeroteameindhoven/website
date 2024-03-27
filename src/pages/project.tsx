// import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "../components/styles/project.scss";
import { HeadContent } from "../components/HeadContent";
import ProjectCarousel from "../components/ProjectCarousel";
export function Head() {
  return <HeadContent title="Project" />;
}

export default function Project() {
  return (
    <div className="projects-page">
      <Layout>
        <div >
        <h1>Projects</h1>
        <p>Want to know more about what we&apos;ve been working on?</p>
        </div>
        <ProjectCarousel />
      </Layout>
    </div>
  );
}
