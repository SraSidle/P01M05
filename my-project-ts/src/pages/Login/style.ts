import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Login = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    color: ${theme.colors.textColor};
    width: 100%;
    height: 90vh;
    text-align: center;
    padding: 3rem 0 0 0;
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: ${theme.colors.textColor};
      input {
        width: 15rem;
        padding: .7rem .5rem;
        border: 1px solid ${theme.colors.borderLine};
        border-radius: 5px;
        background-color: ${theme.colors.color3};
        color: white;
        
      }
      input:focus{
        outline: 0;
        border: 1px solid ${theme.colors.color2};
      }
    }
    button {
      background-color: ${theme.colors.color2};
      color: ${theme.colors.textColor};
      border-radius: 5px;
      border: 1px solid ${theme.colors.borderLine};
      margin: 1rem 0;
      padding: .7rem;
      width: 10rem;
      cursor: pointer;
    }
  `}
`