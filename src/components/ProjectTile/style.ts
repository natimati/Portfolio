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
  max-width: 800px;
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 20px;

  ${(props) => props.theme.breakpoints.tablet} {
    padding-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding-bottom: 10px;

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 14px;
  }

  ${(props) => props.theme.breakpoints.mobile} {
    font-size: 12px;
  }
`;

export const ProjectContainer = styled.div<ProjectContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  grid-template-areas: ${(props) =>
    props.isSlideFirst === true ? "'slide text'" : "'text slide'"};
  padding: 50px 120px;
  max-width: 1600px;
  margin: 0 auto;

  ${Description} {
    text-align: ${(props) => (props.isSlideFirst ? "start" : "end")};
    align-items: ${(props) => (props.isSlideFirst ? "flex-start" : "flex-end")};

    ${(props) => props.theme.breakpoints.tablet} {
      align-self: center;
      padding: 0px;
    }

    ${(props) => props.theme.breakpoints.mobile} {
      display: flex;
      max-width: 450px;
      margin: 0 auto;
      padding-bottom: 20px;
      align-items: flex-start;
      text-align: start;
    }
  }

  ${SmallButton} {
    justify-content: ${(props) =>
      props.isSlideFirst ? "flex-start" : "flex-end"};
    height: fit-content;
    padding: 10px;

    ${(props) => props.theme.breakpoints.tablet} {
      padding: 2px;
    }

    &:hover {
      &::before {
        transform: translate(-50%, -45%);
      }
    }
  }

  ${(props) => props.theme.breakpoints.tablet} {
    gap: 30px;
    max-width: 800px;
    padding: 20px 50px;
  }

  ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 100%;
  }
`;

export const SmallButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const SlideContainer = styled.div`
  grid-area: slide;
  max-width: 600px;

  ${(props) => props.theme.breakpoints.tablet} {
    max-width: 345px;
  }

  ${(props) => props.theme.breakpoints.mobile} {
    max-width: 100%;
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
  max-width: 300px;
  max-height: 300px;
`;

export const Paragraph = styled.p`
  margin-top: 0;
`;
