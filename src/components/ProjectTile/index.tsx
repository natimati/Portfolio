import {  ProjectContainer } from "./style";
import "react-slideshow-image/dist/styles.css";
import Slideshow from "./Slideshow";
import DescriptionContainer from "./DescriptionContainer";


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
      <ProjectContainer id="first-project" isSlideFirst={true}>
        <Slideshow images={firstProjectImages} />
        <DescriptionContainer
          title={"Portfolio Web Page"}
          text={
            "This is at the same time our first project together and the way to present others apps. We have a lot of fun working on this and we hope you enjoy this. "
          }
          repoLink={"https://github.com/natimati/Portfolio"}
          designLink={
            "https://www.figma.com/file/LLdqqeDVn3xN5Rdv1BC68A/portfolio?node-id=0%3A1"
          }
        />
      </ProjectContainer>
      <ProjectContainer id="second-project"  isSlideFirst={false}>
        <Slideshow images={secondProjectImages} />
        <DescriptionContainer
          title={"TITLE"}
          text={
            "Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend."
          }
          repoLink={"https://github.com/natimati/Portfolio"}
          designLink={
            "https://www.figma.com/file/aoY6nJXbYO7BcBTYH7ZZga/Fakenews-app?node-id=0%3A1"
          }
        />
      </ProjectContainer>
      <ProjectContainer id="third-project" isSlideFirst={true}>
        <Slideshow images={thirdProjectImages} />
        <DescriptionContainer
          title={"TITLE"}
          text={
            "Praesent efficitur quis odio quis fermentum. Quisque non augue venenatis, luctus neque feugiat, efficitur justo. Donec mattis arcu at ante volutpat consequat. Aliquam erat volutpat. Curabitur interdum aliquet tortor, id fermentum felis lacinia ac. Sed aliquam, arcu vitae tincidunt posuere, est nunc eleifend."
          }
          repoLink={"https://github.com/natimati/Portfolio"}
          designLink={
            "https://www.figma.com/file/Zzj9Cmao5lVfDsrJsqsMEk/portfolio?node-id=157%3A5"
          }
        />
      </ProjectContainer>
    </div>
  );
};

export default ProjectTile;
