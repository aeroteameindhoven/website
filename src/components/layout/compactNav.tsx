import React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/white-horizontal.svg";
import HamburgerIcon from "../../images/hamburger.svg";
import "./compactNav.scss";

const CompactNav = () => {
  return (
    <nav className="CompactNav">
      <Link to="/">
        <Logo className="main-logo" />
      </Link>
      <div>
        <HamburgerIcon className="hamburger-icon" />
      </div>
    </nav>
  );
};

export default CompactNav;
