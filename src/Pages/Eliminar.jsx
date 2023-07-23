import axios from "axios";
import { useForm } from "react-hook-form";
import { FcDeleteDatabase } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useState } from "react";

const Eliminar = () => {
  const { handleSubmit } = useForm();

  const { idProducto } = useParams(); //useParams() es utilizado para acceder a los parámetros de la URL

  const { enqueueSnackbar } = useSnackbar();

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleAlert = () => {
    enqueueSnackbar("Se ha eliminado con éxito", {
      variant: "success",
    });
  };

  const onSubmit = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5282/api/Producto/Eliminar/${idProducto}`
      );
      console.log(response);
      handleAlert();
      setButtonDisabled(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
    </div>
  );
};
export default Eliminar;
