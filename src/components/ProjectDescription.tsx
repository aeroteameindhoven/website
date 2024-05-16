import React from "react";
import "../components/styles/projectdescription.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ProjectDescriptionProps {
  title: string;
  description: string;
  imageSrc?: IGatsbyImageData;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="project-description-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="text-container">
        <h2>{title}</h2>
        <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="image-container">{imageSrc && <GatsbyImage image={imageSrc} alt={title} />}</div>
    </div>
  );
};

export default ProjectDescription;
