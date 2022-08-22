import styled from "styled-components";
import { Button } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1668px) {
    max-width: 630px;
  }
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
    "notARobot notARobot"
    "sendButton sendButton";
`;
export const NameInputContainer = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
`;

export const EmailInputContainer = styled(NameInputContainer)`
  grid-area: email;
`;

export const MessageInputContainer = styled(NameInputContainer)`
  grid-area: message;
`;

export const ReCAPTCHAContainer = styled.div`
  grid-area: notARobot;
`;

export const Label = styled.label`
  font-weight: 500;
  padding: 5px;

  @media screen and (max-width: 1668px) {
    font-size: 14px;
  }
`;

export const FormInput = styled.input`
  height: 30px;
  background-color: ${(props) => props.theme.colors.inputBackgroundcolor};
  border: 2px solid ${(props) => props.theme.colors.inputBackgroundcolor};
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.shadowColor};
  }
  &::placeholder {
    color: black;
  }
`;

export const Message = styled.textarea`
  height: 380px;
  background-color: ${(props) => props.theme.colors.inputBackgroundcolor};
  border: 2px solid ${(props) => props.theme.colors.inputBackgroundcolor};
  padding: 10px;
  padding-top: 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  resize: vertical;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.shadowColor};
  }

  &::placeholder {
    color: black;
  }
`;

export const InputError = styled.span`
  grid-area: nameError;
  margin-top: 10px;
  margin-bottom: 25px;
  color: ${(props) => props.theme.colors.red};

  @media screen and (max-width: 1668px) {
    font-size: 14px;
  }
`;

export const SendButton = styled(Button)`
  grid-area: sendButton;
  justify-self: center;
  background-color: ${(props) => props.theme.colors.subtierButtonBackground};
`;

export const RodoInformation = styled.span`
  text-align: left;
  margin: 50px 0;

  @media screen and (max-width: 1668px) {
    font-size: 12px;
  }
`;
