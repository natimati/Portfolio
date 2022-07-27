import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.fourthUi};
    width: 100%;
    max-height: 100%;
    height: 250px;
    padding-top: 35px;
    padding-left: 55px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const GoUpButton = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    align-self: flex-end;
    margin-right: 100px;
    margin-bottom: 50px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

export const MainText = styled.p`
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
`;

export const InContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-bottom: 10px;
`;

export const InButton = styled.button`
    height: 50px;
    width: 50px;
    background-color: ${(props) => props.theme.colors.fourthUi};
    border: none;
`;

export const InIcon = styled.img`
    height: 50px;
    width: 50px;
    cursor: pointer;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    font-weight: 500;
`;

export const NormalText = styled.p`
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    font-weight: 300;
    align-self: center;
`;