import styled,{ css } from "styled-components";
import theme from "assets/styles/theme";

export const Card = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 139, 139, 0.6), rgba(107, 0, 139, 0.603), rgba(76, 139, 0, 0.6)) ;
  border: 1px solid ${theme.colors.borderLine};
  width: 250px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  padding: 7px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px 2px ${theme.colors.shadowColor2};
  margin: 1rem;
`;

export const GameName = styled.p`
  margin: 0;
  grid-column: 1/3;
  grid-row: 1/2;
`

export const FavoriteGame = styled.i`
  grid-column: 3/4;
  grid-row: 1/2;
  max-width: 1.5rem;
`

export const Genre = styled.p`
  grid-column: 1/4;
  grid-row: 2/3; 
  margin: .3rem;
`

export const imageGame = styled.img`
    width: 230px;
    height: 150px;
    grid-column: 1/4;
    grid-row: 3/5;
`;

export const GameDescription = styled.p`
  grid-column: 1/4;
  grid-row: 5/9;
`;