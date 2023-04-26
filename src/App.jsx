import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import Home from "./pages/home/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import RootLayout from "./RootLayout.jsx";
import { Content } from "./App.styles.jsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RootLayout mode="white">
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

export default App;
