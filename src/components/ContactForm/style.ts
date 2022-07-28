import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 20px;
gap: 20px;
max-width: 900px;
align-self: center;
`;

export const FormContainer = styled.form`
display: flex;
flex-direction: row;
gap: 20px;
max-width: 900px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
`;

export const FormInput = styled.input`
height: 30px;
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 16px;
border: 2px solid ${(props) => props.theme.colors.primaryUi};
padding: 5px;
min-width: 30%;
width: 200px;

&:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.tertiaryUi};
}
`;

export const EmailFormInput = styled(FormInput)`
min-width: 60%;
width: 650px;
`;

export const InputError = styled.span`
align-self: flex-start;
padding: 3px;
font-size: 14px;
`

export const Textarea = styled.textarea`
height: 100px;
resize: vertical;
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 16px;
border: 2px solid ${(props) => props.theme.colors.primaryUi};
padding: 10px;

&:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.tertiaryUi};
}
`;

export const RodoInformation = styled.span`
margin-top: 25px;
text-align: center;
`