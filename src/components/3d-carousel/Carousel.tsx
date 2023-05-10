import React, { useState, useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { carouselContainer, slidingContent, slidingItem } from "./carousel.module.scss";

export interface Props {
  slides: React.ReactNode[];
  interval: number;
  onSlideChange?: () => void;
}

export default function Carousel(props: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    trackMouse: true
  });

  // Setup interval to autoplay the slides
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, props.interval);

    return () => clearInterval(interval);
  }, [props.interval]);

  // If only 2 slides exist, make it 4
  let slides = useMemo(() => {
    const slides = props.slides;

    if (slides.length == 2) {
      slides.push(...props.slides);
    }

    return slides;
  }, [props.slides]);

  const leftSlide = (slides.length + (currentSlide - 1)) % slides.length;
  const rightSlide = (currentSlide + 1) % slides.length;

  const slideRight = () => setCurrentSlide((slide) => (slide + 1) % slides.length);
  const slideLeft = () => setCurrentSlide((slide) => (slide - 1) % slides.length);

  console.log(leftSlide, currentSlide, rightSlide);

  return (
    <div className={carouselContainer} {...handlers}>
      {slides && slides.length > 0 && (
        <div className={slidingContent}>
          {slides.map((slider, index) => {
            let position: string | undefined;
            let hidden = false;

            switch (index) {
              case leftSlide: {
                position = "left";
                break;
              }
              case rightSlide: {
                position = "right";
                break;
              }
              case currentSlide: {
                position = "focus";
                break;
              }
              default: {
                hidden = true;
                break;
              }
            }

            return (
              <div className={slidingItem} data-position={position} hidden={hidden} key={index}>
                {slider}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
