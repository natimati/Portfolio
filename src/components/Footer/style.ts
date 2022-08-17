import styled from "styled-components";

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.fourthUi};
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1800px;
  max-height: 100%;
  height: 250px;
  padding-top: 35px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  @media screen and (max-width: 1668px) {
    height: 165px;
    padding-top: 20px;
    max-width: 1000px;
  }
`;

export const GoUpButtonContainer = styled.div`
  position: absolute;
  align-self: flex-end;
  margin-right: 50px;
  margin-bottom: 50px;
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
    text-shadow: 4px 4px 5px ${(props) => props.theme.colors.tertiaryUi};
  }

  @media screen and (max-width: 1668px) {
    font-size: 14px;
  }
`;

export const FindUsText = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  padding-left: 50px;

  @media screen and (max-width: 1668px) {
    font-size: 14px;
    padding-left: 30px;
  }
`;

export const InIcon = styled.img`
  height: 50px;
  width: 50px;

  @media screen and (max-width: 1668px) {
    height: 30px;
    width: 30px;
  }
`;

export const InButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: fit-content;
  padding-bottom: 10px;
  padding-left: 60px;
  background-color: ${(props) => props.theme.colors.fourthUi};
  border: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};

  &:hover {
    text-shadow: 4px 4px 4px ${(props) => props.theme.colors.tertiaryUi};
  }

  @media screen and (max-width: 1668px) {
    gap: 10px;
    padding-bottom: 5px;
    padding-left: 60px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 1668px) {
    font-size: 16px;
    margin: 10px 0;
  }
`;

export const NormalText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  align-self: center;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-style: italic;

  @media screen and (max-width: 1668px) {
    font-size: 12px;
  }
`;
