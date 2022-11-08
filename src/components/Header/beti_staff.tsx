import {
  BArrow,
  BDiv,
  BTextArea,
  ContactBDiv,
  FullName,
  Icon,
  IconsContainer,
  Name,
  Role,
  SkillsHeather,
  SkillsList,
} from "./style";

interface WhichPageProps {
  onMainPage: boolean;
}

export const BetiInformation = (props: WhichPageProps) => {

  const BSkills = () => {
    return (
      <SkillsList isBeti={true}>
        <li>User reserch & analysis</li>
        <li>Problems solving</li>
        <li>Prototyping & wirframing</li>
        <li>Graphic design</li>
        <li>Testing and iteration</li>
        <li>Presentation Skills</li>
      </SkillsList>
    );
  };

  if (!props.onMainPage) {
    return (
      <ContactBDiv>
        <Name>Beti</Name>
        <FullName>Beata Suścicka</FullName>
        <Role>UX/UI designer</Role>
        <IconsContainer>
          <a
            href="https://www.linkedin.com/in/beatasuscicka/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="assets/in_icon.png" alt="linkedlin logo" />
          </a>
          <a
            href="https://dribbble.com/beatasuscicka"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src="assets/dribble_icon.png" alt="dribble logo" />
          </a>
        </IconsContainer>
      </ContactBDiv>
    );
  }
  return (
    <BDiv>
      <BArrow src="assets/arrow.png" />
      <BTextArea>
        <Name>Beti</Name>
        <Role>UX/UI designer</Role>
        <SkillsHeather isBeti={true}>Skills:</SkillsHeather>
        <BSkills />
      </BTextArea>
    </BDiv>
  );
};
