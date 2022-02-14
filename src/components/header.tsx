import React from "react";
import { Link } from "gatsby";
import {header, nav, logo} from './styles/index.module.scss';
import Logo from "../svg/navLogo.svg";
//<Logo className = {logo} />

const Header = () => {
  return (
  <header className={header}>
    <nav>
    <Logo className = {logo} />
    <ul className={nav}>
          <li className={nav}>
            <Link to='/about' className={nav}>
              About Us
            </Link>
          </li>
          <li className={nav}>
            <Link to="/project" className={nav}>
              Project
            </Link>
          </li>
          <li className={nav}>
            <Link to="/journey" className={nav}>
              Our Journey
            </Link>
          </li>
          <li className={nav}>
            <Link to="/partners" className={nav}>
              Partners
            </Link>
          </li>
          <li className={nav}>
            <Link to="/join" className={nav}>
              Join
            </Link>
          </li>
          <li className={nav}>
            <Link to="/contact" className={nav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  </header>
  );
};

export default Header;