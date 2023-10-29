import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormLogin } from "../hooks/useFormLogin";
import { useSEO } from "../hooks/useSeo";

const Login = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Iniciar sesión",
    description: "Formulario de inicio",
  });

  const { name, email, password, onInputChange, onResetForm } = useFormLogin({
    name: "",
    email: "",
    password: "",
  });

  const handleOnLogin = () => {
    localStorage.setItem("Logged", "true");
    localStorage.setItem("name", name);

    navigate("/Home", {
      replace: true,
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
