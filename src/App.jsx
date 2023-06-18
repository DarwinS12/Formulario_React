import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layaout from "./Pages/Layaout";
import Home from "./Pages/Home";
import Obtener from "./Pages/Obtener";
import Agregar from "./Pages/Agregar";
import Eliminar from "./Pages/Eliminar";
import Actualizar from "./Pages/Actualizar";
import Default from "./Pages/Default";
import Soporte from "./Pages/Soporte";

function App() {
  return (
    <>
      <h1 className="title">Selecciona la acción que quieres hacer</h1>
      <Routes classname="routes">
        <Route path="/" element={<Layaout />}>
          <Route path="/" element={<Home />} />
          <Route path="Obtener" element={<Obtener />} />
          <Route path="Agregar" element={<Agregar />} />
          <Route path="Eliminar/:idProducto" element={<Eliminar />} />
          <Route path="Actualizar/:idProducto" element={<Actualizar />} />
          <Route path="Soporte" element={<Soporte/>} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
