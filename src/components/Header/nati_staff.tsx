import { ContactNDiv, FullName, Icon, Name, NArrow, NDiv, NTextArea, Role, SkillsHeather, SkillsList } from "./style";

interface WhichPageProps {
  onMainPage: boolean;
}

export const NatiInformation = (props: WhichPageProps) => {
  const handleInIconClick = () => {
    window.open("https://www.linkedin.com/in/natalia-mateusiak/", "_blank");
  };
  const handleGithubIconClick = () => {
    window.open("https://github.com/natimati", "_blank");
    };
    
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
        <Icon
          src="assets/in_icon.png"
          alt="linkedlin logo"
          onClick={handleInIconClick}
        />
        <Icon
          src="assets/git_icon.png"
          alt="github logo"
          onClick={handleGithubIconClick}
        />
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
