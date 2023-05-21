import React from "react";
import { header } from "./styles/header.module.scss";
import { Container, Visible } from "react-grid-system";
import CompactNav from "./layout/CompactNav";
import FullSizeNav from "./layout/FullSizeNav";

/**
 * Main header of the page
 * - Team Logo
 * - Navigation menu
 */
export default function Header({ children }: React.PropsWithChildren) {
  return (
    <div className="HeaderMain">
      <Container>
        <header className={header}>
          <Visible xs sm md>
            <CompactNav />
          </Visible>
          <Visible lg xl xxl xxxl>
            <FullSizeNav />
          </Visible>
        </header>
      </Container>
      {children && <div className="post-header">{children}</div>}
    </div>
  );
}
