import * as S from "./style";
import { useGames } from "hooks/useGame";
import { useState } from "react";
import OverlayModal from "components/OverlayModal";

type FormEditProps = {
  gameId: any;
  gameName: string;
  gameDescription: string;
  gameGenre: string;
  gameImg: string;
  closeModal: any;
};

function FormEdit({
  gameId,
  gameName,
  gameDescription,
  gameGenre,
  gameImg,
  closeModal,
}: FormEditProps) {
  const { getAllGames, updateGame } = useGames();

  const [editedGame, setEditedGame] = useState({
    id: gameId,
    newName: gameName,
    newDescription: gameDescription,
    newGenre: gameGenre,
    newImage: gameImg,
  });

  const editGame = async (game: any, gameToUpdate: any) => {
    delete gameToUpdate.id;
    await updateGame(game, gameToUpdate);
    closeModal();
  };

  return (
    <OverlayModal closeModal={closeModal}>
      <S.EditBody>
        <p>Edite o Jogo</p>
        <S.FormEdit
          onSubmit={(event) => {
            event.preventDefault();
            console.log(editedGame);
            editGame(editedGame.id, editedGame);
          }}
        >
          <label>Nome do jogo</label>
          <input
            id="name_game"
            value={editedGame.newName}
            onChange={(e) =>
              setEditedGame({ ...editedGame, newName: e.target.value })
            }
            type="text"
            placeholder="Super Mario"
            required
          />
          <label>Prévia</label>
          <input
            id="description_game"
            value={editedGame.newDescription}
            onChange={(e) =>
              setEditedGame({ ...editedGame, newDescription: e.target.value })
            }
            type="text"
            placeholder={""}
            required
          />
          <label>Gênero/Classificação</label>
          <input
            id="genre_game"
            value={editedGame.newGenre}
            onChange={(e) =>
              setEditedGame({ ...editedGame, newGenre: e.target.value })
            }
            type="text"
            placeholder=""
            required
          />
          <label>Foto</label>
          <input
            id="image_game"
            value={editedGame.newImage}
            onChange={(e) =>
              setEditedGame({ ...editedGame, newImage: e.target.value })
            }
            type="url"
            required
          />
          <button type="submit">Editar</button>
        </S.FormEdit>
      </S.EditBody>
    </OverlayModal>
  );
}

export default FormEdit;
