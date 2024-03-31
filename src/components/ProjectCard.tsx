import React from "react";
import { Project } from "../hooks/useProjects";
import { GatsbyImage } from "gatsby-plugin-image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-text">{project.name}</h3>
      <p className="project-text">{project.blurb}</p>
      {project.images[0] !== undefined ? (
        <GatsbyImage image={project.images[0]} alt={project.name} className="project-image" />
      ) : null}
      <a className="project-link" href={project.slug}>
        Read more
      </a>
    </div>
  );
};

export default ProjectCard;
