import { useEffect, useRef, useState } from "react";

export const useEmail = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const isFirstInput = useRef(true);
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = email === "";
        return;
      }
    
      if (email === "") {
        setEmailError("Por favor ingrese un email");
        return;
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Por favor ingrese un email válido");
        return;
      }
    
      const dominiosNoPermitidos = ["tempmail.com", "throwawaymail.com"];
      const dominio = email.split("@")[1];
      if (dominiosNoPermitidos.includes(dominio)) {
        setEmailError("Por favor use un email de un dominio válido");
        return;
      }
    
      setEmailError(null);
    }, [email]);
    
  
    return {
      email,
      emailError,
      setEmail,
    };
  };
  