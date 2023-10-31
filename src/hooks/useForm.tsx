import { useState } from "react";

export const useForm = <T extends Record<string, unknown>>( formFields: T ) => {

  const [state, setState] = useState(formFields);

  const handleChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return {
    formulario: state,
    handleChange,
  };
};
