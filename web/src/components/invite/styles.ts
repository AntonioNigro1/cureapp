import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  width: 40%;
  display: flex;
  height: fit-content;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  margin-top: 35px;
`;

export const ImageComponent = styled(Image)``;

export const ContainerInvite = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const ContainerAbsent = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const ContainerNumber = styled.div`
  width: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 5px;
  border-radius: 100%;
  background: linear-gradient(96.79deg, #4285f4 0%, #186efc 100%);
  box-shadow: 0px 0px 24px rgba(41, 132, 255, 0.56);
  color: white;
`;
