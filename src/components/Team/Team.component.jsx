import React from "react";

import { TeamContainer, TeamCards, TeamPerson } from "./Team.style";

const Team = () => {
  return (
    <TeamContainer>
      <TeamCards>
        <TeamPerson>Cesar</TeamPerson>
        <TeamPerson>Vinicius</TeamPerson>
        <TeamPerson>Debora</TeamPerson>
        <TeamPerson>Joao</TeamPerson>
      </TeamCards>
    </TeamContainer>
  );
};

export default Team;
