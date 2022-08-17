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
  const handleInBeataClick = () => {
    window.open("https://www.linkedin.com/in/beatasuscicka/", "_blank");
  };
  const handleInNataliaClick = () => {
    window.open("https://www.linkedin.com/in/natalia-mateusiak/", "_blank");
  };

  return (
    <Background>
      <Container>
        <GoUpButtonContainer>
          <Link smooth to="/#header_section">
            <GoUpButton>go up!</GoUpButton>
          </Link>
        </GoUpButtonContainer>
        <FindUsText>Find us</FindUsText>
        <InButton onClick={handleInBeataClick}>
          <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
          <Text>Beata Suścicka</Text>
        </InButton>
        <InButton onClick={handleInNataliaClick}>
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