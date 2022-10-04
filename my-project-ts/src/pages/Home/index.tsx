import * as S from "./style";
import { useEffect } from "react";
import { DateTime } from "luxon";
import Header from "components/Header";
import Footer from "components/Footer";
import GameList from "components/GameList";
import { useGames } from "hooks/useGame";

export default function Home() {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: "long"});

  const { games, getAllGames, createGame} = useGames();

  useEffect(() => {
    getAllGames()
  }, [getAllGames])

  return(
    <S.Home>
      <Header />
        <S.Welcome>
        <p className="saludation">Boas vindas, Usuário</p>
        <p className="date">{dateDescription}</p>
        </S.Welcome>
        <GameList games={games}/>
      <Footer />
    </S.Home>
  )
} 