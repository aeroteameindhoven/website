import React from "react";
import { Carousel } from "3d-react-carousal";
const images = [{ src: "some image" }];

const MemberCarousel = () => (
  <Carousel>
    {images.map((image, index) => (
      <div key={index} className="demo-item" style={{ backgroundImage: "url(" + image.src + ")" }} />
    ))}
  </Carousel>
);

export default MemberCarousel;
