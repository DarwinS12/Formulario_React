import axios from "axios";
import { useForm } from "react-hook-form";
import { FcDeleteDatabase } from "react-icons/fc";
import { useParams } from "react-router-dom";


const Eliminar = () => {
  const { handleSubmit } = useForm();

  const {idProducto} = useParams() //useParams() es utilizado para acceder a los parámetros de la URL

  const onSubmit = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5282/api/Producto/Eliminar/${idProducto}`
      );
      console.log(response), alert("Se ha eliminado con éxito");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>
        ¿Quieres eliminar este Producto? <FcDeleteDatabase />{" "}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Eliminar;
