import { Container } from "./style";

import GithubImage from "../../assets/github.svg";
import LinkedinImage from "../../assets/linkedin.svg";
import CodeImage from "../../assets/code.svg";

export const SocialLink = () => {
    const GITHUB_LINK ="https://github.com/lucimar1985"
    const LINKEDIN_LINK = "https://www.linkedin.com/in/lucimar-simione-da-silva-90a46b94/"


  return (
    <Container>
      <div>
        <a href={GITHUB_LINK} target="_blank">
          <img src={GithubImage} alt="Github" />
        </a>
        <a href={LINKEDIN_LINK} target="_blank">
          <img src={LinkedinImage} alt="Linkedin" />
        </a>
      </div>
      <div>
        <img src={CodeImage} alt="Code" />
        Lucimar Simione
      </div>
    </Container>
  );
};
