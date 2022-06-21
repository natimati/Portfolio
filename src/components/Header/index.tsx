import { useState } from "react"
import { Button, SubtierButton } from "../../styles"
import { BArrow, BDiv, BTextArea, ButtonContainer, Container, ImageContainer, Img, Name, NArrow, NDiv, NTextArea, Role } from "./style"

function Header() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current)
    }

     return (
         <Container>
             <ButtonContainer>
                 <Button onClick={handleClick}>Portfolio</Button>
                 {isShown && (
                     <>
                         <SubtierButton>Case study</SubtierButton>
                         <SubtierButton>github</SubtierButton>
                     </>
                 )}
            </ButtonContainer>
            <ImageContainer>
                <NDiv>
                    <NArrow src="assets/arrow.svg"/>
                    <NTextArea>
                        <Name>Naśka</Name>
                        <Role>frontend developer</Role>
                    </NTextArea>
                 </NDiv>
                <BDiv>
                    <BArrow src="assets/arrow.svg" />
                    <BTextArea>
                        <Name>beti</Name>
                        <Role>UX/UI designer</Role>
                    </BTextArea>
                </BDiv>
                <Img src="assets/girls.jpg" alt="Us" />
            </ImageContainer>
             <ButtonContainer>
                 <Button>Contact us</Button>
            </ButtonContainer>

        </Container>
    )
};

export default Header