import { useEffect, useRef, useState } from "react";

export const useLastName = () => {
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = lastName === "";
      return;
    }
  
    if (lastName === "") {
      setLastNameError("Por favor ingrese un apellido");
      return;
    }
  
    if (lastName.length < 2) {
      setLastNameError("El apellido debe tener al menos 2 caracteres");
      return;
    }
  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(lastName)) {
      setLastNameError("El apellido contiene caracteres no válidos");
      return;
    }
  
    setLastNameError(null);
  }, [lastName]);
  

  return {
    lastName,
    lastNameError,
    setLastName,
    setLastNameError
  };
};