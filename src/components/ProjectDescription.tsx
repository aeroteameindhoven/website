import React from "react";
import "../components/styles/projectdescription.scss";
import { StaticImage } from "gatsby-plugin-image";

interface ProjectDescriptionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="project-description-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="text-container">
        <h2>{title}</h2>
        <div className="description">{description}</div>
      </div>
      <div className="image-container">
      <StaticImage
        src={imageSrc}
        alt="Aero team member performing management tasks"
        objectFit="cover"
        className="image"
      />
      </div>
    </div>
  );
};

export default ProjectDescription;
