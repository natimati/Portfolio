import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.fourthUi};
    width: 100%;
    max-height: 100%;
    height: 250px;
    max-width: 100%;
    padding-top: 35px;
    display: flex;
    flex-direction: column;
`;

export const GoUpButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    align-self: flex-end;
    margin-right: 50px;
    margin-bottom: 50px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        text-shadow: 4px 4px 5px ${(props) => props.theme.colors.tertiaryUi};
    }
`;

export const FindUsText = styled.p`
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    padding-left: 50px;
`;

export const InIcon = styled.img`
    height: 50px;
    width: 50px;
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
        text-shadow: 4px 4px 4px  ${(props) => props.theme.colors.tertiaryUi};
      } 
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    font-weight: 500;
`;

export const NormalText = styled.p`
    color: ${(props) => props.theme.colors.white};
    font-size: 15px;
    font-weight: 300;
    align-self: center;
    font-family: ${(props) => props.theme.fontFamily.secondaryFont};
`;