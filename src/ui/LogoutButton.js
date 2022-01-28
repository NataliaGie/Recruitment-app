import styled from "styled-components";
import theme from "../Theme";

export const LogoutButton = styled.button`
  width: 160px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  background-color: white;
  color: ${props => props.theme.colors.mainBlue};
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: capitalize;
  border-radius: 5px;
  border: ${props => `2px solid ${props.theme.colors.mainBlue}`};
  transition: all 0.3s;
  
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.mainBlue};
    color: white;
  }
`;