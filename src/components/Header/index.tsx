import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button, SubtierButton } from "../../styles"
import { BSkills, NSkills } from "./skills_list";
import {
    BArrow,
    BDiv,
    BTextArea,
    ContactBDiv,
    ContactNDiv,
    Container,
    FullName,
    ImageContainer,
    Img,
    Name,
    NArrow,
    NDiv,
    NTextArea,
    Role,
    SkillsHeather
} from "./style"

interface HeaderProps {
    headerSectionRef: React.RefObject<HTMLDivElement>
    onMainPage: boolean
};

interface WhichPageProps {
    onMainPage: boolean
}

const ButtonContainer = (props: WhichPageProps) => {
    const navigate = useNavigate();
    const handleGoBackButtonClick = () => {
        navigate("/")
    }
    const [isShown, setIsShown] = useState(false);

    const handlePortfolioButtonClick = () => {
        setIsShown(current => !current)
    };

    const handleGithubButtonClick = () => {
        window.open('https://github.com/natimati/Portfolio', '_blank')
    };

        if (props.onMainPage) {
            return (
            <>
                <Button onClick={handlePortfolioButtonClick}>Portfolio</Button>
                            {isShown && (
                                <>
                                    <SubtierButton>Case study</SubtierButton>
                                    <SubtierButton onClick={handleGithubButtonClick}>github</SubtierButton>
                                </>
                )}
            </>
            )
    }
    return (
        <>
            <Button onClick={handleGoBackButtonClick}>go back</Button>
        </>
    );
    }

const BetiInformation = (props: WhichPageProps) => {
    if (!props.onMainPage) {
        return (
            <ContactBDiv>
                    <Name>Beti</Name>
                    <FullName>Beata Suścicka</FullName>
                    <Role>UX/UI designer</Role>
            </ContactBDiv>
        )
    }
    return (
        <BDiv>
            <BArrow src="assets/arrow.png" />
            <BTextArea>
                <Name>Beti</Name>
                <Role>UX/UI designer</Role>
                <SkillsHeather>Skills:</SkillsHeather>
                <BSkills />
            </BTextArea>
        </BDiv>
    )
};

const NatiInformation = (props: WhichPageProps) => {
    if (!props.onMainPage) {
        return (
            <ContactNDiv>
                    <Name>Naśka</Name>
                    <FullName>Natalia Mateusiak</FullName>
                    <Role>frontend developer</Role>
            </ContactNDiv>)
    }
    return (
        <NDiv>
            <NArrow src="assets/arrow.png"/>
            <NTextArea>
                 <Name>Naśka</Name>
                 <Role>frontend developer</Role>
                 <SkillsHeather>Skills:</SkillsHeather>
                 <NSkills />
            </NTextArea>
          </NDiv>
    )
};


const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const handleContactUsButtonClick = () => {
        navigate("/contact")
    }
        
     return (
         <Container ref={props.headerSectionRef}>
            <ButtonContainer onMainPage={props.onMainPage} />
            <ImageContainer>
                <BetiInformation onMainPage={props.onMainPage} />
                <NatiInformation onMainPage={props.onMainPage} />               
                <Img src="assets/girls.jpg" alt="Us" />
             </ImageContainer>
            <Button onClick={handleContactUsButtonClick}>Contact us</Button>
        </Container>
    )
};

export default Header;