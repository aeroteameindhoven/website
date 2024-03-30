// import { Link } from "gatsby";
import React from "react";
// import Layout from "../components/Layout";
import "../components/styles/project.scss";
import { HeadContent } from "../components/HeadContent";
import ProjectCarousel from "../components/ProjectCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Head() {
  return <HeadContent title="Project" />;
}

export default function Project() {
  return (
    <div className="projects-page">
      <Header></Header>
      <h1 className="projects-title">Projects</h1>
      <p className="projects-question">Want to know more about what we&apos;ve been working on?</p>
      <ProjectCarousel />
      <Footer></Footer>
    </div>
  );
}
