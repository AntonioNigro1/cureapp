import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #161d34;
  border-radius: 20px;
`;

export const Participants = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const ContainerChat = styled.div`
  width: 100%;
`;

export const ChatHeader = styled.text`
  width: 100%;
  padding: 8px;
  color: white;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
`;
