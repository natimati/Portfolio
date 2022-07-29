import styled, { createGlobalStyle } from "styled-components";
import img from "./highlighter.png";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        };

    h1 {
        font-weight: 700;
        font-size: 45px;
        text-shadow: 4px 4px 5px #9ab0af;
        align-self: center;
        margin-bottom: 5px;
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
        secondaryUi: "rgba(200, 214, 213, .9)",
        tertiaryUi: "#9AB0AF",
        fourthUi: "#23362F",
        fifthUi: "#D9D9D9",
        sixthUi: "#FAFF05",

    },
    
    fontFamily: {
        primaryFont: "'Josefin Sans', sans-serif ",
        secondaryFont: "'Tiro Devanagari Hindi'",
    },    
};
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.fifthUi};
    font-family: ${(props) => props.theme.fontFamily.primaryFont};
    font-size: 16px;
    font-weight: 700;
    text-transform : uppercase;
    border: 0px;
    margin-top: 20px;   
    padding: 10px 50px;
    height: 50px;
    width: 210px;
    cursor: pointer;
    position: relative;
    z-index: 1;

    &::before {
        position: absolute;
        top: 55%;
        transform: translate(-50%,-50%);
        left: 50%;
        width: 100%;
        height: 150%;
        content: "";
        background-image: url(${img});
        background-size: cover;
        display: none;
        background-position: center;
        z-index: -1;
    }

    &:hover {        
        &::before{
            display: block;
        }
    }
`
export const SubtierButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.secondaryUi};
    text-transform: capitalize;
`;

export const SmallButton = styled(Button)`
    justify-content: flex-start;
    background-color: white;
    font-size: 15px;
    font-weight: 500;
    text-transform: none;
    margin-top: 0;
    padding: 0;
    border: none;
    width: initial;
    
    &:hover {
        background-color: white;
        font-weight: 1000;

         &::before{
            width: 140%;
            height: 100%;
            top: 45%
        }
   }
`;