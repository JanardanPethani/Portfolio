import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

function NavBar() {
  let loc = useLocation();
  return (
    <Nav>
      <ListChild isActive={loc.pathname == "/"} to={"/"}>
        Home
      </ListChild>
      <ListChild isActive={loc.pathname == "/about"} to={"/about"}>
        About
      </ListChild>
      <ListChild isActive={loc.pathname == "/blogs"} to={"/blogs"}>
        Blogs
      </ListChild>
      <ListChild isActive={loc.pathname == "/photography"} to={"/photography"}>
        Photography
      </ListChild>
      <ListChild isActive={loc.pathname == "/contact"} to={"/contact"}>
        Contact
      </ListChild>
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
    justify-content: space-around;
    grid-row: 1;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const ListChild = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  height: ${({ theme }) => theme.nav.height};
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  letter-spacing: 1px;
  transition: background-color 0.2s ease, color 0.2s ease;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};

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
