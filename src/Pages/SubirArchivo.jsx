import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { FaFileUpload, FaTrashAlt } from "react-icons/fa";
import { LuFileCheck } from "react-icons/lu";
import axios from "axios";

const SubirArchivo = () => {
  const [archivos, setArchivos] = useState(null);
  const [image, setImage] = useState(false);
  const [fileName, setFileName] = useState("No seleccionado");

  const { enqueueSnackbar } = useSnackbar();

  const handleAlert = () => {
    enqueueSnackbar("Se ha enviado con éxito", {
      variant: "success",
    });
  };

  const getFiles = (e) => {
    setArchivos(e);
    setImage(true);
    setFileName(e[0].name);
  };

  const sendFiles = async () => {
    const x = new FormData();

    for (let index = 0; index < archivos.length; index++) {
      x.append("files", archivos[index]);
    }

    await axios
      .post("https://localhost:7267/api/Archivos", x)
      .then((response) => {
        console.log(response.data);
        handleAlert();
      })
      .catch((error) => {
        console.log(error);
      });

    setImage(false);
  };

  return (
    <div>
      <h1>Sube aquí tu hoja de vida</h1>
      <div className="SubirArchivo">
        {image ? (
          <>
            <LuFileCheck size={50} />
            <p className="p-subir-archivo">{fileName}</p>
            <FaTrashAlt size={20} onClick={() => setImage(false)} />
          </>
        ) : (
          <>
            <FaFileUpload
              onClick={() => document.querySelector(".files").click()}
              size={50}
            />
            <p className="p-subir-archivo">Sube aquí tu hoja de vida</p>
          </>
        )}
        <input
          type="file"
          name="files"
          className="files"
          multiple
          hidden
          onChange={(e) => getFiles(e.target.files)}
        />
        <button
          className="btn-send-file"
          disabled={image === false}
          onClick={() => sendFiles()}
        >
          Enviar documentos
        </button>
      </div>
    </div>
  );
};

export default SubirArchivo;
