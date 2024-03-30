import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aegle3D from '../components/3DAegle2'; 
import ProjectDescription from '../components/ProjectDescription'; 
import StatsSection from '../components/StatsSection';
import Gallery from '../components/ImageGallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../components/styles/imagegallery.scss";

function Aegle2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const images: string[] = ["../images/project/Aegle.png", "../images/project/Spaerow.png"]; 

  return (
    <div className="aegle2">
      <Header></Header>
      <Aegle3D />
      <ProjectDescription></ProjectDescription>
      <StatsSection />
      <Gallery images={images} />
      <Footer></Footer>
    </div>
  );
}

export default Aegle2;
