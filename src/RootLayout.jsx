import React from "react";
import styled from "styled-components";

function RootLayout({ children, mode }) {
  return <RootLayoutWrapper mode={mode}>{children}</RootLayoutWrapper>;
}

const RootLayoutWrapper = styled.div`
  display: grid;
  background-color: ${({ theme, mode }) => {
    return mode === "dark" ? theme.colors.black : theme.colors.white;
  }};
  color: ${({ theme, mode }) => {
    return mode === "dark" ? theme.colors.white : theme.colors.black;
  }};
  grid-template-areas: "nav content" "nav footer";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  height: 100vh;

  ${({ theme }) => theme.view.mobile} {
    grid-template-areas: "nav" "content" "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0px 30px;
  height: 100%;

  ${({ theme }) => theme.view.mobile} {
    padding: 10px 5vw;
  }
`;

export default RootLayout;
