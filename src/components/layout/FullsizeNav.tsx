import React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/white-horizontal.svg";
import "./FullsizeNav.scss";

const FullsizeNav = () => {
  return (
    <nav className="FullsizeNav">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <ul className="navList">
        <li className="listItem">
          <Link to="/about-us" className="nav disabled">
            About Us
          </Link>
        </li>
        <li className="listItem">
          <Link to="/project" className="nav">
            Project
          </Link>
        </li>
        <li className="listItem">
          <Link to="/team" className="nav">
            Team
          </Link>
        </li>
        <li className="listItem">
          <Link to="/journey" className="nav disabled">
            Our Journey
          </Link>
        </li>
        <li className="listItem">
          <Link to="/partners" className="nav disabled">
            Partners
          </Link>
        </li>
        <li className="listItem">
          <Link to="/join" className="nav">
            Apply
          </Link>
        </li>
        <li className="listItem">
          <Link to="/contact" className="nav disabled">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FullsizeNav;
