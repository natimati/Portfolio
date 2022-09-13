import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-top: 0;
  margin-bottom: 40px;
  position: relative;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 825px;
  text-align: center;
  font-weight: 400;
  margin: 0;

  ${(props) => props.theme.breakpoints.tablet} {
    max-width: 500px;
    font-size: 16px;
    font-weight: 500;
  }
  ${(props) => props.theme.breakpoints.mobile} {
    max-width: 100%;
    font-size: 12px;
    font-weight: 500;
    margin: 0 20px;
  }
`;

export const DownButonContainer = styled.div`
  position: absolute;
  top: 150px;
  margin-right: 50px;
  margin-bottom: 50px;
  align-self: flex-end;

  ${(props) => props.theme.breakpoints.tablet} {
    margin-right: 75px;
  }

  ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }
`;

export const DownButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 35px;
  border: none;
  background-color: ${(props) => props.theme.colors.mainColor};
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transition: all 0.2s ease-in;
    box-shadow: 4px 4px 5px ${(props) => props.theme.colors.shadowColor};
    height: 60px;
    width: 60px;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    height: 50px;
    width: 50px;
    box-shadow: 4px 4px 5px ${(props) => props.theme.colors.shadowColor};

    &:hover {
      transition: none;
      height: 50px;
      width: 50px;
    }
  }
`;

export const GoDownIcon = styled.img`
  height: 30px;
  width: 30px;

  ${(props) => props.theme.breakpoints.tablet} {
    height: 25px;
    width: 25px;
  }
`;
