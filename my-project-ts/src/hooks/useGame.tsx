import { GamesResponse } from "types/Games";
import { GameService } from "services/GameService";
import { useCallback, useState } from "react";

export const useGames = () => {
  const [games, setGames] = useState<GamesResponse[]>([]);

  const getAllGames = useCallback(async () => {
    const { status, data } = await GameService.getAllGames();

    if (status !== 200) throw new Error();

    setGames(data);
  }, []);

  const createGame = useCallback(
    async (
      game: Pick<GamesResponse, "name" & "description" & "genre" & "image">
    ) => {
      const { status } = await GameService.createGame(game);

      if (status !== 201) throw new Error();
    },
    []
  );

  const updateGame = useCallback(
    async (
      id: string,
      game: Pick<GamesResponse, "name" & "description" & "genre" & "image">
    ) => {
      const { status } = await GameService.updateGame(id, game);

      if (status !== 200) throw new Error();
    },
    []
  );

  const deleteGame = useCallback(async (id: string) => {
    const { status } = await GameService.deleteGame(id);

    if (status !== 202) throw new Error();
  }, []);

  return {
    games,
    getAllGames,
    createGame,
    updateGame,
    deleteGame,
  };
};
