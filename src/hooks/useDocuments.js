import { ulpoadDocuments } from "../services/documents";
import { useHandleAlert } from "./useHandleAlert";

export function useDocuments() {
  const { handleAlert } = useHandleAlert();

  const ulpoadTheDocuments = async (x) => {
    try {
      const response = ulpoadDocuments(x);
      handleAlert("Se ha enviado con éxito.");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return { ulpoadTheDocuments };
}
