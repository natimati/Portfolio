import { BArrow, BDiv, BTextArea, ContactBDiv, FullName, Icon, Name, Role, SkillsHeather, SkillsList } from "./style";

interface WhichPageProps {
  onMainPage: boolean;
}

export const BetiInformation = (props: WhichPageProps) => {
  const handleInIconClick = () => {
    window.open("https://www.linkedin.com/in/beatasuscicka/", "_blank");
  };
  const handleBeIconClick = () => {
    window.open("https://www.linkedin.com/in/beatasuscicka/", "_blank");
    };
    
    const BSkills = () => {
      return (
        <SkillsList isBeti={true}>
          <li>User reserch & analysis</li>
          <li>Problems solving</li>
          <li>Prototyping & wirframing</li>
          <li>Graphic design</li>
          <li>Testing and iteration</li>
          <li>Presentation Skills</li>
          <li>Creativity</li>
        </SkillsList>
      );
    };

  if (!props.onMainPage) {
    return (
      <ContactBDiv>
        <Name>Beti</Name>
        <FullName>Beata Suścicka</FullName>
        <Role>UX/UI designer</Role>
        <Icon
          src="assets/in_icon.png"
          alt="linkedlin logo"
          onClick={handleInIconClick}
        />
        <Icon
          src="assets/be_icon.png"
          alt="behance logo"
          onClick={handleBeIconClick}
        />
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