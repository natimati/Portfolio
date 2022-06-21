import styled from "styled-components";


export const Container = styled.div`
background-color: ${(props) => props.theme.colors.primaryUi};
width: 100%;
max-height: 100%;
height: 700px;
display: flex;
align-items: flex-start;
justify-content: space-around;
`;

export const ButtonContainer = styled.div`
margin-top: 50px;
`

export const ImageContainer = styled.div`
position: relative;
align-self: center;
height: 500px;
margin-top: 50px;
cursor: pointer;
`

export const Img = styled.img`
height: 100%;
`;

export const NDiv = styled.div`
position: absolute;
opacity: 0;
height: 100%;
width: 50%;
&:hover {
    opacity: 100%;
}
`;

export const NArrow = styled.img`
height: 50%;
transform: translate(-120px, 80%) rotate(0.6turn);
`;
export const NTextArea = styled.div`
transform: translateX(-250px) translateY(100px);
`;

export const BDiv = styled.div`
position: absolute;
opacity: 0;
height: 100%;
width: 50%;
right: 0;

&:hover {
    opacity: 100%;
}
`;

export const BArrow = styled.img`
height: 50%;
transform: translate(110px, 40%) rotate(0.1turn);
`;
export const BTextArea = styled.div`
transform: translateX(250px) translateY(-40px);
`;

export const Name = styled.h3`
font-size: 25px;
text-transform : uppercase;
text-shadow: 4px 4px 5px ${(props) => props.theme.colors.tertiaryUi};
margin: 0;
`;

export const Role = styled.p`
font-size: 15px;
font-weight: 500;
margin: 1px;
`;