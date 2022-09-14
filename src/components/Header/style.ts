import styled from "styled-components";
import { Button } from "../../styles";

interface SkillsProps {
  isBeti: boolean;
}
interface PageProps {
  $onMainPage: boolean;
}

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const WiderBackgroundImage = styled.div<PageProps>`
  position: relative;
  background: ${(props) =>
    props.$onMainPage
      ? "url('assets/girls.jpg')"
      : "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('assets/girls.jpg')"};
  background-size: cover;
  background-position: 55% 50%;
  max-width: 1000px;
  width: 100%;
  max-height: 100%;
  margin: 0 auto;
  height: 480px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  max-height: 100%;
  height: 700px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  ${(props) => props.theme.breakpoints.tablet} {
    height: 450px;
    max-width: 1000px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileMenu = styled.div`
  position: absolute;
  left: 0;
  background-color: ${(props) => props.theme.colors.mainColor};
  opacity: 0.9;
  width: 65%;
  height: 100%;
  z-index: 98;
  display: flex;
  flex-direction: column;
`;

export const MenuIcon = styled.img`
  margin-top: 20px;
  cursor: pointer;
  z-index: 99;
  margin-bottom: 30px;
`;

export const MenuContainer = styled.div`
  margin-top: 100px;
  margin-left: 40px;
`;

export const MenuButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border-bottom: solid 1px ${(props) => props.theme.colors.white};
  width: 100%;
  justify-content: flex-start;
  padding-left: 20px;
  margin: 0;
  margin-bottom: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};

    &::before {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  align-self: center;
  height: 550px;

  ${(props) => props.theme.breakpoints.tablet} {
    height: 350px;
  }
`;

export const Img = styled.img`
  height: 100%;
`;

export const BDiv = styled.div`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 50%;
  left: 0;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.7;
    left: initial;
    right: 0;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ContactBDiv = styled.div`
  color: ${(props) => props.theme.colors.white};
  transform: translateX(-300px) translateY(80px);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.breakpoints.tablet} {
    transform: translateX(150px) translateY(238px);
  }
`;

export const BArrow = styled.img`
  height: 55%;
  width: 45%;
  transform: translate(-50px, 100%) rotate(0.05turn);

  ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const BTextArea = styled.div`
  transform: translateX(-350px) translateY(-90px);
  color: ${(props) => props.theme.colors.white};
  width: 250px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${(props) => props.theme.breakpoints.tablet} {
    transform: translateX(20px) translateY(170px);
    margin: 0;
    align-items: flex-start;
    width: fit-content;
  }

  ${(props) => props.theme.breakpoints.mobile} {
    transform: translateX(20px) translateY(162px);
  }
`;

export const NDiv = styled.div`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 50%;
  right: 0;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.7;
    right: initial;
    left: 0;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ContactNDiv = styled.div`
  color: ${(props) => props.theme.colors.white};
  transform: translateX(950px) translateY(80px);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;

  ${(props) => props.theme.breakpoints.tablet} {
    transform: translateX(650px) translateY(240px);
  }
`;

export const NArrow = styled.img`
  width: 50%;
  transform: translate(300px, 100%) rotate(0.75turn);

  ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const NTextArea = styled.div`
  transform: translateX(480px) translateY(-90px);
  color: ${(props) => props.theme.colors.white};
  width: 250px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) => props.theme.breakpoints.tablet} {
    transform: translateX(230px) translateY(80px);
    align-items: flex-end;
    margin: 0;
    width: fit-content;
  }
  ${(props) => props.theme.breakpoints.mobile} {
    position: absolute;
    top: 80px;
    right: 250px;
    width: 200px;
  }
`;

export const Name = styled.h3`
  font-size: 50px;
  margin: 0;

  ${(props) => props.theme.breakpoints.mobile} {
    font-size: 40px;
  }
`;

export const FullName = styled.h4`
  margin-top: 5px;
  margin-bottom: 15px;

  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const Role = styled.p`
  font-size: 15px;
  font-weight: 200;
  margin-top: 10px;

  ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: 0;
    font-size: 20px;
  }
`;

export const SkillsHeather = styled.p<SkillsProps>`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  padding: 15px 0;
  font-weight: 400;
  display: flex;
  align-self: ${(props) => (props.isBeti ? "flex-end" : "flex-start")};

  ${(props) => props.theme.breakpoints.tablet} {
    align-self: ${(props) => (props.isBeti ? "flex-start" : "flex-end")};
  }
  ${(props) => props.theme.breakpoints.tablet} {
    font-size: 16px;
  }
`;

export const SkillsList = styled.ul<SkillsProps>`
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  align-items: ${(props) => (props.isBeti ? "flex-end" : "flex-start")};
  font-family: ${(props) => props.theme.fontFamily.skillsFont};
  line-height: 30px;
  margin-top: 0;
  font-size: 18px;
  padding: 0;

  ${(props) => props.theme.breakpoints.tablet} {
    align-items: ${(props) => (props.isBeti ? "flex-start" : "flex-end")};
  }

  ${(props) => props.theme.breakpoints.mobile} {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const Icon = styled.img`
  margin: 20px;
  height: 50px;
  width: 50px;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.tablet} {
    margin: 0;
  }
`;
