import * as S from "./style";
import { DateTime } from "luxon";
import Footer from "components/Footer";

export default function Home() {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: "long"});

  return(
    <S.Home>Home
      <header>
        <h1>Lista De Jogos</h1>
        <ul>
          <li>favoritos</li>
          <li>Por Gênero</li>
          <li>sair</li>
        </ul>
        <h2>{dateDescription}</h2>
      </header>
      <Footer />
    </S.Home>
  )
} 