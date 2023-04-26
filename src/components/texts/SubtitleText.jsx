import React from "react";
import styled from "styled-components";

function SubtitleText({ bolder, children }) {
  return <Text bolder={bolder}>{children}</Text>;
}

export default SubtitleText;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme, bolder, bold }) => {
    if (bold) return theme.fontWidth.bold;
    if (bolder) return theme.fontWidth.bolder;
    return 400;
  }};
`;
