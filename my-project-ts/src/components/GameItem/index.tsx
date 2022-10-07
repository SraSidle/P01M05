import * as S from "./style";
import {ReactComponent as Favorites} from "assets/icons/heart.svg";
import { GamesResponse } from "types/Games";
import FormEdit from "components/FormEdit";
import { useState } from "react";

type GameItemProps = {
  game: GamesResponse;
  key: string;
}

function GameItem({game, key} : GameItemProps) {

  const [editGameModal, setEditGameModal] = useState(false);

  const [deleteGameModal, setDeleteGameModal] = useState(false);

  return (
    <S.Card className="" key={key}>
     <S.GameName>{game.name}</S.GameName>
       <S.FavoriteGame><Favorites/></S.FavoriteGame>
         <S.Genre>{game.genre}</S.Genre>
       <S.imageGame src={game.image} alt={`imagem do jogo: ${game.name}`}/>
     <S.GameDescription>{game.description}</S.GameDescription>
       {editGameModal && 
        <FormEdit
          gameId={game.id}
          gameName={game.name}
        />}
        <button onClick={() => setEditGameModal(true)}>
         <i className="bi bi-pencil"></i>
        </button>
        <button onClick={() => setDeleteGameModal(true)}>
         <i className="bi bi-trash"></i>
        </button>
    </S.Card>
  );
}

export default GameItem;