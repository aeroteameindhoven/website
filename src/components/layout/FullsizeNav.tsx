import React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/white-horizontal.svg";
import "./FullsizeNav.scss";
import classNames from "classnames";

const FullsizeNav: React.FC = () => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = React.useState(false);

  const handleProjectClick = () => {
    setIsProjectDropdownOpen((prevState) => !prevState);
  };
  // const FullsizeNav = () => {
  return (
    <nav className="FullsizeNav">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <ul className="navList">
        {navItems.map((item) => (
          // <li key={item.link} className="listItem">
          //   <Link to={item.link} className={classNames("nav", { disabled: item.disabled })}>
          //     {item.label}
          //   </Link>
          // </li>
          <li key={item.link} className="listItem">
            {item.label === "Project" ? (
              <div className="dropdownWrapper">
                <button onClick={handleProjectClick} className="nav">
                  {item.label}
                </button>
                {isProjectDropdownOpen && (
                  <div className="dropdownContent">
                    <Link to="/project/one" className="nav">
                      Battery Swap
                    </Link>
                    <Link to="/project/two" className="nav">
                      VR Experience
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link to={item.link} className={classNames("nav", { disabled: item.disabled })}>
                {item.label}
              </Link>
            )}
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
    label: "Team",
    link: "/team"
  },
  {
    label: "Project",
    link: "/project"
  },
  {
    label: "Our Journey",
    link: "/journey",
    disabled: true
  },
  {
    label: "Partners",
    link: "/partners"
  },
  {
    label: "Join",
    link: "/join"
  },
  {
    label: "Internships",
    link: "/internships",
    disabled: true
  }
];
