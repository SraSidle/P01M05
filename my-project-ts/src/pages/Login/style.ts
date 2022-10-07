import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Login = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    color: ${theme.colors.textColor};
    width: 100%;
    text-align: center;

    form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: ${theme.colors.textColor3};

      input {
        width: 15rem;
        padding: .5rem;
        border: 1px solid ${theme.colors.borderLine2};
        border-radius: 5px;
        color: white;
        
      }
      input:focus{
        outline: 0;
        border: 1px solid ${theme.colors.color2};
      }
    }
    button {
      background-color: ${theme.colors.color2};
      color: ${theme.colors.textColor2};
      border-radius: 5px;
      border: 1px solid ${theme.colors.borderLine};
      margin: 1rem 0;
      padding: .7rem;
      width: 10rem;
      cursor: pointer;
    }
  `}
`;

export const AreaLogin = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const backgroundLogin = styled.div`
  background-color: ${theme.colors.color3};
  width: 350px;
  border-radius: .5rem;
  box-shadow: 1px 1px 6px 2px ${theme.colors.shadowColor2};

  .titleFormL{
    font-size: 1.4rem;
    font-weight: 600;
    color: darkcyan;
  }
`;