import FWButtonComponent from "@/components/Button/FWButton";
import { useState, useEffect } from "react";
import useStoreAuth from "../../Contenedores/Login-Register/store/useStoreAuth";

interface CronometroYResendCodeProps {
  isSubmitted: boolean;
  onResend: () => void;
  setResendCodeInput: React.Dispatch<React.SetStateAction<boolean>>;
  resendCodeInput: boolean;
  setTextSuccess: (text: string) => void;
}

export default function CronometroYResendCode({
  isSubmitted,
  setResendCodeInput,
  resendCodeInput,
  setTextSuccess,
}: CronometroYResendCodeProps) {
  const [segundos, setSegundos] = useState(65);
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true);
  const [textoMensaje, setTextoMensaje] = useState(
    "El código de verificación expirará en:"
  );

  const [errorResendCode, setErrorResendCode] = useState<string | null>(null);

  const { resendCode, isResendCode, isLoading, error } = useStoreAuth();

  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (isSubmitted) {
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => {
          if (prevSegundos <= 1) {
            clearInterval(intervalo);
            setBotonDeshabilitado(false);
            setTextoMensaje("Reenviar código de verificación");
            return 0;
          }
          return prevSegundos - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [isSubmitted]);

  const formatoTiempo = (tiempo: number) => {
    const minutos = Math.floor(tiempo / 60);
    const segundosRestantes = tiempo % 60;
    return `${minutos.toString().padStart(2, "0")}:${segundosRestantes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendCode = () => {
    if (resendCodeInput) {
      setResendCodeInput(false);
    }
  };

  const handleResendCodeEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    const email = formData.email as string;
    resendCode(email);
  };

  useEffect(() => {
    if (isResendCode === "Se ha enviado un email de verificación a su correo") {
      setErrorResendCode('Se ha enviado un email de verificación a su correo');
      setResendCodeInput(true);
      setTextSuccess('Se ha enviado un email de verificación a su correo');
    } 
    if (
      error === "Reenvío de código de verificación fallido: email ya verificado"
    ) {
      setErrorResendCode(
        "Reenvío de código de verificación fallido: email ya verificado"
      );
      setResendCodeInput(false);
    }
    if (error === "El código de verificación es inválido") {
      setErrorResendCode("Usuario no encontrado, vuelva a registrarte");
      setResendCodeInput(false);
    }
    if (error) <p>{error}</p>;
  }, [error, isResendCode]);

  if (isLoading)
    return (
      <h5 className="mt-16 ml-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeDasharray="16"
            strokeDashoffset="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3c4.97 0 9 4.03 9 9"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="16;0"
            />
            <animateTransform
              attributeName="transform"
              dur="1.5s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      </h5>
    );

  return (
    <>
      {resendCodeInput ? (
        <>
          <div className="mt-14">
            <p className="text-center">
              {textoMensaje}
              {botonDeshabilitado && <br />}
              {botonDeshabilitado && <span>{formatoTiempo(segundos)}</span>}
            </p>
          </div>
          <button
            className={`mt-4 ${
              botonDeshabilitado ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={botonDeshabilitado}
            onClick={handleResendCode}
          >
            <FWButtonComponent
              width={390}
              bgOne={botonDeshabilitado ? "#cccccc" : "#f6f6f6"}
              bgTwo={botonDeshabilitado ? "#999999" : "#232323"}
              textOne={botonDeshabilitado ? "#666666" : "#232323"}
              textTwo={botonDeshabilitado ? "#cccccc" : "#f6f6f6"}
              borderColor={botonDeshabilitado ? "#999999" : "#000"}
              textContent="Resend code"
            />
          </button>
        </>
      ) : (
        <>
          <form onSubmit={handleResendCodeEmail}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-[384px] focus:outline-none h-[44px] px-3 border  bg-transparent rounded`}
            />
            <p className="text-red-500 text-center mt-4 text-sm">
              {errorResendCode}
            </p>
            <button className={`mt-12`}>
              <FWButtonComponent
                width={390}
                bgOne={"#f6f6f6"}
                bgTwo={"#232323"}
                textOne={"#232323"}
                textTwo={"#f6f6f6"}
                borderColor={"#232323"}
                textContent="return resend code"
              />
            </button>
          </form>
        </>
      )}
    </>
  );
}
