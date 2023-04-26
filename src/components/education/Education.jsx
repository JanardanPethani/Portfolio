import React from "react";
import styled from "styled-components";

const EducationComponent = () => {
  return (
    <Wrapper>
      <Head>Education</Head>
      <DescriptionWrapper>
        <div>Birla Vishvakarma Mahavidyalaya (BVM)</div>
        <div>2017 - 2021</div>
        <div>B.Tech</div>
        <div>8.11</div>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default EducationComponent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
`;

const Head = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWidth.bold};
  text-shadow: ${({ theme }) => theme.shadow.sm};
  padding-bottom: 20px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
