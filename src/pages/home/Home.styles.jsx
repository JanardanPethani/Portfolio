import styled from "styled-components";

export const HomeWrapper = styled.div``;

export const IntroWrapper = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
  margin: 20px 0px;
  grid-template-columns: 2fr 1fr;

  ${({ theme }) => theme.view.mobile} {
    grid-template-columns: 1fr;
    margin: 10px 0px;
    justify-items: center;
  }
`;

export const ProfileDescriptionWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.view.mobile} {
    padding-left: 0px;
    padding-bottom: 10px;
  }
`;

export const Devider = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid lightgray;
`;
