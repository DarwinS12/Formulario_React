import React from "react";
import { Routes, Route } from "react-router-dom";
import Layaout from "../Pages/Layaout";
import Home from "../Pages/Home";
import Obtener from "../Pages/Obtener";
import Agregar from "../Pages/Agregar";
import Eliminar from "../Pages/Eliminar";
import Actualizar from "../Pages/Actualizar";
import Default from "../Pages/Default";
import PrivateRoute from "./PrivateRouter"
import Login from "../Pages/Login";
import Inicio from "../Pages/Inicio";
import SubirArchivo from "../Pages/SubirArchivo";
import Soporte from "../Pages/Soporte";

function AppRouter() {
  return (
    <>
      <Routes classname="routes">
        <Route path="/" element={<Layaout />}>
          <Route index element={<Inicio />} />
          <Route element={<PrivateRoute />}>
            <Route path="Obtener" element={<Obtener />}></Route>
            <Route path="Agregar" element={<Agregar />} />
            <Route path="Eliminar/:idProducto" element={<Eliminar />} />
            <Route path="Actualizar/:idProducto" element={<Actualizar />} />
            <Route path="Soporte" element={<Soporte />} />
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="SubirArchivo" element={<SubirArchivo />} />
          <Route path="Home" element={<Home />}></Route>
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
