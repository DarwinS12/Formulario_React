import { deleteProduct } from "../services/products";
import { useHandleAlert } from "./useHandleAlert";

export function useDeleteProduct() {
  const { handleAlert } = useHandleAlert();

  const deleteTheProducts = async (idProducto) => {
    try {
      const response = await deleteProduct(idProducto);
      handleAlert("Se ha borrado el producto.");
      return response;
    } catch (error) {
      handleAlert("Ha ocurrido un error.");
      console.error(error);
    }
  };
  return { deleteTheProducts };
}
