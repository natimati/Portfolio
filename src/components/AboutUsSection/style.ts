import styled from "styled-components";
import { SmallButton } from "../../styles";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
`;

export const TextArea = styled.div`
display: flex;
flex-direction: column;
max-width: 750px;
text-align: center;

`;

export const ParagrathContainer = styled.div`
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
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
cursor: pointer;

&:hover {
        box-shadow: 4px 4px 5px ${(props) => props.theme.colors.tertiaryUi};
        height: 60px;
        width: 60px;
        margin-right: 40px;
        margin-bottom: 40px;
    }
`;