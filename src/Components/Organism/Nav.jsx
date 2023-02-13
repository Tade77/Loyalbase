import React from "react";
import { NavWrapper } from "../../AppTheme";
import Access from "../Atoms/AccessBtn";
import Logo from "../Molecules/Logo";

const Nav = () => {
  return (
    <NavWrapper>
      <Logo />
      <Access />
    </NavWrapper>
  );
};

export default Nav;
