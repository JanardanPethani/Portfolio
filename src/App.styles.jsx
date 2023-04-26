import styled from "styled-components";

export const Content = styled.div`
  grid-area: content;
  padding: 0px 20vw;

  ${({ theme }) => theme.view.mobile} {
    padding: 10px 5vw;
  }
`;
