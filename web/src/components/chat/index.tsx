import Image from "next/image";
import React from "react";
import { ParticipantIcon } from "../../assets";
import { ChatHeader, Container, ContainerChat, Participants } from "./styles";

const Chat = () => {
  return (
    <Container>
      <Participants>
        <Image src={ParticipantIcon} alt="" />
        <Image src={ParticipantIcon} alt="" />
        <Image src={ParticipantIcon} alt="" />
        <Image src={ParticipantIcon} alt="" />
      </Participants>
      <ContainerChat>
        <ChatHeader>Chat</ChatHeader>
      </ContainerChat>
    </Container>
  );
};

export default Chat;
