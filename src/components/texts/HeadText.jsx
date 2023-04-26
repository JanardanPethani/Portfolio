import React from "react";
import styled from "styled-components";

function HeadText({ bolder, children, shadow }) {
  return (
    <Text bolder={bolder} shadow={shadow}>
      {children}
    </Text>
  );
}

export default HeadText;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.head};
  font-weight: ${({ theme, bolder, bold }) => {
    if (bold) return theme.fontWidth.bold;
    if (bolder) return theme.fontWidth.bolder;
    return 400;
  }};

  text-shadow: ${({ shadow, theme }) => {
    if (shadow) {
      return theme.shadow.sm;
    }
  }};
`;
