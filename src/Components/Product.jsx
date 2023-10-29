import { Link } from "react-router-dom";
import { FcDataBackup, FcDeleteDatabase } from "react-icons/fc";

export function Product({ producto }) {
  return (
    <div className="productos">
      <div className="producto" data-aos="zoom-in-up" data-aos-duration="1500">
        <h3 className="Id-product">ID del producto: {producto.idProducto}</h3>
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
        <Link className="LinkbuttonA" to={`/Actualizar/${producto.idProducto}`}>
          Actualizar
          <FcDataBackup />
        </Link>
        <Link className="LinkbuttonD" to={`/Eliminar/${producto.idProducto}`}>
          Eliminar <FcDeleteDatabase />
        </Link>
      </div>
    </div>
  );
}
