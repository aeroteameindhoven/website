import React from "react";
//import {footer} from './index.module.scss';
import {sitefooter, container} from './styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className = {sitefooter}>
      <div className = {container}>
      <p>
        Copyright  © Aero team Eindhoven &copy; {new Date().getFullYear().toString()}{" "}
      </p>
      </div>
    </footer>
  );
};

export default Footer;