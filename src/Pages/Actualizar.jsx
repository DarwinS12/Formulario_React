import axios from "axios";
import { useEffect, useState } from "react";
import { FcDataBackup } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "../Components/Form";

const Actualizar = () => {
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

  return (
    <div>
      <h1>
        Actualiza un Producto <FcDataBackup />{" "}
      </h1>
      {producto && (
        <Form
          initialValues={{
            idProducto: producto.idProducto,
            idCategoria: producto.idCategoria,
            codigoBarra: producto.codigoBarra,
            descripcion: producto.descripcion,
            marca: producto.marca,
            precio: producto.precio,
          }}
          onSubmit={onSubmit}
        />
      )}
      <Link className="LinkbuttonR" to={"/Obtener/"}>Regresar</Link>
    </div>
  );
};
export default Actualizar;
