import { Link } from "../../styles";
import { Container, DownButonContainer, DownButton, GoDownIcon, TextArea } from "./style";

function AboutUs() {
    return (
      <Container>
        <TextArea>
          <h1>Hi!</h1>
          <p>
            We are Beata & Natalia, and this is our portfolio web!
            <br />
            We've been friends since hight school. We've always loved creating
            projects together.
            <br /> A year ago we discover a new passion - designing mobile apps.
            <br />
            That's how we started our jouney with UX/UI design and coding. We're
            glad that you visit us!
          </p>
        </TextArea>
        <DownButonContainer>
          <Link smooth to="/#projecttilesection">
            <DownButton>
              <GoDownIcon src="assets/go_down_icon.png" alt="down arrow" />
            </DownButton>
          </Link>
        </DownButonContainer>
      </Container>
    );
}

export default AboutUs;
