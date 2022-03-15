import React from "react";
//import PropTypes from 'prop-types';
import Header from "./header";
import Footer from "./footer";
import {container, content, mainContent} from ".//styles/layout.module.scss";



interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className = {container}>
      <div className = {content}>
      <Header />
      <div className = {mainContent}>{props.children}
      </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Layout;