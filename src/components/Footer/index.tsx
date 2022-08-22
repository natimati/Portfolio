import { Link } from "../../styles";
import {
  InButton,
  Container,
  InIcon,
  FindUsText,
  Text,
  NormalText,
  GoUpButton,
  GoUpButtonContainer,
  Background,
} from "./style";

const Footer = () => {
  return (
    <Background>
      <Container>
        <GoUpButtonContainer>
          <Link smooth to="/#header_section">
            <GoUpButton>go up!</GoUpButton>
          </Link>
        </GoUpButtonContainer>
        <FindUsText>Find us</FindUsText>
        <InButton
          href="https://www.linkedin.com/in/beatasuscicka/"
          target="_blank"
          rel="noreferrer"
        >
          <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
          <Text>Beata Suścicka</Text>
        </InButton>
        <InButton
          href="https://www.linkedin.com/in/natalia-mateusiak/"
          target="_blank"
          rel="noreferrer"
        >
          <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
          <Text>Natalia Mateusiak</Text>
        </InButton>
        <NormalText>
          ©2022 Natalia Mateusiak, Beata Suścicka. All Rights Reserved.
        </NormalText>
      </Container>
    </Background>
  );
};

export default Footer;