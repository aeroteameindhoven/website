import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/projects.scss";
import { useProjects } from "../queries/projects";

const ProjectCarousel = () => {
  const projects = useProjects();

  console.log(projects);

  return (
    <div className="project-carousel">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCarousel;
