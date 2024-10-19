"use client";

import AuthForm from "@/app/(app)/components/Contenedores/Login-Register/LoginRegister";
import { useEffect, useState } from "react";

function IconAuthTrue() {
  return <p>Hola</p>;
}

export default function AuthIconSelect() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const getAuth = () => {
      const value = localStorage.getItem("isAuth");
      return value ? JSON.parse(value) : false;
    };

    setIsAuthenticated(getAuth());
    setIsLoading(false); 
  }, []);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  
  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return isAuthenticated ? <IconAuthTrue /> : <AuthForm />;
}
