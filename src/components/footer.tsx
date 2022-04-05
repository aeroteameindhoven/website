import React from "react";
import { sitefooter, container, mailLink, grid } from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={sitefooter}>
      <div className={grid}>
        <div className={container}>
          <h2>Aero Team Eindhoven</h2>
          <p>
            <a className={mailLink} href="mailto:info@aeroteameindhoven.nl">
              info@aeroteameindhoven.nl
            </a>
          </p>
        </div>
        <div className={container}>
          <h2>Visiting address</h2>
          <div>Horsten 8</div>
          <div>5612 AX Eindhoven</div>
          <div>The Netherlands</div>
          <p>TU/e campus</p>
        </div>
        <div className={container}>
          <h2>Social Media</h2>
          <div><a className={mailLink} target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/aeroteamehv">LinkedIn</a></div>
          <div><a className={mailLink} target="_blank" rel="noreferrer" href="https://www.instagram.com/aeroteamehv/">Instagram</a></div>
          <div><a className={mailLink} target="_blank" rel="noreferrer" href="https://twitter.com/AeroTeamEhv">Twitter</a></div>
          <div><a className={mailLink} target="_blank" rel="noreferrer" href="https://www.facebook.com/AeroTeamEindhoven">Facebook</a></div>
          <div><a className={mailLink} target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC48Rt9YAXZIi9RsOdSUUcFQ">Youtube</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
