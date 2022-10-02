import * as S from "./style";
import { DateTime } from "luxon";
import Header from "components/Header";
import Footer from "components/Footer";
import GameList from "components/GameList";

export default function Home() {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: "long"});

  return(
    <S.Home>
      <Header />
        <S.Welcome>
        <p className="saludation">Boas vindas, Usuário</p>
        <p className="date">{dateDescription}</p>
        </S.Welcome>
        <GameList />
      <Footer />
    </S.Home>
  )
} 