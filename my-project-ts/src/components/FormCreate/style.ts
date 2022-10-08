import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const FormC = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border-radius: .3rem;
    color: ${theme.colors.textColor3};
    padding: .4rem;
    outline: 0;
    border: 1px solid ${theme.colors.borderLine2};
  }

  button {
    padding: .5rem;
    border: none;
    border-radius: .3rem;
    margin-top: .7rem;
    color: ${theme.colors.color1};
    background-color: ${theme.colors.color2};
  }
`;