import {
  ContactNDiv,
  FullName,
  Icon,
  IconsContainer,
  Name,
  NArrow,
  NDiv,
  NTextArea,
  Role,
  SkillsHeather,
  SkillsList,
} from "./style";

interface WhichPageProps {
  onMainPage: boolean;
}

const NSkills = () => {
    return (
      <SkillsList isBeti={false}>
        <li>HTML</li>
        <li>CSS, Styled Components</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>TypeScript</li>
        <li>WebSockets and Rest API</li>
        <li>GitHub</li>
      </SkillsList>
    );
};
  
export const NatiInformation = (props: WhichPageProps) => {
  if (!props.onMainPage) {
    return (
      <ContactNDiv>
        <Name>Naśka</Name>
        <FullName>Natalia Mateusiak</FullName>
        <Role>frontend developer</Role>
        <IconsContainer>
          <a
            href="https://www.linkedin.com/in/natalia-mateusiak/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="assets/in_icon.png" alt="linkedlin logo" />
          </a>
          <a
            href="https://github.com/natimati"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="assets/git_icon.png" alt="github logo" />
          </a>
        </IconsContainer>
      </ContactNDiv>
    );
  }
  return (
    <NDiv>
      <NArrow src="assets/arrow.png" />
      <NTextArea>
        <Name>Naśka</Name>
        <Role>frontend developer</Role>
        <SkillsHeather isBeti={false}>Skills:</SkillsHeather>
        <NSkills />
      </NTextArea>
    </NDiv>
  );
};