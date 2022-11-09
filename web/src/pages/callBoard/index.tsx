import React from "react";
import Chat from "../../components/chat";
import Header from "../../components/header";
import Invite from "../../components/invite";
import Reminder from "../../components/reminder";
import { Container, ContainerCall, ContainerChat } from "./styles";

const CallBoard = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerCall>
          <Reminder />
          <Invite />
        </ContainerCall>
        <ContainerChat>
          <Chat />
        </ContainerChat>
      </Container>
    </>
  );
};

export default CallBoard;
