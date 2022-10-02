import * as S from "./style";
import {ReactComponent as Favorites} from "assets/icons/heart.svg";
import { GamesResponse } from "types/Games";

type GameItemProps = {
  game: GamesResponse;
}

function GameItem({game} : GameItemProps) {
  return (
    <S.Card>
     <S.GameName>{game.name}</S.GameName>
       <S.FavoriteGame><Favorites/></S.FavoriteGame>
         <S.Genre>{game.genre}</S.Genre>
       <S.imageGame src={game.image} alt={`imagem do jogo: ${game.name}`}/>
     <S.GameDescription>{game.description}</S.GameDescription>
    </S.Card>
  );
}

export default GameItem;