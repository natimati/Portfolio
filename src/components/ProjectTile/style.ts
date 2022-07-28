import styled from "styled-components";
import { SmallButton } from "../../styles";

interface ProjectContainerProps {
  isSlideFirst: boolean;
}

export const Description = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  place-self: start;
  max-width: 700px;
  
`;

export const Title = styled.h2`
margin: 0;
padding-bottom: 20px;
`;

export const Subtitle = styled.h3`
margin: 0;
padding-bottom: 15px;
`;

export const Text = styled.p`
margin: 0;
padding-bottom: 10px;
`;

export const ProjectContainer = styled.div<ProjectContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${(props) => (props.isSlideFirst === true ? "'slide text'" : "'text slide'")};
  padding: 50px 120px;

${Description} {
text-align: ${(props) => (props.isSlideFirst ? 'start' : 'end')};
align-items: ${(props) => (props.isSlideFirst ? 'flex-start' : 'flex-end')};
}

${SmallButton} {
justify-content: ${(props) => (props.isSlideFirst ? 'flex-start' : 'flex-end')};

    &::before {
        transform: translate(-50%,-40%);
    }
  }
`;

export const SlideContainer = styled.div`
grid-area: slide;
max-width: 700px;
`;

export const EachSlide = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
`;

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 20px;
  gap: 50px;
`;

export const Photo = styled.img`
  max-width: 400px;
  max-height: 400px;
`;

export const Paragraph = styled.p`
margin-top: 0;
`;

