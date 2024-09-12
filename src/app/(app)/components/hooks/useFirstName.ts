import { useEffect, useRef, useState } from "react";

export const useFirstName = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = firstName === "";
      return;
    }
  
    if (firstName === "") {
      setFirstNameError("Por favor ingrese un nombre");
      return;
    }
  
    if (firstName.length < 2) {
      setFirstNameError("El nombre debe tener al menos 2 caracteres");
      return;
    }
  
    if (!/^[A-Z]/.test(firstName)) {
      setFirstNameError("El nombre debe comenzar con mayúscula");
      return;
    }
  
    if (/\d/.test(firstName)) {
      setFirstNameError("El nombre no debe contener números");
      return;
    }
  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(firstName)) {
      setFirstNameError("El nombre contiene caracteres especiales no permitidos");
      return;
    }
  
    setFirstNameError(null);
  }, [firstName]);
  

  return {
    firstName,
    firstNameError,
    setFirstName,
  };
};