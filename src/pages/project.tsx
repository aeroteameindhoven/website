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
            <h3>Our mission</h3>
            <p className="diagonal-rev">
              Aero Team Eindhoven is on a mission to revolutionize long-range package delivery by drones. To address the
              limitation of drone range, we have devised a new solution in-air battery swaps. Our goal is to use
              battery-swap drones to swap the depleted battery of a cargo drone mid-flight, enabling the cargo drone to
              fly endlessly!
            </p>
            <h3 className="shadow">This year we have started our journey by building the cargo drone, Aegle!</h3>
            <div className="diagonal">
              <p>
                Aegle stands out for its impressive engineering and design. One notable feature is its 3D-printed
                construction, which offers unparalleled customization and modularity. The use of additive manufacturing
                has enabled our engineering team to push the boundaries of what is achievable in drone technology. The
                modular design of Aegle is another highlight, allowing for easy component replacements and upgrades.
                Modularity ensures adaptability to a wide range of mission requirements, making Aegle a versatile and
                practical choice.
              </p>
              <p>
                When it comes to flight capabilities, Aegle utilizes five motors in a quad-plane configuration, each
                capable of generating up to 8kg of thrust. This configuration enables stable quadcopter flight,
                providing reliability and control in various scenarios. Powering Aegle is a 10000mAh 12S (44.4V) battery
                pack, offering a hover flight time of 18 minutes or up to an hour of continuous forward flight. This
                battery capacity provides ample time for capturing aerial footage or completing missions without
                interruptions.
              </p>
              <p>
                In terms of production efficiency, the entire assembly of Aegle can be 3D printed within a week. This
                rapid manufacturing process allows us to streamline production and manufacture drones in a timely
                manner. Aegle&apos;s design also prioritizes ease of repair, with a modular and rapidly repairable
                structure. This feature ensures that maintenance and repairs can be carried out quickly, minimizing
                downtime and maximizing operational efficiency. To ensure a robust and lightweight frame, the drone
                incorporates carbon fiber and acrylic supports. This combination of materials provides both strength and
                rigidity, while the flexible wings enhance maneuverability during flight. Aegle represents our
                commitment to pushing the boundaries of drone technology through innovation, practicality, and reliable
                performance.
              </p>
            </div>
            <h3 className="shadow">
              Next year we will use the knowledge we gathered while creating Aegle to start designing and building
              Spearow, our battery-swap drone.
            </h3>
            <h2 className="shadow">Learn more about our project</h2>
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
