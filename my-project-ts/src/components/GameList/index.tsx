import * as S from  "./style";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {Api} from "helpers/Api"
// import {GameService} from "services/GameService";
import { GamesResponse } from "types/Games";
import GameItem from "components/GameItem";

type GameListProps = {
  games: GamesResponse[];
}

function GameList({games} : GameListProps) {
  return (
    <S.GameList >
      {games.map((game, index) => (
        <GameItem
          key={`game-${index}`}
          game={game}
        />
      ))}
    </S.GameList>
  );
}

export default GameList;