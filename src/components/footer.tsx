import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {sitefooter, container} from './styles/footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <footer className = {sitefooter}>
      <div className = {container}>
      <p>
      Site developed by {data.site.siteMetadata.title}&copy; {new Date().getFullYear().toString()}{" "}
      </p>
      </div>
    </footer>
  );
};

export default Footer;