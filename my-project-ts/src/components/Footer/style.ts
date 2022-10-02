import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: ${theme.colors.color2};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${theme.colors.textColor1}
  }
  a:hover{
    color: ${theme.colors.textColorHover};
   }
`
export const Link = styled.a`
  ${() => css`
  color: ${theme.colors.color2};
  text-decoration: none;
  `}
`