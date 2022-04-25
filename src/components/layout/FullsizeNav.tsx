import React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/white-horizontal.svg";
import "./FullsizeNav.scss";
import classNames from "classnames";

const FullsizeNav = () => {
  return (
    <nav className="FullsizeNav">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <ul className="navList">
        {navItems.map((item) => (
          <li key={item.link} className="listItem">
            <Link to={item.link} className={classNames("nav", { disabled: item.disabled })}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FullsizeNav;

export interface NavItem {
  label: string;
  link: string;
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: "About Us",
    link: "/about-us",
    disabled: true
  },
  {
    label: "Project",
    link: "/project"
  },
  {
    label: "Team",
    link: "/team"
  },
  {
    label: "Our Journey",
    link: "/journey",
    disabled: true
  },
  {
    label: "Partners",
    link: "/partners",
    disabled: true
  },
  {
    label: "Apply",
    link: "/join"
  },
  {
    label: "Contact",
    link: "/contact",
    disabled: true
  }
];
