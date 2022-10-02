import * as S from "./style";
import {ReactComponent as Game} from "assets/icons/game.svg";
import {ReactComponent as HomeI} from "assets/icons/home.svg";
import {ReactComponent as Favorites} from "assets/icons/heart.svg";
import {ReactComponent as LogOut} from "assets/icons/logout.svg";

function Header() {
   return(
    <S.Header>  
      <S.LogoHeader>    
        <Game />
        <h1>Game</h1>
      </S.LogoHeader> 
    <nav>
      <ul>
        <li><HomeI /></li>
        <li><Favorites /></li>
        <li>Por Gênero</li>
        <li><LogOut /></li>
      </ul>
    </nav>
  </S.Header>
)
}

export default Header;