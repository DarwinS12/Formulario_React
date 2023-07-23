import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { FcAddDatabase, FcHome, FcConferenceCall } from "react-icons/fc";
import { CiCircleList } from "react-icons/ci";
import DropMenu from "../Components/DropMenu";
import { useState } from "react";

const Layaout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  console.log(state);

  let logged = localStorage.getItem("Logged");

  const onLogout = () => {
    localStorage.removeItem("Logged");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <header>
        <h1 className="Link">
          <Link onClick={onLogout} to="/">
            Home
          </Link>
        </h1>

        {logged ? (
          <>
            <div className="user">
              <span className="username">{state?.name}</span>
              <div className="span-click">
                <span onClick={() => setOpen((e) => !e)}>Acciones ↓</span>
                {open ? <DropMenu /> : ""}
              </div>
            </div>
            <button className="btn-logout" onClick={onLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <nav className="Link">
            <Link to="/Login">Iniciar sesión</Link>
            <br></br>
            <Link to="/SubirArchivo"> Trabaja con nostros</Link>
          </nav>
        )}
      </header>
      <Outlet /> {/* donde se van a renderizar todas la paginas */}
    </>
  );
};

export default Layaout;
