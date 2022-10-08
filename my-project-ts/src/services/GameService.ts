import { Api } from "helpers/Api";
import { GamesResponse } from "types/Games";

const getAllGames = () => Api.get<GamesResponse[]>("/games");

const createGame = (
  game: Pick<GamesResponse, "name" & "description" & "genre" & "image">
) => Api.post("/games", game);

const updateGame = (
  id: string,
  game: Pick<GamesResponse, "name" & "description" & "genre" & "image">
) => Api.put(`/games/${id}`, game);

const deleteGame = (id: string) => Api.delete(`/games/${id}`);

export const GameService = {
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
};
