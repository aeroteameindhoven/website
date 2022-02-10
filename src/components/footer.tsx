import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Site developed by AeroTeam Eindhoven &copy; {new Date().getFullYear().toString()}{" "}
      </p>
    </footer>
  );
};

export default Footer;