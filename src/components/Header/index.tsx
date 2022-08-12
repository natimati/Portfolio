import { useRef } from "react";
import { BetiInformation } from "./beti_staff";
import { ButtonsSection, RightButton } from "./buttons";
import { NatiInformation } from "./nati_staff";
import { Background, Container, ImageContainer, Img } from "./style";
interface HeaderProps {
  headerSectionRef: React.RefObject<HTMLDivElement>;
  onMainPage: boolean;
}



const Header = (props: HeaderProps) => {
  return (
    <Background>
      <Container ref={props.headerSectionRef}>
        <ButtonsSection onMainPage={props.onMainPage} />
        <ImageContainer>
          <BetiInformation onMainPage={props.onMainPage} />
          <NatiInformation onMainPage={props.onMainPage} />
          <Img src="assets/girls.jpg" alt="Us" />
        </ImageContainer>
        <RightButton onMainPage={props.onMainPage} />
      </Container>
    </Background>
  );
};

export default Header;
