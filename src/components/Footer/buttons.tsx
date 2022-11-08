import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useWindowWidth from "../../hooks/useWidowWidth";
import { mobileWidth } from "../../styles";
import { GoUpButton, GoUpButtonContainer, GoUpIcon, InButton, InIcon, Text } from "./style";

export const TopButton = () => {
    const location = useLocation();
    const width = useWindowWidth();

    if (width >= mobileWidth) {
        return (
          <GoUpButtonContainer>
            <HashLink smooth to={`${location.pathname}#top`}>
              <GoUpButton>go up!</GoUpButton>
            </HashLink>
          </GoUpButtonContainer>
        );
    } 

    return (
      <GoUpButtonContainer>
        <HashLink smooth to={`${location.pathname}#top`}>
          <GoUpIcon src="assets/go_down_icon.png" alt="down arrow" />
        </HashLink>
      </GoUpButtonContainer>
    );
}
export const BetiInButton = () => {
  return (
    <InButton
      href="https://www.linkedin.com/in/beatasuscicka/"
      target="_blank"
      rel="noreferrer"
    >
      <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
      <Text>Beata Suścicka</Text>
    </InButton>
  );
};

export const NatiInButton = () => {
  return (
    <InButton
      href="https://www.linkedin.com/in/natalia-mateusiak/"
      target="_blank"
      rel="noreferrer"
    >
      <InIcon src="assets/in_icon.png" alt="linkedlin logo" />
      <Text>Natalia Mateusiak</Text>
    </InButton>
  );
};
