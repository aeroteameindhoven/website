import { Link } from "gatsby";
import * as React from "react";
import { header, nav } from './index.module.scss';


const IndexPage = () => {

  return (
    <div className = {header}>
      <nav>
        <ul className={nav}>
          <li className={nav}>
            <Link to="/" className={nav}>
              About Us
            </Link>
          </li>
          <li className={nav}>
            <Link to="/" className={nav}>
              Project
            </Link>
          </li>
          <li className={nav}>
            <Link to="/" className={nav}>
              Our Journey
            </Link>
          </li>
          <li className={nav}>
            <Link to="/" className={nav}>
              Partners
            </Link>
          </li>
          <li className={nav}>
            <Link to="/about" className={nav}>
              Join
            </Link>
          </li>
          <li className={nav}>
            <Link to="/about" className={nav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Working towards a sustainable future</h1>
      </main>
   </div>

  );
  };

export default IndexPage;
