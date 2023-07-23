import { useState } from "react";

const UseFormLogin = (initalForm = {}) => {
  const [formState, setFormState] = useState(initalForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initalForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default UseFormLogin;
