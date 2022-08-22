import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-top: 0;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 825px;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 1668px) {
    max-width: 500px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const DownButonContainer = styled.div`
  position: absolute;
  top: 850px;
  margin-right: 50px;
  margin-bottom: 50px;
  align-self: flex-end;

  &:hover {
    margin-right: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1668px) {
    top: 600px;
    margin-right: 75px;

    &:hover {
      margin-right: 75px;
      margin-bottom: 40px;
    }
  }
`;

export const DownButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 35px;
  border: none;
  background-color: ${(props) => props.theme.colors.mainColor};
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 5px ${(props) => props.theme.colors.shadowColor};
    height: 60px;
    width: 60px;
  }

  @media screen and (max-width: 1668px) {
    height: 38px;
    width: 38px;

    &:hover {
      height: 45px;
      width: 45px;
    }
  }
`;

export const GoDownIcon = styled.img`
  height: 30px;
  width: 30px;

  @media screen and (max-width: 1668px) {
    height: 25px;
    width: 25px;
  }
`;
