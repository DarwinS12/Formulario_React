import { Outlet, Link } from "react-router-dom";
import{ FcAddDatabase, FcHome, FcDatabase} from "react-icons/fc"


const Layaout = () => {
  return (
    <div className="routes">
      <nav>
        <ul className="ul">
          <li>
            <Link to="/">Inicio <FcHome/> </Link>
          </li>
          <li>
            <Link to="/Obtener">Lista <FcDatabase/> </Link>
          </li>
          <li>
            <Link to="/Agregar">Agregar <FcAddDatabase/> </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* donde se van a renderizar todas la paginas */}
    </div>
  );
};

export default Layaout;
