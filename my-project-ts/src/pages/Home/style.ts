import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Home = styled.div`
  ${({theme}) => css`
  background-color: ${theme.colors.color1};
    height: 100vh;
    color: ${theme.colors.textColor1};   
  `}
`;

export const Welcome = styled.div`
  background-color: ${theme.colors.color3}; 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 7px;
  box-shadow: 2px 2px 5px 1px ${theme.colors.shadowColor};
  border: 1px solid ${theme.colors.borderLine};
  margin: .5rem;
  padding: .7rem;
    .saludation{
      grid-column: 1/3;
     }
    .date{
      grid-column: 3/4;
     }
`;

