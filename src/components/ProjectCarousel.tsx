import React from 'react';
import ProjectCard from './ProjectCard';
import "./styles/projects.scss";

const ProjectCarousel = () => {

  const projects = [
    { name: 'Birb', description: 'Our self-care bird.', link: '/birb'},
    { name: 'Aegle', description: 'Our first iteration of the cargo drone.', link: '/aegle2'},
    { name: 'Battery Swap', description: 'Our new and improved drone', link:'/batteryswap' },
  ];

  return (
    <div className="project-carousel">
      {projects.map((project, index) => (
        <ProjectCard key={index} projectName={project.name} description={project.description} link={project.link} />
      ))}
    </div>
  );
};

export default ProjectCarousel;
