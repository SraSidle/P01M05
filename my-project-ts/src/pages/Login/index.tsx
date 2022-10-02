import * as S from "./style";
import { useState } from "react";
import Footer from "components/Footer";

export default function Login() {
  const [form, setNewForm] = useState({});

  function handleForm(e: any) {
    const form1 = e.target.element;
  }
  return(
    <S.Login>  
      <h2>Entre na sua conta</h2>
      <form
        name="login"
        onSubmit={ (e) => {handleForm(e)}}
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
      <Footer />
    </S.Login>
  );
}