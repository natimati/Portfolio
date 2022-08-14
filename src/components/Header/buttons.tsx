import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Link, SubtierButton } from "../../styles";
import { ButtonContainer } from "./style";

interface WhichPageProps {
  onMainPage: boolean;
}

export const ButtonsSection = (props: WhichPageProps) => {
  const [isShown, setIsShown] = useState(false);
  
  const handlePortfolioButtonClick = () => {
    setIsShown((current) => !current);
  };

  const handleGithubButtonClick = () => {
    window.open("https://github.com/natimati/Portfolio", "_blank");
  };

  if (props.onMainPage) {
    return (
      <ButtonContainer>
        <Button onClick={handlePortfolioButtonClick}>Portfolio</Button>
        {isShown && (
          <>
            <SubtierButton>Case study</SubtierButton>
            <SubtierButton onClick={handleGithubButtonClick}>
              github
            </SubtierButton>
          </>
        )}
      </ButtonContainer>
    );
  }
  return (
    <>
      <Link smooth to="/#projecttilesection">
        <Button>portfolio</Button>
      </Link>
    </>
  );
};

export const RightButton = (props: WhichPageProps) => {
  const navigate = useNavigate();
  const handleContactUsButtonClick = () => {
    navigate("/contact");
  };
  const handleGoBackButtonClick = () => {
    navigate("/");
  };
  

  if (!props.onMainPage) {
    return <Button onClick={handleGoBackButtonClick}>go back</Button>;
  }
  return <Button onClick={handleContactUsButtonClick}>Contact us</Button>;
};
