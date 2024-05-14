import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import "../components/styles/imagegallery.scss";
import React from "react";

interface GalleryProps {
  images: IGatsbyImageData[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery">
      <div className="gallery-title">Gallery</div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <GatsbyImage key={index} image={image} alt={`Drone View ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
