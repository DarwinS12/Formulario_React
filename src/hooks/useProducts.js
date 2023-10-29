import { allProducts, productById } from "../services/products";
import { useQuery } from "react-query";

export function useProducts(idProducto) {
  const getAllProducts = async () => {
    try {
      const response = await allProducts();
      return response.data.response;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: productos, isLoading } = useQuery(["products"], getAllProducts);

  const getProductById = async () => {
    try {
      const response = await productById(idProducto);
      return response.data.response;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: productosById } = useQuery(
    ["productsById", idProducto],
    getProductById,
    {
      staleTime: Infinity,
    }
  );

  return {
    productos,
    isLoading,
    productosById,
  };
}
