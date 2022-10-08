import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const EditBody = styled.div`
  text-align: center;

  p{
    color: ${theme.colors.textColorHover};
  }
`;

export const FormEdit = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: .7rem;

  input {
    padding: .3rem;
    border-radius: .3rem;
    border: 1px solid ${theme.colors.borderLine2};
    outline: 0;
  }

  button {
    padding: .5rem;
    background-color: ${theme.colors.color2};
    color: ${theme.colors.textColor2};
    border: none;
    border-radius: .3rem;
    margin-top: .7rem;
  }
`;