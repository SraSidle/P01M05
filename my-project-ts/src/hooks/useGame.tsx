import { GamesResponse } from "types/Games";
import { GameService } from "services/GameService"
import { useCallback, useState } from "react";;

export const useGames = () => {
  const [games, setGames] = useState<GamesResponse[]>([]);

  const getAllGames = useCallback(async () => {
    const { status, data } = await GameService.getAllGames()

    if(status !== 200) throw new Error();

    setGames(data);
  }, [])

  const createGame = useCallback(async(
    game: Pick<GamesResponse,
    "name" 
  & "description"
  & "genre"
  & "image">) => {
    
    const { status } = await GameService.createGame(game);

    if(status !== 201) throw new Error();
  }, [])

  return {
    games,
    getAllGames,
    createGame,
  }
}