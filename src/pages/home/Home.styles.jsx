import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroWrapper = styled.div`
  display: grid;
  gap: 10px;
  margin: 20px 0px;
  grid-template-columns: 2fr 1fr;
`;

export const ProfileDescriptionWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
`;

export const Devider = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid lightgray;
`;
