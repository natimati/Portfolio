import styled from "styled-components";
import { SmallButton } from "../../styles";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TextArea = styled.div`
display: flex;
flex-direction: column;
max-width: 750px;
`;

export const ParagrathContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const Button = styled(SmallButton)`
margin: 0;
height: 19px;
padding-left: 5px;
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