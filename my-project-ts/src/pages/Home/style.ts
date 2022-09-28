import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Home = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    width: 100vw;
    height: 100vh;
     header {
       background-color: ${theme.colors.color2};
       position: absolute;
       top: 0;
       width: 100%;
       display: grid;
       
       h1 {
        color: white;
       }
     }   
  `
}`