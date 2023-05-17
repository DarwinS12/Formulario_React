import axios from "axios";
import { useForm } from "react-hook-form";

const Usuarios = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://peticiones.online/api/users",
        data
      );
      console.log(response), alert("Se ha guardado con éxito");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Agrega un nuevo usuario</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="First Name"
          {...register("first_name")}
        />
        <input
          className="input"
          placeholder="Last Name"
          {...register("last_name")}
        />
        <input className="input" placeholder="email" {...register("email")} />
        <input
          className="input"
          placeholder="Username"
          {...register("username")}
        />
        <input
          className="input"
          placeholder="Password"
          {...register("password")}
        />
        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Usuarios;
