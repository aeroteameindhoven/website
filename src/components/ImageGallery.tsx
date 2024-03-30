import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import "../components/styles/imagegallery.scss";
import React from "react";

interface GalleryProps {
  images: IGatsbyImageData[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery" data-aos="fade-up">
      <div>Gallery</div>
      {images.map((image, index) => (
        <GatsbyImage key={index} image={image} alt={`Drone View ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default Gallery;
