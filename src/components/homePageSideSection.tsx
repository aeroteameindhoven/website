import React from "react";
import classNames from "classnames";
import "./homePageSideSection.scss";
import { Link } from "gatsby";

interface Props {
  title: string;
  text: React.ReactNode;
  buttonLabel: string;
  href?: string;
  allignment?: "left" | "right";
}

const HomePageSideSection: React.FC<Props> = ({ title, text, buttonLabel, href, allignment = "left" }) => {
  return (
    <div className={classNames("HomePageSideSection", allignment)}>
      <h2 className="title">{title}</h2>
      <div className="text-wrapper">
        <div className="triangle" />
        <div className="text">{text}</div>
      </div>
      <div className="button-wrapper">
        <Link className="button" to={href}>
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

export default HomePageSideSection;
