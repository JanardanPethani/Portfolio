import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import RootLayout from "./RootLayout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RootLayout>
          <NavBar />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
          <Footer />
        </RootLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const Content = styled.div`
  grid-area: content;
  padding: 10px 50px;
`;

export default App;
