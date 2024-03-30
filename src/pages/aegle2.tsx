import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aegle3D from "../components/3DAegle2";
import ProjectDescription from "../components/ProjectDescription";
import StatsSection from "../components/StatsSection";
import Gallery from "../components/ImageGallery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/styles/imagegallery.scss";

function Aegle2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const images: string[] = ["../images/project/Aegle.png", "../images/project/Spaerow.png"];
  const project = {
    title: "Aeglev2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod, ligula eu aliquam maximus, magna mi suscipit libero, eget pretium felis mauris non ligula. Nam eu lectus egestas, suscipit tortor ac, aliquet elit. Sed turpis arcu, scelerisque sed sapien sit amet, sollicitudin efficitur sapien. Sed volutpat dui eros, in semper sapien maximus ac. Duis quis massa ac diam dapibus imperdiet. Vestibulum mattis euismod purus. Praesent sed volutpat ante. Nam interdum lobortis leo, a auctor nisl fermentum sed. Maecenas quam metus, interdum id enim vitae, imperdiet rhoncus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, erat at finibus sollicitudin, orci turpis egestas neque, sit amet convallis massa neque eget leo. Aenean ac ipsum auctor, egestas elit ut, semper nisl. Donec mollis, ligula blandit blandit sollicitudin, lectus dolor lacinia mi, vel auctor ante massa quis quam. ",
    imageSrc: "../images/project/Aegle.png"
  };

  return (
    <div className="aegle2">
      <Header></Header>
      <Aegle3D />
      <ProjectDescription
        title={project.title}
        description={project.description}
        imageSrc={project.imageSrc}
      ></ProjectDescription>
      <StatsSection />
      <Gallery images={images} />
      <Footer></Footer>
    </div>
  );
}

export default Aegle2;
