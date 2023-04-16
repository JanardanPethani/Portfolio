import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterWrapper>In progress with 💖 by Janardan Pethani</FooterWrapper>;
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-area: "footer";
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  height: ${({ theme }) => theme.footer.height};
`;

export default Footer;
