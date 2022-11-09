import { CallLogo, Dot, NotificationIcon, UserIcon } from "../../assets";
import {
  Container,
  TextComponent,
  ContainerTitle,
  ImageComponent,
  ContainerRoom,
  ContainerUser,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <ContainerTitle>
        <ImageComponent src={CallLogo} alt="video logo" />
        <TextComponent>Video Call</TextComponent>
      </ContainerTitle>
      <ContainerRoom>
        <ImageComponent src={Dot} alt="" />
        <TextComponent>Presentation Room</TextComponent>
      </ContainerRoom>
      <ContainerUser>
        <ImageComponent src={NotificationIcon} alt="" />
        <ImageComponent src={UserIcon} alt="" />
      </ContainerUser>
    </Container>
  );
};

export default Header;
