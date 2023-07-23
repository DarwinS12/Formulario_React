import { useForm } from "react-hook-form";

const Form = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues: initialValues });

  return (
    <form className="form-products" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input-form"
        placeholder="ID del Producto"
        {...register("idProducto")}
      />
      <select
      className="select-form"
      {...register("idCategoria")}
      >
         <option value="" disabled selected hidden>Selecciona una Categoría</option>
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
      <input className="input-form" placeholder="Marca" {...register("marca")} />
      <input className="input-form" placeholder="Precio" {...register("precio")} />
      <button className="btn-form" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
