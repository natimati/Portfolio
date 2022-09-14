import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useWindowWidth from "../../hooks/useWidowWidth";
import { Button, mobileWidth, SubtierButton } from "../../styles";
import { ButtonContainer, MenuButton, MenuContainer, MenuIcon, MobileMenu } from "./style";

interface PageProps {
  onMainPage: boolean;
}

export const ButtonsSection = (props: PageProps) => {
  const [isShown, setIsShown] = useState(false);
  

  const handlePortfolioButtonClick = () => {
    setIsShown((current) => !current);
  };

  const width = useWindowWidth();

  if (props.onMainPage && width >= mobileWidth) {
    return (
      <ButtonContainer>
        <Button onClick={handlePortfolioButtonClick}>Portfolio</Button>
        {isShown && (
          <>
            <SubtierButton>Case study</SubtierButton>
            <a
              href="https://github.com/natimati"
              target="_blank"
              rel="noreferrer"
            >
              <SubtierButton>github</SubtierButton>
            </a>
          </>
        )}
      </ButtonContainer>
    );
  } else if (!props.onMainPage && width >= mobileWidth) {
    return (
      <>
        <HashLink smooth to="/#projecttilesection">
          <Button>Portfolio</Button>
        </HashLink>
      </>
    );
  } else if (props.onMainPage && width <= mobileWidth) {
    return (
      <>
        <MenuIcon
          src="assets/menu_icon.svg"
          alt="menu"
          onClick={handlePortfolioButtonClick}
        />
        {isShown && (
          <ButtonContainer>
            <MobileMenu>
              <MenuContainer>
                <Link to="/contact">
                  <MenuButton>Contact</MenuButton>
                </Link>
                <a
                  href="https://github.com/natimati"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MenuButton>Case Study</MenuButton>
                </a>
                <a
                  href="https://github.com/natimati"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MenuButton>GitHub</MenuButton>
                </a>
              </MenuContainer>
            </MobileMenu>
          </ButtonContainer>
        )}
      </>
    );
  }
  return (
      <>
        <MenuIcon src="assets/menu_icon.svg" alt="menu" />
      </>
  );
};

export const RightButton = (props: PageProps) => {
  if (!props.onMainPage) {
    return (
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    );
  }
  return (
    <Link to="/contact">
      <Button>Contact us</Button>
    </Link>
  );
};