import { Container, Paragraph, Photo, ProjectDetails } from "./style";

const FirstProjectModalContent = () => {
  return (
    <Container>
      <h1>Portfolio web page</h1>
      <ProjectDetails>
        <Photo src="/assets/images/slide_1_1.jpg" alt="first project" />
        <Paragraph>
          We started with creating a website where we could practice and present
          our skills. We made decisions together about the most essential
          elements of our portfolio page. Then Beata set to prepare designs
          using figma.
        </Paragraph>
      </ProjectDetails>
      <ProjectDetails>
        <Paragraph>
          When the first designs were ready, Natalia started coding using the
          react app. For styling we used styled components. For presenting
          project photos on the main page we're using react slideshow image
          library. Contact form is based on react hook form which checks
          correctness of filled inputs and shows possible errors. In our
          portfolio we don't have a backend - the messages are sent thanks to
          library EmailJS. Interesting case was also adding
        </Paragraph>
        <Photo src="/assets/images/slide_1_2.jpg" alt="first project" />
      </ProjectDetails>
      <ProjectDetails>
        <Paragraph>
          Labore est adipisicing commodo proident. Exercitation mollit duis enim
          in excepteur ea deserunt ea. Proident veniam amet officia adipisicing
          pariatur dolore labore. Ad nisi dolore proident sit pariatur
          adipisicing ipsum sit pariatur. Incididunt tempor cupidatat aliquip
          minim quis sunt aliquip aliquip dolor. Aliqua anim pariatur ad dolore
          et sunt mollit in qui velit irure. Labore dolor nulla labore laboris
          magna labore amet culpa. Aute enim cillum duis ea cillum.
        </Paragraph>
      </ProjectDetails>
    </Container>
  );
};

export default FirstProjectModalContent;
