import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 80%;
  height: 40px;
  margin: 50px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  width: 300px;
  max-height: 100%;
  margin-left: 10px;
  padding-bottom: 4px;
  font-size: 1.1rem;
  font-weight: 300;
  color: gray;
  border: none;
  border-bottom: 1.5px solid #1f1f1f;

  &:focus {
    outline: none;
  }
`;