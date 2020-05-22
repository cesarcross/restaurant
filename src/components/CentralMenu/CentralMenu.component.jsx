import React from "react";

import {
  CentralMenuContainer,
  CentralMenuCards,
  CentralMenuItem,
} from "./CentralMenu.style";

const CentralMenu = () => {
  return (
    <CentralMenuContainer>
      CARDAPIO IRRESISTIVEL
      <CentralMenuCards>
        <CentralMenuItem>BEBIDAS</CentralMenuItem>
        <CentralMenuItem>SALGADOS</CentralMenuItem>
        <CentralMenuItem>DOCES</CentralMenuItem>
      </CentralMenuCards>
    </CentralMenuContainer>
  );
};

export default CentralMenu;
