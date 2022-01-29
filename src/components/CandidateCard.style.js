import styled from 'styled-components';

export const CandidateCardWrapper = styled.div`
  width: 350px;
  height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover,
  &:active {
    transform: scale(1.06);
  }
`;

export const CardContentWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const CandidateAvatar = styled.img`
  width: 100px;
  margin: 30px auto 5px;
  text-align: center;
`;

export const NameOfCandidate = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;

export const MainTechnologiesParagraph = styled.p`
  
`;

export const OtherTechnologiesParagraph = styled.p`

`;

export const BlueLine = styled.hr`
  width: 50%;
  margin-bottom: 20px;
  color: #ffc403;
`;