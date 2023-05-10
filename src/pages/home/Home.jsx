import React from "react";
import Image from "../../components/image/Image.jsx";
import {
  HomeWrapper,
  ProfileDescriptionWrapper,
  IntroWrapper,
} from "./Home.styles.jsx";
import HeadText from "../../components/texts/HeadText.jsx";
import SubtitleText from "../../components/texts/SubtitleText.jsx";

function Home() {
  return (
    <HomeWrapper>
      <IntroWrapper>
        <ProfileDescriptionWrapper>
          <HeadText bolder>Janardan Pethani</HeadText>
          <SubtitleText>Full-stack Developer</SubtitleText>
        </ProfileDescriptionWrapper>
        <Image img={"/images/profile.jpg"} profile={true} />
      </IntroWrapper>
    </HomeWrapper>
  );
}

export default Home;
