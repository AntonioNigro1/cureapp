import Image from "next/image";
import React from "react";
import { ParticipantIcon, ImageIcon, Dots } from "../../assets";
import {
  Chats,
  ChatHeader,
  ChatTypes,
  Container,
  ContainerChat,
  Participants,
  ChatMessages,
  UserInput,
  ChatBody,
  InputComponent,
} from "./styles";

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
        <ChatHeader>
          Chat
          <ChatTypes>
            <Chats>All Chat</Chats>
            <Chats>Group Chat</Chats>
            <Chats>Participants</Chats>
          </ChatTypes>
        </ChatHeader>
        <ChatBody>
          <ChatMessages>hello</ChatMessages>
          <InputComponent>
            <UserInput placeholder="Write your message" />
            <Image src={ImageIcon} alt="" />
            <Image src={Dots} alt="" />
          </InputComponent>
        </ChatBody>
      </ContainerChat>
    </Container>
  );
};

export default Chat;
