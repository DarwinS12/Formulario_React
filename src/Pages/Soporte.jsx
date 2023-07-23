import React, { useState } from "react";
import { FcSupport } from "react-icons/fc";
import LocalStorage from "../Components/LocalStorage";
import { useSnackbar } from "notistack";


const Soporte = () => {
  const [textArea, setTextArea] = LocalStorage("textArea", "");

  const [button, setButton] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleAlert = () => {
    enqueueSnackbar("Se ha enviado con éxito", {
      variant: "success",
    });
  };

  const handleSubmit = () => {
    handleAlert()
    setButton(true);
  };

  return (
    <div>
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
    </div>
  );
};

export default Soporte;
