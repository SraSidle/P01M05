import styled from "styled-components";
import theme from "assets/styles/theme";

export const Card = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 139, 139, 0.6), rgba(107, 0, 139, 0.603)) ;
  border: 1px solid ${theme.colors.borderLine};
  width: 250px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px 2px ${theme.colors.shadowColor2};
  margin: 1rem;
`;

export const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GameName = styled.p`
  margin: 0;
  color: ${theme.colors.textColor2};
`;

export const FavoriteGame = styled.i`
  grid-column: 3/4;
  grid-row: 1/2;
  width: 1.5rem;
`

export const Genre = styled.p` 
  margin: .3rem;
  color: yellow;
`;

export const imageGame = styled.img`
    width: 230px;
    height: 150px;
`;

export const GameDescription = styled.p`
  font-size: .8rem;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: .5px solid ${theme.colors.color3};
    border-radius: .2rem;
    padding: .2rem;
    margin: .2rem;
    transition: ease-in-out .65s;

    .bi-pencil{
      color: darkgreen;
    }

    .bi-trash{
      color: darkred;
    }
  }

  button:hover{
    cursor: pointer;
    background-color: ${theme.colors.shadowColor};
  }
`;