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
      <div className="project-image">
        {project.image !== undefined ? <GatsbyImage image={project.image} alt={project.name} /> : null}
      </div>
      <a className="project-link" href={`projects/${project.slug}`}>
        Read more
      </a>
    </div>
  );
};

export default ProjectCard;
