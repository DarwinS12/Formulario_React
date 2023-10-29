import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import DropMenu from "../Components/DropMenu";
import { useSEO } from "../hooks/useSeo";

const Layaout = () => {
  const navigate = useNavigate();

  let name = localStorage.getItem("name");
  let logged = localStorage.getItem("Logged");

  const onLogout = () => {
    localStorage.removeItem("Logged");
    localStorage.removeItem("name");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <header>
        <h1 className="Link">
          <Link onClick={onLogout} to="/">
            Inicio
          </Link>
        </h1>

        {logged ? (
          <>
            <span className="username">{name}</span>
            <DropMenu />
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
