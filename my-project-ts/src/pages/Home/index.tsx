import * as S from "./style";
import { DateTime } from "luxon";
import Footer from "components/Footer";

export default function Home() {
  const dateDescription = DateTime.now().toLocaleString({...DateTime.DATE_SHORT, weekday: "long"});

  return(
    <S.Home>
      <S.Header>
        <nav>
        <h1>Lista De Jogos</h1>
        <ul>
          <li>favoritos</li>
          <li>Por Gênero</li>
          <li>sair</li>
        </ul>
        <p>{dateDescription}</p>
        </nav>
      </S.Header>
      <Footer />
    </S.Home>
  )
} 