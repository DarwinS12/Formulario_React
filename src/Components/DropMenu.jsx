import { Link } from "react-router-dom";
import React from "react";

const DropMenu = () => {
  return (
    <div className="drop-menu">
      <p className="p-link">
        <Link className="drop-Link" to="/Obtener">
          Listado
        </Link>
      </p>

      <p className="p-link">
        <Link className="drop-Link" to="/Agregar">
          Agregar
        </Link>
      </p>

      <p className="p-link">
        <Link className="drop-Link" to="/Soporte">
          Soporte
        </Link>
      </p>
    </div>
  );
};

export default DropMenu;
