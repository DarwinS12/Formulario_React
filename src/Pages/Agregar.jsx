import { FcAddDatabase } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSaveProducts } from "../hooks/useSaveProducts";
import { useSEO } from "../hooks/useSeo";

const Agregar = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, isLoading, isError } = useSaveProducts();

  useSEO({
    title: "Agregar",
    description: "Agregar productos",
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <h1 className="title-pages">
        Agrega un nuevo Producto <FcAddDatabase />{" "}
      </h1>
      {isError ? <h1>Ha ocurrido un error</h1> : ""}
      <form className="form-products" onSubmit={handleSubmit(onSubmit)}>
        <select className="select-form" {...register("idCategoria")}>
          <option value="" disabled selected hidden>
            Selecciona una Categoría
          </option>
          <option value="1">1: Tecnología</option>
          <option value="2">2: ElectroHogar</option>
          <option value="3">3: Accesorios</option>
        </select>
        <input
          className="input-form"
          placeholder="Código de barras"
          {...register("codigoBarra")}
        />
        <input
          className="input-form"
          placeholder="Descripción"
          {...register("descripcion")}
        />
        <input
          className="input-form"
          placeholder="Marca"
          {...register("marca")}
        />
        <input
          className="input-form"
          placeholder="Precio"
          {...register("precio")}
        />
        <button className="btn-form" type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <Link className="LinkbuttonR" to={"/Home"}>
        Regresar
      </Link>
    </>
  );
};
export default Agregar;
