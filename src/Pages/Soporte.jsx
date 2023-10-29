import React, { useState } from "react";
import { FcSupport } from "react-icons/fc";
import { useHandleAlert } from "../hooks/useHandleAlert";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSEO } from "../hooks/useSeo";

const Soporte = () => {
  const [textArea, setTextArea] = useLocalStorage("textArea", "");

  const [button, setButton] = useState(false);

  const { handleAlert } = useHandleAlert();

  useSEO({
    title: "Soporte",
    description: "Soporte de problemas",
  });

  const handleSubmit = () => {
    handleAlert("Se ha enviado con éxito.");
    setButton(true);
  };

  return (
    <>
      <h1 className="title-pages">
        Soporte <FcSupport />
      </h1>
      <textarea
        className="TextArea"
        autoFocus
        placeholder="¿Cómo podemos ayudarte?"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="btn-support" disabled={button} onClick={handleSubmit}>
        Enviar
      </button>

      {button ? (
        <buton className="btn-support ask">¿Quieres enviar otro mensaje?</buton>
      ) : (
        ""
      )}
    </>
  );
};

export default Soporte;
