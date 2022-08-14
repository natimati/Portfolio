import styled from "styled-components";

interface SkillsProps {
  isBeti: boolean;
}

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.fourthUi};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1800px;
  width: 100%;
  max-height: 100%;
  height: 700px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: relative;
  align-self: center;
  height: 550px;
  margin-top: 50px;
`;

export const Img = styled.img`
  height: 100%;
`;

export const BDiv = styled.div`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 50%;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`;

export const ContactBDiv = styled.div`
  color: ${(props) => props.theme.colors.white};
  transform: translateX(-300px) translateY(100px);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
`;

export const BArrow = styled.img`
  height: 70%;
  width: 60%;
  transform: translate(-150px, 50%) rotate(0.05turn);
`;

export const BTextArea = styled.div`
  transform: translateX(-350px) translateY(-200px);
  color: ${(props) => props.theme.colors.white};
  width: 180px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const ContactNDiv = styled.div`
  color: ${(props) => props.theme.colors.white};
  transform: translateX(1000px) translateY(100px);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
`;

export const NArrow = styled.img`
  width: 60%;
  transform: translate(310px, -5%) rotate(0.55turn);
`;

export const NTextArea = styled.div`
  transform: translateX(530px) translateY(-280px);
  color: ${(props) => props.theme.colors.white};
  width: 200px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  text-shadow: 4px 4px 5px ${(props) => props.theme.colors.tertiaryUi};
  margin: 0;
`;

export const FullName = styled.h4`
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Role = styled.p`
  font-size: 20px;
  font-weight: 200;
  margin: 10px;
`;

export const SkillsHeather = styled.p<SkillsProps>`
  margin-top: 20px;
  margin-bottom: 0;
  padding: 15px;
  font-weight: 400;
  display: flex;
  align-self: ${(props) => (props.isBeti ? "flex-end" : "flex-start")};
`;

export const SkillsList = styled.ul<SkillsProps>`
  list-style: circle inside;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isBeti ? "flex-end" : "flex-start")};
  line-height: 30px;
  margin-top: 0;
  font-size: 14px;
  padding: 0;
`;

export const Icon = styled.img`
  margin: 20px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;