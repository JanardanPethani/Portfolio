import React from "react";
import styled from "styled-components";

function Image({ img, profile }) {
  return profile ? (
    <ProfileImageWrapper src={img} />
  ) : (
    <img src={img} alt="Img" />
  );
}

const ProfileImageWrapper = styled.img`
  border-radius: 10px;
  object-fit: cover;

  ${({ theme }) => theme.view.mobile} {
    width: 80%;
    height: auto;
  }
`;

export default Image;
