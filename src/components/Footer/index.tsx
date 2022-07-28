
import { InButton, Container, InIcon, FindUsText, Text, NormalText, GoUpButton } from "./style";

interface scrollProps{
        heatherSectionRef: React.RefObject<HTMLDivElement> 
};

const Footer = (props: scrollProps) => {
    const  handleInBeataClick = () => {
        window.open('https://www.linkedin.com/in/beatasuscicka/', '_blank')
    };
    const  handleInNataliaClick = () => {
        window.open('https://www.linkedin.com/in/natalia-mateusiak/', '_blank')
    };

    const scrollUp = () => {
        if (props.heatherSectionRef.current !== null) {
            window.scrollTo({
                top: props.heatherSectionRef.current.offsetTop,
                behavior: 'smooth',
        })}
    }

    return (
        <>
            <Container>
                <GoUpButton onClick={scrollUp}>go up!</GoUpButton>
                <FindUsText>Find us</FindUsText>
                    <InButton onClick={handleInBeataClick}>
                        <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
                        <Text>Beata Suścicka</Text>
                    </InButton>
                    <InButton onClick={handleInNataliaClick}>
                        <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
                        <Text>Natalia Mateusiak</Text>
                    </InButton>
                <NormalText>©2022 Natalia Mateusiak, Beata Suścicka. All Rights Reserved.</NormalText>
                </Container>
           </> 
)
}

export default Footer;