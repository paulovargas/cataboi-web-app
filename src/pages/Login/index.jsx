import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import "../../styles.css";
import { LayoutComponents } from "../../components/LayoutComponents";
import { AuthContext } from "../../components/context/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singnIn, signed } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await singnIn(data);
  };

  if (signed) {
    return <Navigate to="/home" />
  } else {

  return (
    <LayoutComponents>
      <form onSubmit={handleSignIn} className="login-form">
        <span className="login-form-title">Bem Vindo!</span>
        <span className="login-form-title">
        </span>
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
          <button type="submit" className="login-form-btn">Login</button>
        </div>
        <div className="text-center">
          <span className="txt1">Não possui conta ?</span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
  }
};
