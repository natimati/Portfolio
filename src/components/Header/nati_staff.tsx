import {
  ContactNDiv,
  FullName,
  Icon,
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

export const NatiInformation = (props: WhichPageProps) => {
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

  if (!props.onMainPage) {
    return (
      <ContactNDiv>
        <Name>Naśka</Name>
        <FullName>Natalia Mateusiak</FullName>
        <Role>frontend developer</Role>
        <a
          href="https://www.linkedin.com/in/natalia-mateusiak/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon src="assets/in_icon.png" alt="linkedlin logo" />
        </a>
        <a href="https://github.com/natimati" target="_blank" rel="noreferrer">
          <Icon src="assets/git_icon.png" alt="github logo" />
        </a>
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