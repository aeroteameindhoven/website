import React from 'react';
import ProjectCard from './ProjectCard';
import "./styles/projects.scss";

const ProjectCarousel = () => {

  const projects = [
    { name: 'Birb', description: 'Our self-care bird.'},
    { name: 'Aegle', description: 'Our first iteration of the cargo drone.' },
    { name: 'Spaerow', description: 'Our new and improved drone' },
  ];

  return (
    <div className="project-carousel">
      {projects.map((project, index) => (
        <ProjectCard key={index} projectName={project.name} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectCarousel;
