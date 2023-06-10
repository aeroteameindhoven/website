import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import "../components/styles/scroll.scss";

const Scroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".main", {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    });

    gsap.set(".scrollDist", {
      width: "100%",
      height: "200%"
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scrollDist",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      })
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0);

    // const arrowBtn = document.getElementById("arrowBtn");

    // arrowBtn.addEventListener("mouseenter", () => {
    //   gsap.to(".arrow", { y: 10, duration: 0.8, ease: "back.inOut(3)", overwrite: "auto" });
    // });

    // arrowBtn.addEventListener("mouseleave", () => {
    //   gsap.to(".arrow", { y: 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    // });

    // arrowBtn.addEventListener("click", () => {
    //   gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: "power1.inOut" });
    // });
  }, []);

  return (
    <div className="scroll">
      <div className="main-scroll">
        <div className="mask">
          <div className="cloud1">
            <div className="mask-content">
              <StaticImage src="../images/porject/clouds/cloud1Mask.jpg" alt="cloud1Mask" width={1200} height={800} />
            </div>
          </div>
        </div>
        <StaticImage
          className="cloud2"
          src="../images/project/clouds/cloud-two.png"
          alt="cloud2"
          width={1200}
          height={800}
        />
        <StaticImage
          className="cloud1"
          src="../images/project/clouds/cloud-one.png"
          alt="cloud1"
          width={1200}
          height={800}
        />
        <StaticImage
          className="cloud3"
          src="../images/project/clouds/cloud-three.png"
          alt="cloud3"
          width={1200}
          height={800}
        />

        <text className="explore" fill="#fff">
          AERO
        </text>
        <polyline
          className="arrow"
          fill="#fff"
          points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
        />
        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />
          <text className="further" fill="#162a43">
            AEGLE
          </text>
        </g>

        <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Scroll;
