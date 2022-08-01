import styled from "styled-components";
import { Button } from "../../styles";

export const Container = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
width: 100%;
max-width: 1000px;
margin: 0 auto;
`;

export const Form = styled.form`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 25px;
    grid-template-areas:
        "name email"
        "nameError emailError"
        "message message"
        "messageError messageError"
        "sendButton sendButton";
`;

export const FormInput = styled.input`
    grid-area: name;
    height: 30px;
    background-color: ${(props) => props.theme.colors.primaryUi};
    border: 2px solid ${(props) => props.theme.colors.primaryUi};
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    
    &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.colors.tertiaryUi};
    }
    &::placeholder {
        color: black;
    }
`;

export const EmailFormInput = styled(FormInput)`
    grid-area: email;
    `;

export const Message = styled.textarea`
    grid-area: message;
    height: 380px;
    background-color: ${(props) => props.theme.colors.primaryUi};
    border: 2px solid ${(props) => props.theme.colors.primaryUi};
    padding: 10px;
    padding-top: 20px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 500;
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    resize: vertical;

    &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.colors.tertiaryUi};
    }

    &::placeholder {
        color: black;
    }
`;

export const InputError = styled.span`
    grid-area: nameError;
    margin-top: 10px;
    margin-bottom: 25px;
    color: red;
`;

export const EmailInputError = styled(InputError)`
    grid-area: emailError;
`;


export const SendButton = styled(Button)`
    grid-area: sendButton;
    justify-self: center;
    background-color: ${(props) => props.theme.colors.secondaryUi};
`

export const MessageInputError = styled(InputError)`
    grid-area: messageError;
`;

export const RodoInformation = styled.span`
     text-align: center;
     margin: 50px;
`;