import axios from "axios";
import { FcAddDatabase } from "react-icons/fc";
import Form from "../Components/Form";
import { Link } from "react-router-dom";

const Agregar = () => {
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5282/api/Producto/Guardar",
        data
      );
      console.log(response.data.response), alert("Se ha guardado con éxito");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>
        Agrega un nuevo Producto <FcAddDatabase />{" "}
      </h1>
      <Form onSubmit={onSubmit} />
      <Link className="LinkbuttonR" to={"/"}>
        Regresar
      </Link>
    </div>
  );
};
export default Agregar;
