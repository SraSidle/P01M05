import * as S from "./style";
import { ReactComponent as Favorites } from "assets/icons/heart.svg";
import { GamesResponse } from "types/Games";
import FormEdit from "components/FormEdit";
import { useState } from "react";
import ConfirmDelete from "components/ConfirmDelete";

type GameItemProps = {
  game: GamesResponse;
  key: string;
};

function GameItem({ game, key }: GameItemProps) {
  const [editGameModal, setEditGameModal] = useState(false);

  const [deleteGameModal, setDeleteGameModal] = useState(false);

  return (
    <S.Card className="card__game" key={key}>
      <S.HeaderCard>
      <S.GameName>{game.name}</S.GameName>
      <S.FavoriteGame>
        <Favorites />
      </S.FavoriteGame>
      </S.HeaderCard>
      <S.Genre>{game.genre}</S.Genre>
      <S.imageGame src={game.image} alt={`imagem do jogo: ${game.name}`} />
      <S.GameDescription>{game.description}</S.GameDescription>
      {editGameModal && (
        <FormEdit
          gameId={game.id}
          gameName={game.name}
          gameDescription={game.description}
          gameGenre={game.genre}
          gameImg={game.image}
          closeModal={() => setEditGameModal(false)}
        />
      )}
      {deleteGameModal && (
        <ConfirmDelete
          closeModal={() => setDeleteGameModal(false)}
          gameToDelete={game.id}
        />
      )}
      <S.Buttons>
      <button onClick={() => setEditGameModal(true)}>
        <i className="bi bi-pencil"></i>
      </button>
      <button onClick={() => setDeleteGameModal(true)}>
        <i className="bi bi-trash"></i>
      </button>
      </S.Buttons>
    </S.Card>
  );
}

export default GameItem;
