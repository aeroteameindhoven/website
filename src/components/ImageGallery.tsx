import "../components/styles/imagegallery.scss";
import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery" data-aos="fade-up">
      <div>Gallery</div>
      {images.map((image: string, index: number) => (
        <img key={index} src={image} alt={`Drone View ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default Gallery;
