import { useEffect, useRef, useState } from "react";

export const usePassword = () => {
    const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const isFirstInput = useRef(true);
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = password === "";
      return;
    }
  
    if (password === "") {
      setPasswordError("La contraseña no puede estar vacía");
      return;
    }
  
    if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
  
    const rules = [
      /[A-Z]/.test(password) || "La contraseña debe contener al menos una letra mayúscula",
      /[a-z]/.test(password) || "La contraseña debe contener al menos una letra minúscula",
      /\d/.test(password) || "La contraseña debe contener al menos un número",
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) || "La contraseña debe contener al menos un carácter especial",
    ];
  
    for (const rule of rules) {
      if (typeof rule === 'string') {
        setPasswordError(rule);
        return;
      }
    }
  
    setPasswordError(null);
  }, [password]);
  


  return {
    password,
    setPassword,
    passwordError,
    setPasswordError,
    showPassword,
    setShowPassword,
    passwordInputRef
  }
}