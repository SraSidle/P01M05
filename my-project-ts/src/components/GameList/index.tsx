import * as S from  "./style";
import GameItem from "components/GameItem";
import { games } from "mocks/games";

function GameList() {
  return (
    <S.GameList >
      {Boolean(games.length) && games.map((game, index) => (
        <GameItem
          key={`game-${index}`}
          game={game}
        />
      ))}
    </S.GameList>
  );
}

export default GameList;