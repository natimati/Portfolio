import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  position: relative;

   ${(props) => props.theme.breakpoints.mobile} {
    margin: 0;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.modalBackground};
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;  
  margin-top: 20px;
  width: 95%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 40px;
  height: 45px;
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

export const CloseIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 20px;
  gap: 50px;

  ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column; 
    margin-right: 0;
    padding: 10px;
    gap: 10px;

  }
`;

export const Photo = styled.img`
  max-width: 300px;
  max-height: 300px;
`;

export const Paragraph = styled.p`
  margin-top: 0;
`;
