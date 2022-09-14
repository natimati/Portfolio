import styled, { createGlobalStyle } from "styled-components";
import img from "./highlighter.png";

export const tabletWidth = 1668;
export const mobileWidth = 1000;

export const theme = {
  colors: {
    white: "#fff",
    red: "#B81F31",
    black: "#000",
    mainColor: "#23362F",
    inputBackgroundcolor: "#EBEBEB",
    modalBackground: "rgba(200, 214, 213, .9)",
    subtierButtonBackground: "rgba(200, 214, 213, .9)",
    shadowColor: "#9AB0AF",
    buttonBackgroundColor: "#D9D9D9",
  },

  fontFamily: {
    primaryFont: "'Josefin Sans', sans-serif ",
    secondaryFont: "'Tiro Devanagari Hindi'",
    skillsFont: "'Karla', sans-serif ",
  },

  breakpoints: {
    tablet: `@media screen and (max-width: ${tabletWidth}px)`,
    mobile: `@media screen and (max-width: ${mobileWidth}px)`,
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        };

    h1 {
        font-weight: 700;
        font-size: 45px;
        text-shadow: 4px 4px 5px ${theme.colors.shadowColor};
        align-self: center;
        text-align: center;
        margin-bottom: 5px;

        ${theme.breakpoints.tablet} {
          font-size: 40px;
         }
         ${theme.breakpoints.mobile} {
          font-size: 25px;
         }
    };

    h2 {
        font-weight: 700;
        font-size: 25px;

        ${theme.breakpoints.tablet} {
          font-size: 18px;
         }
    };

    h3 {
        font-weight: 400;
        font-size: 18px;
    };
    
    h4 {
        font-weight: 400;
        font-size: 20px;
    }

    a {
      text-decoration: none;
    }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.buttonBackgroundColor};
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  text-transform: uppercase;
  border: 0px;
  margin-top: 20px;
  padding: 10px 0;
  height: 50px;
  width: 210px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    top: 55%;
    transform: translate(-50%, -50%);
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
    &::before {
      display: block;
    }
    }

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 20px;
    padding: 5px 0px;
    height: 45px;
    width: 150px;
    text-transform: none;
  }
`;
export const SubtierButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.subtierButtonBackground};
  text-transform: capitalize;
  height: 35px;

  :before {
    top: 50%;
    left: 49%;
    width: 115%;
    height: 95%;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    height: 35px;

    :before {
      top: 50%;
    }
  }
`;

export const SmallButton = styled(Button)`
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

    &::before {
      width: 140%;
      height: 100%;
      top: 45%;
    }
  }

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 14px;
    padding: 0;
  }
`;