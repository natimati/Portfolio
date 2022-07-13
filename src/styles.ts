import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        };

    h1 {
        font-weight: 700;
        font-size: 40px;
    };

    h2 {
        font-weight: 700;
        font-size: 25px;
    };

    h3 {
        font-weight: 400;
        font-size: 18px;
    }
`

export const theme = {
    colors: {
        white: "#fff",
        primaryUi: "#EBEBEB",
        secondaryUi: "#BAD3D2",
        tertiaryUi: "#9AB0AF",
        fourthUi: "#345C4E",
        fifthUi: "#FAFF05",
    },
    
    fontFamily: {
        primaryFont: "'Josefin Sans', sans-serif ",
    },    
};
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.tertiaryUi};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
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
        background-color: ${(props) => props.theme.colors.secondaryUi};
    }
`
export const SubtierButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.secondaryUi};
`;
