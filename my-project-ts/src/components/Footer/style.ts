import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: ${theme.colors.color2};
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${theme.colors.textColor}
  }
  a:hover{
    color: ${theme.colors.color1};
   }
`
export const Link = styled.a`
  ${() => css`
  color: white;
  text-decoration: none;
  `}
`