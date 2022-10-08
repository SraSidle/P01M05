import * as S from "./style";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Header from "components/Header";
import Footer from "components/Footer";
import GameList from "components/GameList";
import { useGames } from "hooks/useGame";
import FormCreate from "components/FormCreate";

export default function Home() {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const { games, getAllGames, createGame } = useGames();

  const [add, setAdd] = useState(false);

  useEffect(() => {
    getAllGames();
  }, [getAllGames, createGame]);

  return (
    <S.Home>
      {add && <FormCreate closeModal={() => setAdd(false)} />}
      <Header navBoolean={true} tagBoolean={false} text="" />
      <S.Welcome>
        <p className="saludation">Boas vindas, Kevin</p>
        <p className="date">{dateDescription}</p>
      </S.Welcome>
      <S.DivButtonAdd>
        <button onClick={() => setAdd(true)}>+ Adicione um novo Jogo</button>
      </S.DivButtonAdd>
      <GameList games={games} />
      <Footer />
    </S.Home>
  );
}
