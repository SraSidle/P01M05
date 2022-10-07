import Footer from "components/Footer";
import Header from "components/Header";
import LogoText from "components/LogoText";
import * as S from "./style";

function Registration() {
  return (
    <S.Registration>
      <Header navBoolean={false} tagBoolean={true} text="Login" />
      <S.BackgroundBody className="background__body">
       <LogoText />
        <S.formReg>
            <p className="title__form">Crie sua Conta</p>
          <label>Seu nome</label>
          <input type="text" placeholder="Kevin Santos" required />
          <label>Email</label>
          <input
            type="email"
            placeholder="kevinsantos2022@gmail.com"
            required
          />
          <label>Confirmação do Email</label>
          <input
            type="email"
            placeholder="kevinsantos2022@gmail.com"
            required
          />
          <label>Senha</label>
          <input type="password" placeholder="min 8 caracteres" required />
          <label>Confirmação de Senha</label>
          <input type="password" placeholder="min 8 caracteres" required />
          <button>Cadastrar</button>
        </S.formReg>
      </S.BackgroundBody>
      <Footer />
    </S.Registration>
  );
}

export default Registration;
