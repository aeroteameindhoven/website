import React from "react";

interface ProjectCardProps {
  projectName: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, description }) => {
  return (
    <div className="project-card">
      <h3 className="project-text">{projectName} </h3>
      <p className="project-text">{description}</p>
      <div className="project-image"></div> 
      <a className="project-link">Read more</a>
    </div>
  );
};

export default ProjectCard;
