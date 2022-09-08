import useBannerState from "../../hooks/useBannerState";
import useWindowWidth from "../../hooks/useWidowWidth";
import { tabletWidth } from "../../styles";
import { BetiInformation } from "./beti_staff";
import { ButtonsSection, RightButton } from "./buttons";
import { NatiInformation } from "./nati_staff";
import {
  Background,
  Container,
  ImageContainer,
  Img,
  WiderBackgroundImage,
} from "./style";
interface HeaderProps {
  onMainPage: boolean;
}

const Header = (props: HeaderProps) => {
  const width = useWindowWidth();
  const bannerState = useBannerState();

  if (width >= tabletWidth) {
    return (
      <Background>
        <Container id="header_section">
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
  }
  return (
    <Background>
      <WiderBackgroundImage>
        <ButtonsSection onMainPage={props.onMainPage} />
        <RightButton onMainPage={props.onMainPage} />
        {bannerState === "Beti" && (
          <BetiInformation onMainPage={props.onMainPage} />
        )}
        {bannerState === "Nati" && (
          <NatiInformation onMainPage={props.onMainPage} />
        )}
      </WiderBackgroundImage>
    </Background>
  );
};

export default Header;
