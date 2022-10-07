import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Footer = styled.footer`
  width: 100%;
  height: 15vh;
  background-color: ${theme.colors.color2};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px ${theme.colors.shadowColor};
  p {
    color: ${theme.colors.textColor2};
  }
  a:hover{
    color: ${theme.colors.textColorHover};
   }
`
export const Link = styled.a`
  ${() => css`
  color: ${theme.colors.textColor2};
  text-decoration: none;
  `}
`