import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      In progress <FooterImg src="./images/work.gif" alt="work" />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-area: "footer";
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  height: ${({ theme }) => theme.footer.height};
  grid-column: 2 / 3;

  ${({ theme }) => theme.view.mobile} {
    grid-column: 1;
  }
`;

const FooterImg = styled.img`
  height: 50%;
  margin-left: 10px;
`;

export default Footer;
