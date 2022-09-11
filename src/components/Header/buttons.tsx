import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, SubtierButton } from "../../styles";
import { ButtonContainer } from "./style";

interface WhichPageProps {
  onMainPage: boolean;
}

export const ButtonsSection = (props: WhichPageProps) => {
  const [isShown, setIsShown] = useState(false);

  const handlePortfolioButtonClick = () => {
    setIsShown((current) => !current);
  };

  if (props.onMainPage) {
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
  }
  return (
    <>
      <HashLink smooth to="/#projecttilesection">
        <Button>Portfolio</Button>
      </HashLink>
    </>
  );
};

export const RightButton = (props: WhichPageProps) => {
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