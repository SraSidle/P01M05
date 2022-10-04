import { Api } from "helpers/Api";
import { GamesResponse } from "types/Games";

const getAllGames = () => Api.get<GamesResponse[]>("/games");

const createGame = (game: Pick<GamesResponse,
    "name" 
  & "description"
  & "genre"
  & "image">) => Api.post("/games", game);

export const GameService = {
  getAllGames,
  createGame,
}