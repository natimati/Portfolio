import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
`

export const theme = {
    colors: {
        white: "#fff",
        primaryUi: "#D9D9D9",
        secondaryUi: "#A2B4C5",
        tertiaryUi: "#FDDD34",
        firstButtonColor: "#ADCED9",
        secondButtonColor: "#80BDD0",
    },
    
    fontFamily: {
        primaryFont: "Josefin Sans",
    },

    fontSize: {
        header: "60px",
        text: "24px",
        tiles: "30px",
    }
};
export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) => props.theme.colors.firstButtonColor};
font-size: 15px;
font-weight: 600;
text-transform : uppercase;
border: none;
margin-top: 20px;
padding: 10px 50px;
height: 40px;
width: 200px;
cursor: pointer;

&:hover {
    background-color: ${(props) => props.theme.colors.firstButtonColor};
}
`
export const SubtierButton = styled(Button)`
background-color: ${(props) => props.theme.colors.secondButtonColor};;
`

