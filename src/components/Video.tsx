import React from "react";
import RevealVideo from "../images/aeroreveal3.mp4";
import "../components/styles/video.scss";

interface Props {
  className?: string;
}

export default function Video(props: Props) {
  return (
    <div className={props.className}>
      <video autoPlay loop muted style={{ width: "100%", height: "auto" }}>
        <source src={RevealVideo} type="video/mp4" />
      </video>
    </div>
  );
}
