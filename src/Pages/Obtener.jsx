import axios from "axios";
import { useEffect, useState } from "react";
import { FcDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FcDataBackup, FcDeleteDatabase } from "react-icons/fc";
import Aos from "aos";
import "aos/dist/aos.css";

const Obtener = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5282/api/Producto/Lista"
        );
        setProductos(response.data.response);
        /* , alert("Se ha guardado con éxito"); */
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  return (
    <div>
      <h1 className="title-pages">
        Aquí tienes una lista de algunos de los productos
        <FcDatabase />{" "}
      </h1>
      {Array.isArray(productos) &&
        productos.map((producto) => (
          <div className="productos" key={producto.idProducto}>
            <div
              className="producto"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <h3 className="Id-product">
                ID del producto: {producto.idProducto}
              </h3>
              <p className="description">
                <span className="span-items">Código de barras: </span>
                {producto.codigoBarra}
              </p>
              <p className="description">
                <span className="span-items">Descripción: </span>{" "}
                {producto.descripcion}
              </p>
              <p className="description">
                <span className="span-items">Marca:</span> {producto.marca}
              </p>
              <p>
                <span className="span-items">Precio:</span> {producto.precio}
              </p>
              <p className="description">
                <span className="span-items">ID de la Categoría:</span>{" "}
                {producto.oCategoria.idCategoria}
              </p>
              <p className="description">
                <span className="span-items">Categoría:</span>{" "}
                {producto.oCategoria.descripcion}
              </p>
            </div>
            <div className="buttons-container" data-aos="zoom-in-up">
              <Link
                className="LinkbuttonA"
                to={`/Actualizar/${producto.idProducto}`}
              >
                Actualizar
                <FcDataBackup />
              </Link>
              <Link
                className="LinkbuttonD"
                to={`/Eliminar/${producto.idProducto}`}
              >
                Eliminar <FcDeleteDatabase />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Obtener;
