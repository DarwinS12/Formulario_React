import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [savedValue, setSavedValue] = useState(() => {
    //el estado inicial esta dado por el localStorage
    try {
      const item = window.localStorage.getItem(key); //se trate el item que esta guardado en key
      return item ? JSON.parse(item) : initialValue; //en el caso de tener item devolverlo sino devolver el valor incial que se ha pasado como parametro
      //json.parse toma una cadena JSON y la transforma en un objeto de JavaScript
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setSavedValue(value);
      window.localStorage.setItem(key, JSON.stringify(value)); // set porque se quiere guardar, se guarda la key text  el valor nuevo. en el locastorage solo se pueden guardar del tipo string por eso el stringify
    } catch (error) {
      console.error(error);
    }
  };

  return [savedValue, setValue];
};
