import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./styles/index.scss";
import { content } from "./styles/layout.module.scss";
import Helmet from "react-helmet";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=awoinurniahdw" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=awoinurniahdw" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=awoinurniahdw" />
        <link rel="manifest" href="/site.webmanifest?v=awoinurniahdw" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=awoinurniahdw" color="#002878" />
        <link rel="shortcut icon" href="/favicon.ico?v=awoinurniahdw" />
        <meta name="msapplication-TileColor" content="#002878" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <main className={content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
