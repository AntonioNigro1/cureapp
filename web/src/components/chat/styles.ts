import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 80vh;
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
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #343637;
`;

export const ContainerChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const ChatHeader = styled.text`
  width: 100%;
  padding: 8px;
  color: white;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #343637;
`;

export const ChatTypes = styled.div`
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Chats = styled.div`
  width: fit-content;
  font-size: 16px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #343637;
  color: #5e647c;
  :hover {
    color: #186efc;
    border: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #186efc;
  }
`;

export const ChatBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChatMessages = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInput = styled.input`
  width: 60%;
  height: 7vh;
  padding: 8px;
  background: #1e2745;
  border-radius: 50px;
`;
