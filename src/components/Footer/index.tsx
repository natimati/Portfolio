import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

interface FooterProps {
  onMainPage: boolean;
}

const Footer = (props: FooterProps) => {
  const location = useLocation();

  return (
    <Background>
      <Container>
        <GoUpButtonContainer>
          <HashLink smooth to={`${location.pathname}#top`}>
            <GoUpButton>go up!</GoUpButton>
          </HashLink>
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
