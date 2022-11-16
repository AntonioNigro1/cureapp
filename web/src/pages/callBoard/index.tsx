import React from "react";
import Chat from "../../components/chat";
import Header from "../../components/header";
import Invite from "../../components/invite";
import Reminder from "../../components/reminder";
import VideoCall from "../../components/videoCall";
import {
  Container,
  ContainerCall,
  ContainerChat,
  ContainerLeft,
} from "./styles";

const CallBoard = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerLeft>
          <ContainerCall>
            <Reminder />
            <Invite />
          </ContainerCall>
          <VideoCall />
        </ContainerLeft>

        <ContainerChat>
          <Chat />
        </ContainerChat>
      </Container>
    </>
  );
};

export default CallBoard;
