import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: ${theme.colors.color2};
  position: absolute;
  bottom: 0;
  /* ${({theme}) => css`
   footer {
   }
  `} */
`