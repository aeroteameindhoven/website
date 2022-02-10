import React from "react";
import PropTypes from 'prop-types';
import Header from "./header";
import Footer from "./footer";



interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      {props.children}
    </div>
    
  );
};

export default Layout;