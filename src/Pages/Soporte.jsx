import React, { useState } from "react";
import { FcSupport } from "react-icons/fc";
import LocalStorage from "../Components/LocalStorage";

const Soporte = () => {
  const [textArea, setTextArea] = LocalStorage("textArea", "");

  const [button, setButton] = useState(false);

  const handleSubmit = () => {
    alert("Enviado con éxito");
    setButton(true);
  };

  return (
    <div>
      <h1>
        Soporte <FcSupport />
      </h1>
      <textarea
        className="TextArea"
        autoFocus
        placeholder="¿Cómo podemos ayudarte?"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="button" disabled={button} onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default Soporte;
