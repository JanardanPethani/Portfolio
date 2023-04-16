import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <Nav>
      <ListChild>Home</ListChild>
      <ListChild>About</ListChild>
      <ListChild>Blogs</ListChild>
      <ListChild>Photography</ListChild>
      <ListChild>Contact</ListChild>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: "nav";
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => {
    theme.colors.dark;
  }};
`;

const ListChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  height: ${({ theme }) => theme.nav.height};
  cursor: pointer;
  letter-spacing: 1px;
  transition: background-color 0.2s ease, color 0.2s ease;

  :hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default NavBar;
