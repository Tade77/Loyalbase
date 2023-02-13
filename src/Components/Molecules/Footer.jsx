import React from "react";
import { FooterWrapper } from "../../AppTheme";
import HomeIcon from "../Atoms/HomeIcon";
import CallIcon from "../Atoms/CallIcon";
const Footer = () => {
  return (
    <FooterWrapper>
      <hr />
      <footer>
        <aside className="home">
          <HomeIcon />
          <p className="foo">
            2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
            Nigeria.
          </p>
        </aside>
        <aside>
          <p className="foo--mid">Loyalbaze is almost here.</p>
        </aside>
        <aside>
          <CallIcon />
          <p className="number">+234 903 618 9485</p>
        </aside>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
