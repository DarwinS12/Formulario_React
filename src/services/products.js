import axios from "axios";

export const allProducts = async () => {
  const response = await axios.get("http://localhost:5282/api/Producto/Lista");

  return response;
};

export const saveProduct = async (data) => {
  const response = await axios.post(
    "http://localhost:5282/api/Producto/Guardar",
    data
  );
  return response;
};

export const updateProducts = async (idProducto, data) => {
  const response = await axios.put(
    `http://localhost:5282/api/Producto/Editar/${idProducto}`,
    data
  );

  return response;
};

export const productById = async (idProducto) => {
  const response = await axios.get(
    `http://localhost:5282/api/Producto/Obtener/${idProducto}`
  );

  return response;
};

export const deleteProduct = async (idProducto) => {
  const response = await axios.delete(
    `http://localhost:5282/api/Producto/Eliminar/${idProducto}`
  );
  return response;
};
