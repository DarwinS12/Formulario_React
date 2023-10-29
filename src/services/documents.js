import axios from "axios";

export const ulpoadDocuments = async (x) => {
  const response = await axios.post("https://localhost:7267/api/Archivos", x);
  return response;
};
