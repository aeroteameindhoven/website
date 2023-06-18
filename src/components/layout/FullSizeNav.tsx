import React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/white-horizontal.svg";
import "./FullSizeNav.scss";
import classNames from "classnames";

const FullSizeNav = () => {
  return (
    <nav className="FullSizeNav">
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

export default FullSizeNav;

export interface NavItem {
  label: string;
  link: string;
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: "Team",
    link: "/team"
  },
  {
    label: "Project",
    link: "/project"
  },
  // {
  //   label: "Our Journey",
  //   link: "/journey",
  //   disabled: true
  // },
  {
    label: "Partners",
    link: "/partners"
  },
  {
    label: "Join",
    link: "/join"
  },
  // {
  //   label: "Internships",
  //   link: "/internships",
  //   disabled: true
  // }
];
