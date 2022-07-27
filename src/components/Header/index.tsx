import { useContext, useState } from "react"
import { ModalContext } from "../../context/ModalContextProvider";
import { Button, SubtierButton } from "../../styles"
import Contact from "../ContactForm";
import { BArrow, BDiv, BTextArea, ButtonContainer, Container, ImageContainer, Img, Name, NArrow, NDiv, NTextArea, Role, SkillsHeather, SkillsList } from "./style"


function Header() {
    const [isShown, setIsShown] = useState(false);

    const handlePortfolioButtonClick = () => {
        setIsShown(current => !current)
    };

    const handleGithubButtonClick = () => {
        window.location.href = 'https://github.com/natimati/Portfolio';
    };

    const modalContextValue = useContext(ModalContext);
    const handleContactUsButtonClick = (content: React.ReactChild) => {
    modalContextValue.setDisplayedComponent(content)
    }

    function BSkills() {

        return (
            <SkillsList>
                    <li>User reserch & analysis</li>
                    <li>Problems solving</li>
                    <li>Prototyping & wirframing</li>
                    <li>Graphic design</li>
                    <li>Testing and iteration</li>
                    <li>Presentation Skills</li>
                    <li>Creativity</li>
            </SkillsList>
        )
    }
    function NSkills() {

        return (
            <SkillsList>
                    <li>HTML</li>
                    <li>CSS, Styled Components</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>TypeScript</li>
                    <li>WebSockets and Rest API</li>
                    <li>GitHub</li>
            </SkillsList>
        )
    }

     return (
         <Container>
             <ButtonContainer>
                 <Button onClick={handlePortfolioButtonClick}>Portfolio</Button>
                 {isShown && (
                     <>
                         <SubtierButton>Case study</SubtierButton>
                         <SubtierButton onClick={handleGithubButtonClick}>github</SubtierButton>
                     </>
                 )}
            </ButtonContainer>
            <ImageContainer>
                <NDiv>
                    <NArrow src="assets/arrow.png"/>
                    <NTextArea>
                        <Name>Naśka</Name>
                         <Role>frontend developer</Role>
                         <SkillsHeather>Skills:</SkillsHeather>
                         <NSkills />
                    </NTextArea>
                 </NDiv>
                <BDiv>
                    <BArrow src="assets/arrow.png" />
                    <BTextArea>
                        <Name>Beti</Name>
                         <Role>UX/UI designer</Role>
                         
                         <BSkills />
                    </BTextArea>
                </BDiv>
                <Img src="assets/girls.jpg" alt="Us" />
            </ImageContainer>
             <ButtonContainer>
                 <Button onClick={() => handleContactUsButtonClick(<Contact />)}>Contact us</Button>
            </ButtonContainer>

        </Container>
    )
};

export default Header;