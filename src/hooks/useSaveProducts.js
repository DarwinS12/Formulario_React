import { useMutation, useQueryClient } from "react-query";
import { saveProduct } from "../services/products";
import { useHandleAlert } from "./useHandleAlert";

export function useSaveProducts() {
  const { handleAlert } = useHandleAlert();

  const saveTheProducts = async (data) => {
    try {
      const response = await saveProduct(data);
      handleAlert("Se ha guardado con éxito.");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: saveTheProducts,

    onSuccess: () => {
      //Actualizar el caché de react-query manualmente
      queryClient.setQueriesData(["comments"], (oldData) => {
        if (oldData == null) return [newComment];
        return [...oldData, newComment];
      });
    },

    onSettled: () => {
      //Cuando ya se termino todo, se podria hacer la invalidacion para asegurarse que se esta obteniendo la informacion de la base de datos
      // visualemente el usuario ha visto que todo se ha cargado pero luego se hace el refetching sin que se de cuenta para asegurarse de que todo ha ido bien
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  return { mutate, isLoading, isError };
}
