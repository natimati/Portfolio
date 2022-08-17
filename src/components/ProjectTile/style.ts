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
  max-width: 600px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 20px;

  @media screen and (max-width: 1668px) {
    padding-bottom: 10px;
  }
`;

export const Subtitle = styled.h3`
  margin: 0;
  padding-bottom: 15px;

  @media screen and (max-width: 1668px) {
    padding-bottom: 5px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding-bottom: 10px;

  @media screen and (max-width: 1668px) {
    font-size: 14px;
  }
`;

export const ProjectContainer = styled.div<ProjectContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${(props) =>
    props.isSlideFirst === true ? "'slide text'" : "'text slide'"};
  padding: 50px 120px;
  max-width: 1300px;
  margin: 0 auto;

  ${Description} {
    text-align: ${(props) => (props.isSlideFirst ? "start" : "end")};
    align-items: ${(props) => (props.isSlideFirst ? "flex-start" : "flex-end")};

    @media screen and (max-width: 1668px) {
      align-self: center;
    }
  }

  ${SmallButton} {
    justify-content: ${(props) =>
      props.isSlideFirst ? "flex-start" : "flex-end"};
    height: fit-content;
    padding: 10px;

    @media screen and (max-width: 1668px) {
      padding: 2px;
    }

    &:hover {
      &::before {
        transform: translate(-50%, -45%);
      }
    }
  }

  @media screen and (max-width: 1668px) {
    gap: 30px;
    max-width: 800px;
    padding: 20px 50px;
  }
`;

export const SlideContainer = styled.div`
  grid-area: slide;
  max-width: 600px;


  @media screen and (max-width: 1668px) {
    max-width: 345px;
  }
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