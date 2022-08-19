import React, { useContext } from "react";
import {
  Description,
  EachSlide,
  ProjectContainer,
  SlideContainer,
  Text,
  Title,
} from "./style";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ModalContext } from "../../context/ModalContextProvider";
import FirstProjectModalContent from "./FirstProjectModalContent";
import { SmallButton } from "../../styles";

interface SlideShowProps {
  images: string[];
}

interface DescriptionData {
  title: string;
  text: string;
  repo_link: string;
  design_link: string;
}

const Slideshow = (props: SlideShowProps) => {
  return (
    <SlideContainer>
      <Slide>
        {props.images.map((slideImage, index) => (
          <EachSlide
            key={index}
            style={{ backgroundImage: `url(${slideImage})` }}
          />
        ))}
      </Slide>
    </SlideContainer>
  );
};

const DescriptionContainer = (data: DescriptionData) => {
  const modalContextValue = useContext(ModalContext);

  const handleSeeRepoClick = (link: string) => {
    window.open(link, "_blank");
  };
  const handleReadMoreClick = (content: React.ReactChild) => {
    modalContextValue.setDisplayedComponent(content);
  };
  const handleSeeCaseStudyClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Description>
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
      <SmallButton
        onClick={() => {
          handleReadMoreClick(<FirstProjectModalContent />);
        }}
      >
        read more
      </SmallButton>
      <SmallButton
        onClick={() => {
          handleSeeRepoClick(data.repo_link);
        }}
      >
        see repo
      </SmallButton>
      <SmallButton
        onClick={() => {
          handleSeeCaseStudyClick(data.design_link);
        }}
      >
        see case study
      </SmallButton>
    </Description>
  );
};

const ProjectTile = () => {
  const firstProjectImages = [
    "slide_1_1.jpg",
    "slide_1_2.jpg",
    "slide_1_3.jpg",
  ].map((image) => process.env.PUBLIC_URL + "/assets/images/" + image);

  const secondProjectImages = [
    "slide_2_1.jpg",
    "slide_2_2.jpg",
    "slide_2_3.jpg",
  ].map((image) => process.env.PUBLIC_URL + "/assets/images/" + image);

  const thirdProjectImages = [
    "slide_3_1.jpg",
    "slide_3_2.jpg",
    "slide_3_3.jpg",
  ].map((image) => process.env.PUBLIC_URL + "/assets/images/" + image);

  return (
    <div id="projecttilesection">
      <ProjectContainer id="project_tile" isSlideFirst={true}>
        <Slideshow images={firstProjectImages} />
        <DescriptionContainer
          title={"Portfolio Web Page"}
          text={
            "This is at the same time our first project together and the way to present others apps. We have a lot of fun working on this and we hope you enjoy this. "
          }
          repo_link={"https://github.com/natimati/Portfolio"}
          design_link={
            "https://www.figma.com/file/Zzj9Cmao5lVfDsrJsqsMEk/portfolio?node-id=157%3A5"
          }
        />
      </ProjectContainer>
      <ProjectContainer isSlideFirst={false}>
        <Slideshow images={secondProjectImages} />
        <DescriptionContainer
          title={"TITLE"}
          text={
            "Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend."
          }
          repo_link={"https://github.com/natimati/Portfolio"}
          design_link={
            "https://www.figma.com/file/aoY6nJXbYO7BcBTYH7ZZga/Fakenews-app?node-id=0%3A1"
          }
        />
      </ProjectContainer>
      <ProjectContainer isSlideFirst={true}>
        <Slideshow images={thirdProjectImages} />
        <DescriptionContainer
          title={"TITLE"}
          text={
            "Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend."
          }
          repo_link={"https://github.com/natimati/Portfolio"}
          design_link={
            "https://www.figma.com/file/Zzj9Cmao5lVfDsrJsqsMEk/portfolio?node-id=157%3A5"
          }
        />
      </ProjectContainer>
    </div>
  );
};

export default ProjectTile;
