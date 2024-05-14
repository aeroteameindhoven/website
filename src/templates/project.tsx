import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aegle3D from "../components/3DAegle2";
import ProjectDescription from "../components/ProjectDescription";
import StatsSection from "../components/StatsSection";
import Gallery from "../components/ImageGallery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/imagegallery.scss";
import { Project } from "../hooks/useProjects";
import { PageProps } from "gatsby";

export default function Aegle2({ pageContext: project }: PageProps<object, Project>) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const stats = [
    { label: "Flight Time", value: "30 minutes" },
    { label: "Max Speed", value: "1000 km/h" },
    { label: "Battery", value: "big boi" },
    { label: "Wingspan", value: "3 meters" },
  ];

  return (
    <div className="aegle2">
      <Header />
      <ProjectDescription title={project.name} description={project.html} imageSrc={project.images[0]} />
      <StatsSection title="Aegle v2 Specs" stats={stats}/>
      <Gallery images={project.images} />
      {project.model && <Aegle3D model_path={project.model} />}
      <Footer />
    </div>
  );
}
