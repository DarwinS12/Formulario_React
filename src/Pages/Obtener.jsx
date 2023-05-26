import axios from "axios";
import { useEffect, useState } from "react";
import { FcDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FcDataBackup, FcDeleteDatabase } from "react-icons/fc";

const Obtener = () => {
  const [productos, setProductos] = useState([]);

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
      <h1>
        Aquí tienes una lista de algunos de los productos
        <FcDatabase />{" "}
      </h1>
      {Array.isArray(productos) &&
        productos.map((producto) => (
          <div className="productos" key={producto.idProducto}>
            <div className="producto">
              <h3>ID del producto: {producto.idProducto}</h3>
              <p>Código de barras: {producto.codigoBarra}</p>
              <p>Descripción: {producto.descripcion}</p>
              <p>Marca: {producto.marca}</p>
              <p>Precio: {producto.precio}</p>
              <p>Categoría: {producto.oCategoria.descripcion}</p>
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
