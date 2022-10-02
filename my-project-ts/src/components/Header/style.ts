import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Header = styled.header`
    background-color: ${theme.colors.color2}; 
    display: grid;
    grid-template-columns: 1fr 2fr ;
    grid-template-rows: 1fr;
    max-height: 6rem;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.5);
    nav{       
        ul{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        li{
          min-width: 1.5rem;
          max-width: 2rem;
          margin: 0 1rem;
          list-style: none;         
      }
    }
}`

export const LogoHeader = styled.div`
  max-width: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`