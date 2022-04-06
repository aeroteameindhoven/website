import React from "react";
import { Link } from "gatsby";
import { header, nav, listItem, navList, logo, disabled } from "./styles/header.module.scss";
import Logo from "../svg/white-horizontal.svg";
import { Container } from "react-grid-system";

interface Props {
  children?: React.ReactNode;
}

/**
 * Main header of the page
 * - Team Logo
 * - Navigation menu
 */
const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="Header">
      <Container>
        <header className={header}>
          <Link to="/">
            <Logo className={logo} />
          </Link>

          <nav>
            <ul className={navList}>
              <li className={listItem}>
                <Link to="/about-us" className={nav + " " + disabled} data-tip="This page is under construction">
                  About Us
                </Link>
              </li>
              <li className={listItem}>
                <Link to="/project" className={nav}>
                  Project
                </Link>
              </li>
              <li className={listItem}>
                <Link to="/team" className={nav}>
                  Team
                </Link>
              </li>
              <li className={listItem}>
                <Link to="/journey" className={nav + " " + disabled} data-tip="This page is under construction">
                  Our Journey
                </Link>
              </li>
              <li className={listItem}>
                <Link to="/partners" className={nav + " " + disabled} data-tip="This page is under construction">
                  Partners
                </Link>
              </li>
              <li className={listItem}>
                <Link to="/join" className={nav + " " + disabled} data-tip="This page is under construction">
                  Join
                </Link>
              </li>
              <li className={listItem}>
                <Link to="/contact" className={nav + " " + disabled} data-tip="This page is under construction">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
      {children && <div className="post-header">{children}</div>}
    </div>
  );
};

export default Header;
