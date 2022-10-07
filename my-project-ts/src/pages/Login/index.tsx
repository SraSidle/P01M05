import * as S from "./style";
import { useState } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import LogoText from "components/LogoText";

export default function Login() {
  const [form, setNewForm] = useState({});

  function handleForm(e: any) {
    const form1 = e.target.element;
  }
  return (
    <S.Login>
      <Header navBoolean={false} tagBoolean={true} text="Cadastro" />
      <S.AreaLogin>
        <LogoText />
        <S.backgroundLogin>
          <p className="titleFormL">Entre na sua conta</p>
          <form
            name="login"
            onSubmit={(e) => {
              handleForm(e);
            }}
          >
            <label>E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Digite seu E-mail de cadastro"
              required
            />
            <label>Senha</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
            <button>Entrar</button>
          </form>
        </S.backgroundLogin>
      </S.AreaLogin>
      <Footer />
    </S.Login>
  );
}
