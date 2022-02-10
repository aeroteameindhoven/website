import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";


//var classNames = require('classnames');

//var homeLogo = classNames(logo,nav);


/*
const IndexPage = (props) => {

// Images, these need to be changed to the official images when they are available
  const logoTop = "../images/placeHolders/logo.png";
  //const globe = ;

  return (
    <div className = {header}>
      <nav>
      <Link to= "index">
      <StaticImage className={homeLogo}
        src= {logoTop}
        alt = "placeholder logo"
        />
        </Link>
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
        <Header />
        {props.children}
        <img className = {circle} ></img>
      </main>
   </div>

  );
  };
  */

  const Index = () => {
    return (
      <Layout>
        <h1>Towards a sustainable future</h1>
        <h2>test</h2>
      </Layout>
    );
  };
  
  export default Index;
