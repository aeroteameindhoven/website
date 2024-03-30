import React from "react";
import "../components/styles/projectdescription.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ProjectDescriptionProps {
  title: string;
  description: string;
  imageSrc: IGatsbyImageData;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="project-description-section">
      <div className="text-container">
        <h2>{title}</h2>
        <div className="description">{description}</div>
      </div>
      <div className="image-container">
        <GatsbyImage
          image={imageSrc}
          alt="Aero team member performing management tasks"
          objectFit="cover"
          className="image"
        />
      </div>
    </div>
  );
};

export default ProjectDescription;
