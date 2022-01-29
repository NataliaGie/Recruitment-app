import styled from "styled-components";

export const MainContentContainer = styled.main`
  width: 100%;
  height: 100%;
`;

export const MainGreeting = styled.div`
  font-size: 1.4rem;
  margin: 15px 20px;
`;

export const StrongerText = styled.strong`
  font-weight: 600;
`;

export const CandidatesWrapper = styled.div`
  margin: 100px auto 30px;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 45px;
  justify-content: center;
`;