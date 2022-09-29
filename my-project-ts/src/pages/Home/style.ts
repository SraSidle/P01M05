import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Home = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    height: 100vh;
    color: white;
  `
}`

export const Header = styled.header`
    background-color: ${theme.colors.color2};  
    
    nav{
      display: flex;
      flex-direction: row;
    ul {
      display: flex;
      flex-direction: row;
      flex: 1;
      li{
        margin: 0 1rem;
        list-style: none;
        flex: 1;
    }
  }
}`