import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";
import jpIMG from "../../assets/jp.svg";
import { api } from "../../services/api";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveUser = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };

    const response = await api.post("/create", data);
    console.log("Dados : ", response);
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleSaveUser} className="login-form">
        <span className="login-form-title">Criar Conta</span>
        <span className="login-form-title">
          <img src={jpIMG} alt="Jovem Programador" />
        </span>
        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
            Cadastrar
          </button>
        </div>
        <div className="text-center">
          <span className="txt1">Já possui conta ?</span>
          <Link className="txt2" to="/">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
