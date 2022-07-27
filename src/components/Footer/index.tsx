
import { InButton, Container, InContainer, InIcon, MainText, Text, NormalText, GoUpButton } from "./style";

interface scrollProps{
        heatherSectionRef: React.RefObject<HTMLDivElement> 
};

const Footer = (props: scrollProps) => {
    const  handleInBeataClick = () => {
        window.location.href = 'https://www.linkedin.com/in/beatasuscicka/';
    };
    const  handleInNataliaClick = () => {
        window.location.href = 'https://www.linkedin.com/in/natalia-mateusiak/  ';
    };

    const scrollUp = () => {
        if (props.heatherSectionRef.current !== null) {
            window.scrollTo({
                top: props.heatherSectionRef.current.offsetTop,
                behavior: 'smooth',
        })}
    }

    return (
        <Container>
            <GoUpButton onClick={scrollUp}>go up!</GoUpButton>
            <MainText>Find us</MainText>
            <InContainer>
                <InButton>
                    <InIcon src="assets/in_icon.png" alt="linkedlin logo" onClick={handleInBeataClick} />
                </InButton>
                <Text>Beata Suścicka</Text>
            </InContainer>
            <InContainer>
                <InButton>
                    <InIcon src="assets/in_icon.png" alt="linkedlin logo" onClick={handleInNataliaClick} />
                </InButton>
                <Text>Natalia Mateusiak</Text>  
            </InContainer>
            <NormalText>©2022 Natalia Mateusiak, Beata Suścicka. All Rights Reserved.</NormalText>
        </Container>
)
}

export default Footer;