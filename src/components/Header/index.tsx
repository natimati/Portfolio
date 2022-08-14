import { BetiInformation } from "./beti_staff";
import { ButtonsSection, RightButton } from "./buttons";
import { NatiInformation } from "./nati_staff";
import { Background, Container, ImageContainer, Img } from "./style";
interface HeaderProps {
  onMainPage: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <Background>
      <Container id='header_section'>
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
