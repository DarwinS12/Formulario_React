import { updateProducts } from "../services/products";
import { useHandleAlert } from "./useHandleAlert";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";

export function useUpdateProduct() {
  const { handleAlert } = useHandleAlert();

  const updateTheProducts = async ({ idProducto, data }) => {
    try {
      const response = await updateProducts(idProducto, data);
      handleAlert("Se ha actualizado el producto.");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: updateTheProducts,

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["productsById"],
      });
    },
  });

  return { updateTheProducts, mutate, isError, isLoading };
}
