import React from "react";
import { GroupIcon } from "../../assets";
import {
  Container,
  ContainerAbsent,
  ContainerInvite,
  ContainerNumber,
  ImageComponent,
} from "./styles";

const Invite = () => {
  return (
    <Container>
      <ImageComponent src={GroupIcon} alt="" />
      <ContainerInvite>
        Invate to call <ContainerNumber> 5</ContainerNumber>
      </ContainerInvite>
      <ContainerAbsent>
        Absent people <ContainerNumber>1</ContainerNumber>
      </ContainerAbsent>
    </Container>
  );
};

export default Invite;
