import styled from "styled-components";
import Theme from "../Theme";

export const LoginFormPage = styled.form`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.colors.mainBlue};
  background: linear-gradient(100deg, rgb(30,141,206) 50%, rgba(240,240,240,1) 50%);
`;

export const MainTitle = styled.h1`
  margin: 0;
  color: white;
  font-size: 3.5rem;
  width: 50%;
  text-align: center;
  padding-top: 35vh;
`;

export const FormWrapper = styled.div`
  position: absolute;
  right: 13%;
  top: 20vh;
  width: 350px;
`;

export const FormTitle = styled.h2`
  margin: 0 0 40px;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const ErrorMessage = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  color: #bb0000;
  font-weight: 500;
  font-style: italic;
`;

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 1rem;
`;

export const FormInput = styled.input`
  height: 35px;
  border-radius: 15px;
  border: 1px solid #b2b2b2;
  padding-left: 10px;
  color: gray;
  
  &:focus {
    outline: none;
  }
`;

export const SubmitFormButton = styled.button`
  margin-top: 25px;
  height: 50px;
  width: 100%;
  text-transform: capitalize;
  font-size: 1.2rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: white;
  background: ${props => props.theme.colors.mainBlue};;
  border: none;
  border-radius: 25px;
  font-weight: 600;

  &:hover,
  &:active {
    background: ${props => props.theme.colors.darkenBlue};
  }
`;