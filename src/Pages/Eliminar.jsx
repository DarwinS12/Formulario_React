import { useForm } from "react-hook-form";
import { FcDeleteDatabase } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

const Eliminar = () => {
  const { handleSubmit } = useForm();

  const { idProducto } = useParams(); //useParams() es utilizado para acceder a los parámetros de la URL

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { deleteTheProducts } = useDeleteProduct();

  const onSubmit = () => {
    deleteTheProducts(idProducto);
    setButtonDisabled(false);
  };

  return (
    <>
      <h1 className="title-pages">
        ¿Quieres eliminar este Producto? <FcDeleteDatabase />{" "}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          className="LinkbuttonD"
          type="submit"
          disabled={buttonDisabled === false}
        >
          Enviar
        </button>
      </form>
      <Link className="LinkbuttonR" to={"/Obtener/"}>
        Regresar
      </Link>
    </>
  );
};
export default Eliminar;
