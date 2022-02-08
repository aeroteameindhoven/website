import { Link } from "gatsby";
import * as React from "react";
import { header, nav } from './index.module.scss';



const IndexPage = () => {

    return (
      <div className = {header}>
        <nav>
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
        <main>
          <h1>Working towards a sustainable future</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </main>
     </div>
  
    );
    };
  
  export default IndexPage;