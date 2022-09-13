import { BetiInButton, NatiInButton, TopButton } from "./buttons";
import {
  Container,
  FindUsText,
  NormalText,
  Background,
} from "./style";

const Footer = () => {
  

  return (
    <Background>
      <Container>
        <TopButton />
        <FindUsText>Find us</FindUsText>
        <BetiInButton />
        <NatiInButton />
        <NormalText>
          ©2022 Natalia Mateusiak, Beata Suścicka. All Rights Reserved.
        </NormalText>
      </Container>
    </Background>
  );
};

export default Footer;
