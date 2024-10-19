"use client";

import { useState, useRef, useEffect } from "react";
import CronometroYResendCode from "./Cronometro";
import useStoreAuth from "../../Contenedores/Login-Register/store/useStoreAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function InputCodeVerify({
  toggleVisibility,
  textSuccess,
  setTextSuccess,
}: {
  toggleVisibility: () => void;
  textSuccess: string | null;
  setTextSuccess: (text: string | null) => void;
}) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [errorVerifyCode, setErrorVerifyCode] = useState<string | null>(null);
  const { verifyCode, isCodeVerify, isLoading, error } = useStoreAuth();
  const [resendCodeInput, setResendCodeInput] = useState(true);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const router = useRouter();

  const handleSubmit = async (completeCode: string) => {
    await verifyCode(completeCode);
    await inputRefs.current[0]?.focus();
  };

  const checkAndSubmit = (newCode: string[]) => {
    if (newCode.every((digit) => digit !== "")) {
      handleSubmit(newCode.join(""));
    }
    setResendCodeInput(true);
  };

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      checkAndSubmit(newCode);
    } else if (value.length === 6 && index === 0) {
      const newCode = value.split("");
      setCode(newCode);
      inputRefs.current[5]?.focus();
      checkAndSubmit(newCode);
    }
    setResendCodeInput(true);
  };

  useEffect(() => {
    if (
      isCodeVerify === "Su correo electrónico ha sido verificado correctamente"
    ) {
      toggleVisibility();
      router.push("/account");
      toast.success("Su correo electrónico ha sido verificado correctamente");
    }
  }, [isCodeVerify]);

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
    setResendCodeInput(true);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (pastedData.length === 6) {
      const newCode = pastedData.split("");
      setCode(newCode);
      inputRefs.current[5]?.focus();
      checkAndSubmit(newCode);
    }
    setResendCodeInput(true);
  };

  useEffect(() => {
    if (error === "El código de verificación ha expirado") {
      setErrorVerifyCode("El código de verificación ha expirado");
      setTextSuccess(null);
      setCode(["", "", "", "", "", ""]);
      setResendCodeInput(true);
      return;
    }
    if (error === "El código de verificación es inválido") {
      setErrorVerifyCode("El código de verificación es incorrecto");
      setTextSuccess(null);
      setCode(["", "", "", "", "", ""]);
      setResendCodeInput(true);
      return;
    }
    if (error === "Este correo electrónico ya ha sido verificado") {
      setErrorVerifyCode("Este correo electrónico ya ha sido verificado");
      setTextSuccess(null);
      setCode(["", "", "", "", "", ""]);
      setResendCodeInput(true);
      return;
    }
    if (
      error ===
      "Demasiados intentos de verificación. Espere antes de intentar nuevamente"
    ) {
      setErrorVerifyCode(
        "Demasiados intentos de verificación. Espere antes de intentar nuevamente"
      );
      setTextSuccess(null);
      setCode(["", "", "", "", "", ""]);
      setResendCodeInput(true);
      return;
    }
    if (error) <p>{error}</p>;
  }, [error]);

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
      <p className="text-center mb-4 text-sm">{textSuccess}</p>
      {resendCodeInput ? (
        <>
          <form className="flex gap-5">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                className="w-12 bg-transparent border-[#d1d5db] text-center focus:outline-none h-[44px] border"
              />
            ))}
          </form>
          <p className="text-red-500 text-center mt-4 text-sm">
            {errorVerifyCode}
          </p>
          <CronometroYResendCode
            setTextSuccess={setTextSuccess}
            resendCodeInput={resendCodeInput}
            setResendCodeInput={setResendCodeInput}
            isSubmitted={isSubmitted}
            onResend={() => setIsSubmitted(true)}
          />
        </>
      ) : (
        <>
          <CronometroYResendCode
            setTextSuccess={setTextSuccess}
            resendCodeInput={resendCodeInput}
            setResendCodeInput={setResendCodeInput}
            isSubmitted={isSubmitted}
            onResend={() => setIsSubmitted(true)}
          />
        </>
      )}
    </>
  );
}
