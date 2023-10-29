import { FcAssistant } from "react-icons/fc";
import { useSEO } from "../hooks/useSeo";
const Home = () => {
  useSEO({
    title: "Productos",
    description: "Página para realizar acciones",
  });
  return (
    <>
      <h1 className="icon">
        <FcAssistant />
      </h1>
      <h1 className="title-pages">
        Aquí podrás realizar las acciones que desees hacer
      </h1>
    </>
  );
};

export default Home;
