import React from "react";
import { header } from "./styles/header.module.scss";
import { Container, Visible } from "react-grid-system";
import CompactNav from "./layout/CompactNav";
import FullsizeNav from "./layout/FullsizeNav";

interface Props {
  children?: React.ReactNode;
}

/**
 * Main header of the page
 * - Team Logo
 * - Navigation menu
 */
const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="Header">
      <Container>
        <header className={header}>
          <Visible xs sm md>
            <CompactNav />
          </Visible>
          <Visible lg xl xxl xxxl>
            <FullsizeNav />
          </Visible>
        </header>
      </Container>
      {children && <div className="post-header">{children}</div>}
    </div>
  );
};

export default Header;
