import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MenuContext } from "../../context/MenuContext";
import useWindowWidth from "../../hooks/useWidowWidth";
import { Button, mobileWidth, SubtierButton } from "../../styles";
import {
  ButtonContainer,
  MenuButton,
  MenuContainer,
  MenuIcon,
  MobileMenu,
} from "./style";

interface PageProps {
  onMainPage: boolean;
}

export const ButtonsSection = (props: PageProps) => {
  const { isShown, setIsShown } = useContext(MenuContext);

  const handlePortfolioButtonClick: () => void = () => {
    setIsShown((current) => !current);
  };

  const width = useWindowWidth();
  const handleMenuButtonClick = () => setIsShown(false)

  if (props.onMainPage && width >= mobileWidth) {
    return (
      <ButtonContainer>
        <Button onClick={handlePortfolioButtonClick}>Portfolio</Button>
        {isShown && (
          <>
            <a
              href="https://dribbble.com/beatasuscicka"
              target="_blank"
              rel="noreferrer"
            >
              <SubtierButton>Case study</SubtierButton>
            </a>
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
          <MobileMenu >
            <MenuContainer onClick={handleMenuButtonClick}>
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
        )}
      </>
    );
  }
  return (
    <>
      <MenuIcon
        src="assets/menu_icon.svg"
        alt="menu"
        onClick={handlePortfolioButtonClick}
      />
      {isShown && (
        <MobileMenu>
          <MenuContainer onClick={handleMenuButtonClick}>
            <HashLink smooth to="/#projecttilesection">
              <MenuButton>Portfolio</MenuButton>
            </HashLink>
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
            <Link to="/">
              <MenuButton>Go Back</MenuButton>
            </Link>
          </MenuContainer>
        </MobileMenu>
      )}
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
