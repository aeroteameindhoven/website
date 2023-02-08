import React from "react";
import uuid from "uuid";
import { withPrefix } from "gatsby";

interface Props {
  logoNames: { icon: string; title: string }[];
}

export default function Logo({ logoNames }: Props) {
  return (
    <div>
      {logoNames.map((item) => {
        return (
          <div key={`svg_image_container${uuid.v4()}`}>
            <img key={`svg_image_${uuid.v4()}`} src={withPrefix(item.icon)} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
}
