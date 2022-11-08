import { HashLink } from "react-router-hash-link";
import useWindowWidth from "../../hooks/useWidowWidth";
import { mobileWidth } from "../../styles";
import { CloseButton, CloseIcon, Container, MobileContainer, Paragraph, Photo, ProjectDetails } from "./style";

interface Description {
  header: string;
  photo_url_1: string;
  photo_url_2: string;
  part_1: string;
  part_2: string;
  part_3: string;
  redirect_to: string;
};


function ProjekctDescription(props: Description) {
  const width = useWindowWidth();

  return (
    <Container>
      {width <= mobileWidth && (
        <HashLink smooth to={props.redirect_to}>
          <CloseButton>
            <CloseIcon alt="close button" src="assets/close_icon.svg" />
          </CloseButton>
        </HashLink>
      )}
      <h1>{props.header}</h1>
      {width <= mobileWidth && (
        <MobileContainer>
          <p>Timeline</p>
          <p>Roles</p>
          <p>Platform</p>
        </MobileContainer>
      )}
      <ProjectDetails>
        <Photo src={props.photo_url_1} alt="first project" />
        <Paragraph>{props.part_1}</Paragraph>
      </ProjectDetails>
      <ProjectDetails>
        <Paragraph>{props.part_2}</Paragraph>
        <Photo src={props.photo_url_2} alt="first project" />
      </ProjectDetails>
      <ProjectDetails>
        <Paragraph>{props.part_3}</Paragraph>
      </ProjectDetails>
    </Container>
  )
};


export default ProjekctDescription;

