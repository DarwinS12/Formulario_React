import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcDataBackup } from "react-icons/fc";
import { useParams } from "react-router-dom";

const Actualizar = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [producto, setproducto] = useState(null);

  const { idProducto } = useParams();

  useEffect(() => {
    loadproducto();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5282/api/Producto/Editar/${idProducto}`,
        data
      );
      console.log(response.data.response), alert("Se ha actualizado con éxito");
    } catch (error) {
      console.error(error);
    }
  };

  const loadproducto = async () => {
    const result = await axios.get(
      `http://localhost:5282/api/Producto/Obtener/${idProducto}`
    );
    setproducto(result.data.response);
  };

  useEffect(() => {
    if (producto) {
      setValue("ID del Producto", producto.idProducto);
      setValue("Código de barras", producto.codigoBarra);
      setValue("Descripción", producto.descripcion);
      setValue("Marca", producto.marca);
    }
  }, [producto, setValue]);

  return (
    <div>
      <h1>
        Actualiza un Producto <FcDataBackup />{" "}
      </h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="ID del Producto"
          {...register("ID del Producto")}
        />
        <input
          className="input"
          placeholder="Código de barras"
          {...register("Código de barras")}
        />
        <input
          className="input"
          placeholder="Descripción"
          {...register("Descripción")}
        />
        <input className="input" placeholder="Marca" {...register("Marca")} />
        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Actualizar;
