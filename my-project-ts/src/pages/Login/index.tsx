import * as S from "./style";
import Footer from "components/Footer";

export default function Login() {
  return(
    <S.Login>
    
      <h2>Entre na sua conta</h2>
      <form>
        <label>E-mail</label>
        <input type="email" placeholder="Digite seu E-mail de cadastro" required/>
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" required/>
        <button>Entrar</button>
      </form>
      <Footer />
    </S.Login>
  );
}