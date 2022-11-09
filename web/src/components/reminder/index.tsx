import React from "react";
import { Container, ContainerReminder, ContainerTime } from "./styles";

const Reminder = () => {
  return (
    <Container>
      Reminder
      <ContainerReminder>
        Next meeting at ... <ContainerTime> 08:00</ContainerTime>
      </ContainerReminder>
    </Container>
  );
};

export default Reminder;
