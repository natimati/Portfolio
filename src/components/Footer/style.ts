import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1800px;
  max-height: 100%;
  padding-top: 35px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.tablet} {
    height: fit-content;
    padding-top: 20px;
    max-width: 1000px;
  }
  
  ${(props) => props.theme.breakpoints.mobile} {
    align-items: center;
  }
`;

export const GoUpButtonContainer = styled.div`
  position: absolute;
  align-self: flex-end;
  margin-right: 50px;
  margin-bottom: 50px;

  ${(props) => props.theme.breakpoints.mobile} {
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.subtierButtonBackground};
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const GoUpButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-shadow: 4px 4px 5px ${(props) => props.theme.colors.shadowColor};
  }

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 20px;
  }
`;

export const GoUpIcon = styled.img`
  transform: rotate(180deg);
  width: 30px;
  height: 30px;
`;

export const FindUsText = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  padding-left: 50px;

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 14px;
    padding-left: 30px;
  }

  ${(props) => props.theme.breakpoints.mobile} {
    padding-left: 0;
    font-size: 16px;
  }
`;

export const InIcon = styled.img`
  height: 50px;
  width: 50px;

  ${(props) => props.theme.breakpoints.tablet} {
    height: 30px;
    width: 30px;
  }
`;

export const InButton = styled.a`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: fit-content;
  padding-bottom: 10px;
  padding-left: 60px;
  background-color: ${(props) => props.theme.colors.mainColor};
  border: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  text-decoration: none;

  &:hover {
    text-shadow: 4px 4px 4px ${(props) => props.theme.colors.shadowColor};
  }

  ${(props) => props.theme.breakpoints.tablet} {
    gap: 10px;
    padding-bottom: 5px;
    padding-left: 60px;
  }
  ${(props) => props.theme.breakpoints.mobile} {
    padding-left: 0;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  font-weight: 500;

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 16px;
    margin: 10px 0;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 12px;
  }
`;

export const NormalText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  align-self: center;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-style: italic;

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 12px;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    margin-top: 40px;
  }
`;
