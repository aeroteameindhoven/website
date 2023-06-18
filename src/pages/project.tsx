// import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import "../components/styles/project.scss";
import { HeadContent } from "../components/HeadContent";
import Scroll from "../components/Scroll";
import { StaticImage } from "gatsby-plugin-image";

export function Head() {
  return <HeadContent title="Project" />;
}

export default function Project() {
  return (
    <div>
      <Layout>
        <div className="project-page">
          <div className="scroll-container">
            <Scroll />
          </div>
          <div className="drone-zone">
            <StaticImage
              src="../images/project/front-overlay.png"
              alt="drone"
              className="drone-render"
              objectFit="fill"
            />
          </div>
          <div className="text-zone">
            <p>
              Aero Team Eindhoven is on a mission to revolutionize long-range package delivery by drones. To address the
              limitation of drone range, we have devised a new solution in-air battery swaps. Our goal is to use
              battery-swap drones to swap the depleted battery of a cargo drone mid-flight, enabling the cargo drone to
              fly endlessly!
            </p>
            <h1 className="shadow">This year we have started our journey by building the cargo drone, Aegle!</h1>
            <p>
              Aegle stands out with its 3D-printed construction, delivering unrivaled customization and modularity,
              while providing a remarkable forward flight time of 45 minutes. Through the power of additive
              manufacturing, our engineering team has pushed the boundaries of what is possible. Aegle`&apos;`s modular
              design allows for effortless component replacements and upgrades, ensuring adaptability to diverse mission
              requirements.
            </p>
            <p>Using 4 motors with up to 8kg of thrust each for quadcopter flight</p>
            <p>
              using 10000mAh 12S (44.4V) battery pack gives us 18 minutes of hover flight, or up to an hour of forward
              flight
            </p>
            <p>Whole assembly 3d printed in one week</p>
            <p>modular and rapidly repairable</p>
            <p>using carbon fiber and acrylic supports for a strong and rigid frame and flexible wings</p>
            <h1 className="shadow">Learn more about our project</h1>
          </div>
          <div className="video-container">
            <iframe
              className="animation-video"
              title="YouTube video player"
              src="https://www.youtube.com/embed/Bbd129OPXqo?autoplay=0&controls=0&showinfo=0&vq=720p&loop=1&cc_load_policy=1"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
