import React from "react";
import classNames from "classnames";
import "./homePageSideSection.scss";
import { Link } from "gatsby";
import { Hidden } from "react-grid-system";

interface Props {
  title: string;
  text: React.ReactNode;
  buttonLabel: string;
  href: string;
  alignment?: "left" | "right";
}

export default function HomePageSideSection({ title, text, buttonLabel, href, alignment = "left" }: Props) {
  return (
    <div className={classNames("HomePageSideSection", alignment)}>
      <h2 className="title">{title}</h2>
      <div className="text-wrapper">
        <Hidden xs sm md>
          <div className="triangle" />
        </Hidden>
        <div className="text">{text}</div>
      </div>
      <div className="button-wrapper">
        <Link className="button" to={href}>
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
