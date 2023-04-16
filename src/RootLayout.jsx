import React from "react";
import styled from "styled-components";

function RootLayout({ children }) {
  return <RootLayoutWrapper>{children}</RootLayoutWrapper>;
}

const RootLayoutWrapper = styled.div`
  display: grid;
  grid-template-areas: "nav" "content" "footer";
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export default RootLayout;
