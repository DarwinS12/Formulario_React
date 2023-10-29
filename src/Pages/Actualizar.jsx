import { FcDataBackup } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "../Components/Form";
import { useProducts } from "../hooks/useProducts";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

const Actualizar = () => {
  const { idProducto } = useParams();

  const { productosById: producto } = useProducts(idProducto);

  const { mutate, isError, isLoading } = useUpdateProduct();

  const onSubmit = (idProducto, data) => {
    mutate({ idProducto, data });
  };

  return (
    <>
      <h1>
        Actualiza un Producto <FcDataBackup />{" "}
      </h1>
      {isError ? <h1>Ha ocurrido un error.</h1> : ""}
      {isLoading ? (
        <h3>Actualizando...</h3>
      ) : (
        <>
          {producto && (
            <Form
              initialValues={{
                idProducto: producto.idProducto,
                idCategoria: producto.idCategoria,
                codigoBarra: producto.codigoBarra,
                descripcion: producto.descripcion,
                marca: producto.marca,
                precio: producto.precio,
              }}
              onSubmit={(data) => onSubmit(producto.idProducto, data)}
            />
          )}
        </>
      )}
      <Link className="LinkbuttonR" to={"/Obtener/"}>
        Regresar
      </Link>
    </>
  );
};
export default Actualizar;
