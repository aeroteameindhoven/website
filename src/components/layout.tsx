import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./styles/index.scss";
import { layoutWrapper, content } from "./styles/layout.module.scss";
import Helmet from "react-helmet";
import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  pageTitle?: string;
  postHeader?: React.ReactNode;
  fullScreenHeader?: boolean;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className={layoutWrapper}>
      <Helmet defaultTitle="Aero Team Eindhoven" titleTemplate="%s | Aero Team Eindhoven">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=awoinurniahdw" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=awoinurniahdw" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=awoinurniahdw" />
        <link rel="manifest" href="/site.webmanifest?v=awoinurniahdw" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=awoinurniahdw" color="#002878" />
        <link rel="shortcut icon" href="/favicon.ico?v=awoinurniahdw" />
        <meta name="msapplication-TileColor" content="#002878" />
        <meta name="theme-color" content="#ffffff" />
        {props.pageTitle ? <title>{props.pageTitle}</title> : null}
      </Helmet>

      {/* Everything in this div has the classic blue gradient background. */}
      {/* This is done such that more elements can be underneath the header in the background */}
      {/* while keeping code clean */}
      <div className={classNames("blue-gradient-bg", { fullHeight: props.fullScreenHeader })}>
        <Header />
        {props.postHeader}
      </div>
      <main className={content}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
