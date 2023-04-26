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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  height: 100%;
  object-fit: cover;
`;

export default Image;
