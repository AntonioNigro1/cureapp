import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #161d34;
`;

export const ContainerTitle = styled.div`
  width: 20%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContainerRoom = styled.div`
  width: 60%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerUser = styled.div`
  width: 20%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageComponent = styled(Image)``;

export const TextComponent = styled.text`
  padding-left: 15px;
  font-family: "Times New Roman";
`;
