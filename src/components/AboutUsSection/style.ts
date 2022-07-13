import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TextArea = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
`;

export const DownButton = styled.button`
height: 50px;
width: 50px;
border-radius: 35px;
align-self: flex-end;
margin-right: 50px;
margin-bottom: 50px;
border: none;
background-color: ${(props) => props.theme.colors.fourthUi};
`;