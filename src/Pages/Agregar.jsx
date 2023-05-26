import axios from "axios";
import { useForm } from "react-hook-form";
import {FcAddDatabase} from "react-icons/fc"

const Agregar = () => {
  const { register, handleSubmit } = useForm();

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
      <h1>Agrega un nuevo Producto <FcAddDatabase/> </h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="ID del Producto"
          {...register("idProducto")}
        />
        <input
          className="input"
          placeholder="Código de barras"
          {...register("codigoBarra")}
        />
        <input 
        className="input" 
        placeholder="Descripción" 
        {...register("descripcion")} 
        />
        <input
          className="input"
          placeholder="Marca"
          {...register("marca")}
        />
        <input
          className="input"
          placeholder="Precio"
          {...register("precio")}
        />
        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Agregar;
