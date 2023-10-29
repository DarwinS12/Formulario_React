import { useEffect } from "react";
import { FcDatabase } from "react-icons/fc";
import Aos from "aos";
import "aos/dist/aos.css";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../Components/Product";
import { useSEO } from "../hooks/useSeo";

const Obtener = () => {
  const { productos, isLoading } = useProducts();
  useSEO({
    title: "Listado",
    description: "Listado de todos los productos",
  });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <h1 className="title-pages">
        Aquí tienes una lista de algunos de los productos <FcDatabase />
      </h1>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          {Array.isArray(productos) &&
            productos.map((producto) => (
              <Product key={producto.idProducto} producto={producto} />
            ))}
        </>
      )}
    </>
  );
};
export default Obtener;
