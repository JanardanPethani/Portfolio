import React from "react";
import Image from "../../components/image/Image";
import styled from "styled-components";
import "./Home.styles.scss";

function Home() {
  return (
    <HomeWrapper>
      <TopSectionWrapper>
        <ProfileDescriptionWrapper>
          <p className="profile-name">Janardan Pethani</p>
          <p className="profile-designation">Software Developer</p>
        </ProfileDescriptionWrapper>
        <Image img={"/images/profile.jpg"} profile={true} />
      </TopSectionWrapper>
      <BottomSectionWrapper>
        <div>Education</div>
        <div>Experience</div>
      </BottomSectionWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TopSectionWrapper = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 2fr 1fr;
`;

const BottomSectionWrapper = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
`;

const ProfileDescriptionWrapper = styled.div`
  display: flex;
  padding-left: 20vw;
  flex-direction: column;
  justify-content: center;
`;

export default Home;
