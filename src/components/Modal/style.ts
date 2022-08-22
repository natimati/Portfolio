import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    0% {
      transform: translate(-150%, -50%);
      opacity: 0;
    }
    50% {
      opacity: 100%;
    }
    100% {
      transform: translate(-50%, -50%);
    }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.modalBackground};
  border: 0px;
  animation: ${slideIn} 0.8s both ease-in-out;
  z-index: 98;
  border: 5px solid ${(props) => props.theme.colors.modalBackground};
  padding: 5px;
`;

export const ModalContent = styled.div`
  top: 20px;
  margin-right: 5px;
  margin-left: 15px;
  overflow-y: scroll;
  max-height: 700px;
  min-width: 1000px;
  height: 100%;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.shadowColor};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    margin-top: 100px;
    margin-bottom: 40px;
    background-color: ${(props) => props.theme.colors.modalBackground};
    border-radius: 5px;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    max-height: 600px;
    min-width: 800px;
  }
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  z-index: 2;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 15px;
  height: 15px;
  background: none;
  position: absolute;
  top: 1em;
  right: 1.5em;
  cursor: pointer;
  margin: 5px;
  z-index: 99;

  &:hover {
    opacity: 0.5;
  }
`;
