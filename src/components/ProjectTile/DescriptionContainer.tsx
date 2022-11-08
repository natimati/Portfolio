import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContextProvider";
import useWindowWidth from "../../hooks/useWidowWidth";
import { mobileWidth, SmallButton } from "../../styles";
import { Description, SmallButtonContainer, Text, Title } from "./style";
import { header, part_1, part_2, part_3, photo_url_1, photo_url_2, redirect_to } from "../ProjectDescription/portfolioDescription";
import ProjekctDescription from "../ProjectDescription";

interface DescriptionData {
  title: string;
  text: string;
  repoLink: string;
  designLink: string;
}

function DescriptionContainer(data: DescriptionData) {
  const modalContextValue = useContext(ModalContext);
  const width = useWindowWidth();
  const navigate = useNavigate();

  const handleReadMoreClick = (content: React.ReactChild) => {
    if (width > mobileWidth) {
      modalContextValue.setDisplayedComponent(content);
    } else (
      navigate('/portfolio-project')
    );
  };

  return (
    <Description>
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
      <SmallButtonContainer>
        <SmallButton
          onClick={() => {
            handleReadMoreClick(
              <ProjekctDescription
                header={header}
                photo_url_1={photo_url_1}
                photo_url_2={photo_url_2}
                part_1={part_1}
                part_2={part_2}
                part_3={part_3}
                redirect_to={redirect_to}
              />
            );
          }}
        >
          read more
        </SmallButton>
        <a href={data.repoLink} target="_blank" rel="noreferrer">
          <SmallButton>see repo</SmallButton>
        </a>
        <a href={data.designLink} target="_blank" rel="noreferrer">
          <SmallButton>see case study</SmallButton>
        </a>
      </SmallButtonContainer>
    </Description >
  );
};

export default DescriptionContainer;