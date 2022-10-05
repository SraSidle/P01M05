import * as S from "./style";
import { useState, useCallback } from "react";
import { useGames } from "hooks/useGame";

function FormCreate() {
  const { games, getAllGames, createGame} = useGames();

  const [nameG, setNameG] = useState("");

  const [descriptionG, setDescriptionG] = useState("");

  const [genreG, setGenreG] = useState("");

  const [imageG, setImageG] = useState("");


  const handleButton = useCallback(async(game : object) => { 
    await createGame(game);
    await getAllGames();
  }, [createGame, getAllGames, games])

  return(
    <div>
      <h2>Adicione um novo jogo!</h2>
      <form   
        onSubmit={(event) => {
        event.preventDefault();
        handleButton({name: nameG, description: descriptionG, genre: genreG, image: imageG})
        }
        }
        >
        <label>Nome do jogo</label>
        <input
          id="name_game"
          value={nameG}
          onChange={(e) => setNameG(e.target.value)}
          type="text"
          placeholder="Super Mario"
          required/>
        <label>Prévia</label>
        <input
          id="description_game"
          value={descriptionG}
          onChange={(e) => setDescriptionG(e.target.value)}
          type="text" 
          placeholder="Jogo divertido de ação!" 
          required
        /> 
        <label>Gênero/Classificação</label>
        <input
          id="genre_game"
          value={genreG}
          onChange={(e) => setGenreG(e.target.value)}
          type="text"
          placeholder=""
          required
        />
        <label>Foto</label>
        <input
          id="image_game"
          value={imageG}
          onChange={(e) => setImageG(e.target.value)}
          type="url"
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default FormCreate;