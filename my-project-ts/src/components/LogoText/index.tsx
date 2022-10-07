import * as S from "./style";
import { ReactComponent as Game } from "assets/icons/game.svg";

function LogoText() {
  return(
    <S.BackgroundBodyLeft>
    <div>
      <Game className="logo__game" />
      <p className="logo__name">GameEvolution</p>
    </div>
    <p className="description_app">
      {" "}
      Plataforma de lista de Jogos em que você tem a experiência de
      interagir com outras pessoas
    </p>
  </S.BackgroundBodyLeft>
  );
}

export default LogoText;