import React from 'react';
import ProjectCard from './ProjectCard';
import "./styles/projects.scss";
import { useProjects } from '../hooks/useProjects';

const ProjectCarousel = () => {

  // const projects = [
  //   { name: 'Birb', description: 'Our self-care bird.', link: '/birb'},
  //   { name: 'Aegle', description: 'Our first iteration of the cargo drone.', link: '/aegle2'},
  //   { name: 'Battery Swap', description: 'Our new and improved drone', link:'/batteryswap' },
  // ];

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
