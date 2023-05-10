import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

function NavBar() {
  let loc = useLocation();
  console.log(loc);
  return (
    <Nav>
      <ListChild isActive={loc.pathname == "/"}>Home</ListChild>
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
  grid-row: 1 / 3;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.view.mobile} {
    flex-direction: row;
    grid-row: 1;
  }
`;

const ListChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  height: ${({ theme }) => theme.nav.height};
  cursor: pointer;
  width: 100%;
  letter-spacing: 1px;
  transition: background-color 0.2s ease, color 0.2s ease;
  box-sizing: border-box;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    `}

  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.view.mobile} {
    padding: 10px 5px;
    width: auto;
  }
`;

export default NavBar;
