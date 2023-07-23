import axios from "axios";
import { FcAddDatabase } from "react-icons/fc";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const Agregar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleAlert = () => {
    enqueueSnackbar("Se ha agregado con éxito", {
      variant: "success",
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5282/api/Producto/Guardar",
        data
      );
      console.log(response.data.response);
      handleAlert();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="title-pages">
        Agrega un nuevo Producto <FcAddDatabase />{" "}
      </h1>
      <Form onSubmit={onSubmit} />
      <Link className="LinkbuttonR" to={"/Home"}>
        Regresar
      </Link>
    </div>
  );
};
export default Agregar;
