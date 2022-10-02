import styled, { css } from "styled-components";
import theme from "assets/styles/theme";

export const Home = styled.div`
  ${({theme}) => css`
  background-color: ${theme.colors.color1};
    height: 100vh;
    color: black;   
  `}
`;

export const Welcome = styled.div`
  background-color: rgb(214, 214, 214); 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 7px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(214, 214, 150);
  margin: .5rem;
  padding: .7rem;
    .saludation{
      grid-column: 1/3;
     }
    .date{
      grid-column: 3/4;
     }
`;

