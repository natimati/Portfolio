import { ReactComponent as GoDownIcon } from "./go_down_icon.svg";
import { Container, DownButton, TextArea } from "./style";

 interface scrollProps{
        projectTileSectionRef: React.RefObject<HTMLDivElement> 
    }

function AboutUs(props: scrollProps) {
   
    const scrollDown = () => {
        if (props.projectTileSectionRef.current !== null) {
            window.scrollTo({
                top: props.projectTileSectionRef.current.offsetTop,
                behavior: 'smooth',
        })}
    }

    return (
    <Container>
        <TextArea>
            <h1>Hi!</h1>
                <p>We are Beata & Natalia, and this is our portfolio web!
                    <br />We've been friends since hight school. We've always loved creating projects together.
                    <br /> A year ago we discover a new passion - designing mobile apps.
                    <br />That's how we started our jouney with UX/UI design and coding. We're glad that you visit us!
                </p>
        </TextArea>
        <DownButton onClick={scrollDown}>
                <GoDownIcon />
        </DownButton>
    </Container>
 )    
};

export default AboutUs;