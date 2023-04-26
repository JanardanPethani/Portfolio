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
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export default RootLayout;
