"use client";

import FWButtonComponent from "@/components/Button/FWButton";
import {
  EyesPasswordClose,
  EyesPasswordOpen,
} from "../Accesories/EyesPassword";
import { useEmail } from "../hooks/useEmail";
import { useFirstName } from "../hooks/useFirstName";
import { useLastName } from "../hooks/useLastName";
import { usePassword } from "../hooks/usePassword";
import InputCodeVerify from "../Accesories/VerifiyCode/InputCodeVerify";
import useStoreAuth from "../Contenedores/Login-Register/store/useStoreAuth";
import { useEffect, useRef, useState } from "react";
export default function RegisterForm({
  toggleVisibility,
}: {
  toggleVisibility: () => void;
}) {
  const {
    password,
    passwordError,
    setPassword,
    showPassword,
    setShowPassword,
    passwordInputRef,
    isRegister,
    setPasswordError,
    setIsRegister,
  } = usePassword();
  const { lastName, lastNameError, setLastName, setLastNameError } = useLastName();
  const { email, emailError, setEmail, setEmailError } = useEmail();
  const { firstName, firstNameError, setFirstName, setFirstNameError } = useFirstName();
  const isFirtsName = useRef<HTMLInputElement>(null);
  const [emailChecked, setEmailChecked] = useState(false);
  const [textSuccess, setTextSuccess] = useState<string | null>(null)

  const {
    checkEmail,
    isEmailCheck,
    isLoading,
    register,
    error
  } = useStoreAuth();

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    passwordInputRef.current?.focus();
  };

  const verifiedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  const handleAuthRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !firstName || !lastName || !password) return;
    const success = await register(email, password, firstName, lastName);
    if (success) {
      setIsRegister(true);
      setTextSuccess('Se ha enviado un email de verificación a su correo')
    }
  };

  const handleCheckEmail = () => {
    if (!emailChecked && email.length > 10) {
      checkEmail(email);
      setEmailChecked(true);
      return
    }
  };

  useEffect(() => {
    if (isEmailCheck === "El email está disponible") {
      setEmailError("El email se encuentra disponible");
      setPasswordError(null)
      setFirstNameError(null)
      setLastNameError(null)
      return;
    }
    if (isEmailCheck === "El email ya está registrado") {
      setEmailError("Ya existe una cuenta asociada a este correo");
      setPasswordError(null)
      setFirstNameError(null)
      setLastNameError(null)
      return;
    }
    if (error === "Ya existe una cuenta asociada a este correo") {
      setEmailError("Ya existe una cuenta asociada a este correo");
      setPasswordError(null)
      setFirstNameError(null)
      setLastNameError(null)
      return;
    }
    if (error) <p>{error}</p>
  }, [isEmailCheck, setEmailError, error, setPasswordError, setFirstNameError, setLastNameError]);

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
      {isRegister ? (
        <InputCodeVerify setTextSuccess={setTextSuccess} textSuccess={textSuccess} toggleVisibility={toggleVisibility} />
      ) : (
        <form className="grid gap-4" onSubmit={handleAuthRegister}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-[384px] focus:outline-none h-[44px] px-3 border ${
                emailError
                  ? "border-red-500 placeholder:text-red-300"
                  : "border-gray-300"
              } bg-transparent rounded`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-xs pt-2 pl-2">{emailError}</p>
            )}
          </div>
          <div>
            <input
              ref={isFirtsName}
              onClick={handleCheckEmail}
              type="text"
              placeholder="First name"
              className={`w-[384px] focus:outline-none h-[44px] px-3 border ${
                firstNameError
                  ? "border-red-500 placeholder:text-red-300"
                  : "border-gray-300"
              } bg-transparent rounded`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && (
              <p className="text-red-500 text-xs pt-2 pl-2">{firstNameError}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last name"
              className={`w-[384px] focus:outline-none h-[44px] px-3 border ${
                lastNameError
                  ? "border-red-500 placeholder:text-red-300"
                  : "border-gray-300"
              } bg-transparent rounded`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && (
              <p className="text-red-500 text-xs pt-2 pl-2">{lastNameError}</p>
            )}
          </div>

          <div className="relative">
            <input
              ref={passwordInputRef}
              autoComplete="off"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-[384px] focus:outline-none bg-transparent h-[44px] px-3 pr-10 border ${
                passwordError
                  ? "border-red-500 placeholder:text-red-300"
                  : "border-gray-300"
              } rounded`}
              value={password}
              onChange={verifiedPassword}
            />
            {passwordError && (
              <p className="text-red-500 text-xs pt-2 pl-2">{passwordError}</p>
            )}
            <button
              type="button"
              onMouseDown={togglePasswordVisibility}
              className="absolute top-3 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyesPasswordOpen passwordError={passwordError} />
              ) : (
                <EyesPasswordClose passwordError={passwordError} />
              )}
            </button>
          </div>

          <button
            className="mt-8"
            style={{
              opacity: !firstName || !lastName || !email || !password ? 0.5 : 1,
              cursor:
                !firstName || !lastName || !email || !password
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <FWButtonComponent
              width={380}
              borderColor="#232323"
              textContent="Register"
              bgOne="transparent"
              bgTwo="#232323"
              textOne="#232323"
              textTwo="#f6f6f6"
            />
          </button>
        </form>
      )}
    </>
  );
}
