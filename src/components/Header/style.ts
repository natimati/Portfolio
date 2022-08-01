import styled from "styled-components";


export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.fourthUi};
    width: 100%;
    max-height: 100%;
    height: 700px;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
`;

export const ButtonContainer = styled.div`
    padding-top: 15px;
`;

export const ImageContainer = styled.div`
    position: relative;
    align-self: center;
    height: 550px;
    margin-top: 50px;
    cursor: pointer;
`;

export const Img = styled.img`
    height: 100%;
`;

export const BDiv = styled.div`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 50%;
    &:hover {
        opacity: 100%;
    }
`;

export const BArrow = styled.img`
    height: 70%;
    width: 60%;
    transform: translate(-150px, 50%) rotate(0.09turn);
`;

export const BTextArea = styled.div`
    transform: translateX(-500px) translateY(-200px);
    color: ${(props) => props.theme.colors.white};
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

    &:hover {
        opacity: 100%;
    }
`;

export const NArrow = styled.img`
    width: 60%;
    transform: translate(300px,-10%) rotate(0.6turn);
`;

export const NTextArea = styled.div`
    transform: translateX(450px) translateY(-280px);
    color: ${(props) => props.theme.colors.white};
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.h3`
    font-size: 40px;
    text-transform : uppercase;
    text-shadow: 4px 4px 5px ${(props) => props.theme.colors.tertiaryUi};
    margin: 0;
`;

export const Role = styled.p`
    font-size: 20px;
    font-weight: 200;
    margin: 10px;
`;

export const SkillsHeather = styled.p`
    margin-top: 20px;
    margin-bottom: 5px;
    padding-left: 100px;
    font-weight: 400;
    display: flex;
    align-self: flex-start;
`;

export const SkillsList = styled.ul`
    list-style: circle inside;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 30px;
    margin-top: 0;
    font-size: 14px;
`;