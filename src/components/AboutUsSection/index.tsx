
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at feugiat neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi suscipit sem ipsum, non tempor augue fermentum in. Suspendisse potenti. Vivamus nec mi in nulla porta facilisis. Sed ut facilisis libero. Curabitur velit ante, cursus non enim non, ultricies semper neque. Vestibulum nec molestie quam. Aenean efficitur consequat neque, vel egestas sapien auctor nec. Suspendisse tempor viverra ante sed gravida. In velit augue, lobortis quis ipsum id, laoreet fermentum lorem. Proin posuere a sem a finibus.</p>
        </TextArea>
        <DownButton onClick={scrollDown}>
                <GoDownIcon />
        </DownButton>
    </Container>
 
)    
};

export default AboutUs;