import * as S from "./style";
import { ReactComponent as Game } from "assets/icons/game.svg";
import { ReactComponent as HomeI } from "assets/icons/home.svg";
import { ReactComponent as Favorites } from "assets/icons/heart.svg";
import { ReactComponent as LogOut } from "assets/icons/logout.svg";
import { useState } from "react";

type Headerprops = {
  navBoolean: boolean;
  tagBoolean: boolean;
  text: string;
};

function Header({ navBoolean, tagBoolean, text }: Headerprops) {
  const [nav] = useState(navBoolean);
  const [tagP] = useState(tagBoolean);

  return (
    <S.Header>
      <S.LogoHeader>
        <Game />
        <p className="nameLogo">GameEvolution</p>
      </S.LogoHeader>
      {nav && (
        <nav>
          <ul>
            <li>
              <HomeI />
            </li>
            <li>
              <Favorites />
            </li>
            <li>Por Gênero</li>
            <li>
              <LogOut />
            </li>
          </ul>
        </nav>
      )}
      {tagP && <p className="credential">{text}</p>}
    </S.Header>
  );
}

export default Header;
