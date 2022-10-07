import * as S from "./style";
import { useGames } from "hooks/useGame";
import { useState } from "react";

function FormEdit(gameId: any, gameName: string) {
  const { getAllGames, updateGame } = useGames();

  const [ editedGame, setEditedGame ] = useState({
    id: gameId,
    newName: gameName,
    newDescription: "",
    newGenre: "",
    newImage: "",
  });

  const editGame = async (game: any, gameToUpdate: any) => {
    delete gameToUpdate.id;
    await updateGame(game, gameToUpdate);
    //closeModal();
  };

  return(
    <>
    <form   
        onSubmit={(event) => {
        event.preventDefault();
        editGame(editedGame.id, editedGame
          // {
          //   name: editedGame.newName,
          //   description: editedGame.newDescription,
          //   genre: editedGame.newGenre,
          //   image: editedGame.newImage
          //  })
        )
         }
        }
        >
        <label>Nome do jogo</label>
        <input
          id="name_game"
          value={editedGame.newName}
          onChange={(e) => setEditedGame({...editedGame , newName: e.target.value})}
          type="text"
          placeholder="Super Mario"
          required/>
        <label>Prévia</label>
        <input
          id="description_game"
          value={editedGame.newDescription}
          onChange={(e) => setEditedGame({...editedGame , newDescription: e.target.value})}
          type="text" 
          placeholder={""}
          required
        /> 
        <label>Gênero/Classificação</label>
        <input
          id="genre_game"
          value={editedGame.newGenre}
          onChange={(e) => setEditedGame({...editedGame , newGenre: e.target.value})}
          type="text"
          placeholder=""
          required
        />
        <label>Foto</label>
        <input
          id="image_game"
          value={editedGame.newImage}
          onChange={(e) => setEditedGame({...editedGame , newImage: e.target.value})}
          type="url"
          required
        />
        <button type="submit">Editar</button>
      </form>
    </>
  );
}

export default FormEdit;