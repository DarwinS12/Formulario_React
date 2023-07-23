import React from "react";
import UseFormLogin from "../Components/UseFormLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = UseFormLogin({
    name: "",
    email: "",
    password: "",
  });

  const handleOnLogin = () => {
    localStorage.setItem("Logged", "true");

    navigate("/Home", {
      replace: true,
      state: {
        name,
      },
    });

    onResetForm();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleOnLogin}>
        <h1>Iniciar sesión</h1>
        <div className="input-group">
          <label htmlFor="name">Nombre:</label>
          <input
            className="inputLoging"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            className="inputLoging"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            className="inputLoging"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
        </div>
        <button className="btn-loggin">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
