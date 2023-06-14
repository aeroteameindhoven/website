import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../components/styles/scroll.scss";

const Scroller = () => {
  let arrow_button = useRef<SVGRectElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({ scrollTrigger: { trigger: ".scroll", start: "top top", end: "bottom bottom", scrub: 1 } })
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0);

    if (arrow_button.current !== null) {
      arrow_button.current.addEventListener("mouseenter", () => {
        gsap.to(".arrow", {
          y: 10,
          duration: 0.8,
          ease: "back.inOut(3)",
          overwrite: "auto"
        });
      });

      arrow_button.current.addEventListener("mouseleave", () => {
        gsap.to(".arrow", {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto"
        });
      });

      arrow_button.current.addEventListener("click", () => {
        gsap.to(window, {
          scrollTo: window.innerHeight,
          duration: 1.5,
          ease: "power1.inOut"
        });
      });
    }
  }, [arrow_button]);

  return (
    <div className="scroll">
      <div className="main">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
            </g>
          </mask>
          <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
          <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
          <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
          <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />
          <text fill="#fff" x="450" y="200">
            AERO
          </text>
          <polyline
            className="arrow"
            fill="#fff"
            points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
          />
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text x="450" y="200" fill="#162a43">
              AEGLE
            </text>
          </g>
          <rect
            ref={arrow_button}
            className="arrow-button"
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Scroller;
