import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/layout.scss";
import { layoutWrapper, content } from "./styles/layout.module.scss";
import classNames from "classnames";

interface Props {
  postHeader?: React.ReactNode;
  fullScreenHeader?: boolean;
}

export default function Layout(props: React.PropsWithChildren<Props>) {
  return (
    <div className={layoutWrapper}>
      {/* Everything in this div has the classic blue gradient background. */}
      {/* This is done such that more elements can be underneath the header in the background */}
      {/* while keeping code clean */}
      <div className={classNames("blue-gradient-bg", { fullHeight: props.fullScreenHeader })}>
        <Header>{props.postHeader}</Header>
      </div>
      <main className={content}>{props.children}</main>
      <Footer />
    </div>
  );
}
