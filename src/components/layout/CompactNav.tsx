import React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/white-horizontal.svg";
import HamburgerIcon from "../../images/hamburger.svg";
import "./CompactNav.scss";
import classNames from "classnames";
import { navItems } from "./FullSizeNav";

const CompactNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  const compactNavItems = [
    {
      label: "Home",
      link: "/"
    },
    ...navItems
  ];

  return (
    <nav className="CompactNav">
      <Link to="/">
        <Logo className="main-logo" />
      </Link>
      <div>
        <HamburgerIcon className="hamburger-icon" onClick={openNav} />
      </div>

      <div className={classNames("overlay-menu", { opened: isOpen })} onClick={closeNav}>
        <ul>
          {compactNavItems.map((item) => (
            <li key={item.link} className="menu-item">
              <Link to={item.link} className={classNames("nav", { disabled: item.disabled })}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CompactNav;
