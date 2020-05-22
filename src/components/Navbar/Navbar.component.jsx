import React from "react";

import { NavContainer, NavLogo, NavItem } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>LOGO</NavLogo>
      <NavItem>Sobre</NavItem>
      <NavItem>Cardapio</NavItem>
      <NavItem>Contato</NavItem>
    </NavContainer>
  );
};

export default Navbar;
