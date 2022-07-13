import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column; 
gap: 20px;
margin: 50px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
`;

export const FormInput = styled.input`
height: 30px;
width: 40%;
font-family: ${(props) => props.theme.fontFamily.primaryFont};
font-size: 16px;
border: 2px solid ${(props) => props.theme.colors.primaryUi};
padding: 5px;

&:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.tertiaryUi};
}
`;

export const EmailFormInput = styled(FormInput)`
width: 60%;
`;

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