import React from "react";
import Image from "../../components/image/Image.jsx";
import EducationComponent from "../../components/education/Education.jsx";
import ExperienceComponent from "../../components/experience/Experience.jsx";
import {
  HomeWrapper,
  ProfileDescriptionWrapper,
  IntroWrapper,
  Devider,
} from "./Home.styles.jsx";
import HeadText from "../../components/texts/HeadText.jsx";
import SubtitleText from "../../components/texts/SubtitleText.jsx";

function Home() {
  return (
    <HomeWrapper>
      <IntroWrapper>
        <ProfileDescriptionWrapper>
          <HeadText bolder>Janardan Pethani</HeadText>
          <SubtitleText>Software Developer</SubtitleText>
        </ProfileDescriptionWrapper>
        <Image img={"/images/profile.jpg"} profile={true} />
      </IntroWrapper>
      <Devider />
      <EducationComponent />
      <ExperienceComponent />
    </HomeWrapper>
  );
}

export default Home;
