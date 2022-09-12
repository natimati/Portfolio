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
  const bannerState = useBannerState(props.onMainPage);

  if (width >= tabletWidth) {
    return (
      <Background>
        <Container id="top">
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
    <Background id="top">
      <WiderBackgroundImage $onMainPage={props.onMainPage}>
        <ButtonsSection onMainPage={props.onMainPage} />
        <RightButton onMainPage={props.onMainPage} />
        {(!props.onMainPage || bannerState === "Beti") && (
          <BetiInformation onMainPage={props.onMainPage} />
        )}
        {(!props.onMainPage || bannerState === "Nati") && (
          <NatiInformation onMainPage={props.onMainPage} />
        )}
      </WiderBackgroundImage>
    </Background>
  );
};

export default Header;
