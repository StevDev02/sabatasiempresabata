"use client";

import FWButtonComponent from "@/components/Button/FWButton";
import { useEffect, useState, Suspense } from "react";
import useStoreAuth from "../(app)/components/Contenedores/Login-Register/store/useStoreAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { usePassword } from "../(app)/components/hooks/usePassword";

function ResetPasswordContent() {
  const [emailError, setEmailError] = useState<string | null>(null);

  const { resetPasswordEmail, isResetPasswordEmail, isLoading, error } =
    useStoreAuth();

  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    password,
    setShowPassword,
    setPassword,
    showPassword,
    passwordInputRef,
  } = usePassword();

  const {
    password: passwordConfirm,
    setShowPassword: setShowPasswordConfirm,
    setPassword: setPasswordConfirm,
    showPassword: showPasswordConfirm,
    passwordInputRef: passwordConfirmInputRef,
  } = usePassword();

  const togglePasswordVisibility =
    (isConfirm: boolean) => (e: React.MouseEvent) => {
      e.preventDefault();
      if (isConfirm) {
        setShowPasswordConfirm(!showPasswordConfirm);
        passwordConfirmInputRef.current?.focus();
      } else {
        setShowPassword(!showPassword);
        passwordInputRef.current?.focus();
      }
    };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setEmailError("Las contraseñas no coinciden");
      return;
    }
    resetPasswordEmail(token as string, password);
  };

  useEffect(() => {
    if (isResetPasswordEmail) {
      router.push("/");
      toast.success(isResetPasswordEmail);
    }
    if (error === "El enlace para restablecer la contraseña ha expirado") {
      setEmailError(error);
    }
    if (
      error === "La nueva contraseña no puede ser igual a la contraseña actual"
    ) {
      setEmailError(error);
    }
    if (error === "El enlace para restablecer la contraseña es inválido") {
      setEmailError(error);
    }
    if (
      error ===
      "No se encontró ninguna cuenta asociada a este correo electrónico"
    ) {
      setEmailError(error);
    }

    if (
      error !== "El enlace para restablecer la contraseña ha expirado" &&
      error !==
        "La nueva contraseña no puede ser igual a la contraseña actual" &&
      error !== "El enlace para restablecer la contraseña es inválido" &&
      error !==
        "No se encontró ninguna cuenta asociada a este correo electrónico"
    ) {
      setEmailError(error);
    }
  }, [error, isResetPasswordEmail]);

  return (
    <main className="flex gap-10 items-center mt-24 px-[25px] w-full h-[100dvh]">
      <section className="w-[1042px] h-[597px] ">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
        />
      </section>
      <div className="w-full grid translate-y-[48px]">
        <h2 className="text-4xl pb-[90px] leading-[120%] font-bold">
          Reset Password
        </h2>
        {isLoading ? (
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
        ) : (
          <form
            className="w-[742px] -translate-y-[54px] p-4 h-[527px]"
            onSubmit={handleResetPassword}
          >
            <div>
              <div className="grid gap-4">
                <div className="relative w-[384px]">
                  <input
                    ref={passwordInputRef}
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-[384px] focus:outline-none h-[44px] px-3 pr-10 border bg-transparent rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onMouseDown={togglePasswordVisibility(false)}
                    className="absolute top-3 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="relative w-[384px]">
                  <input
                    ref={passwordConfirmInputRef}
                    autoComplete="off"
                    type={showPasswordConfirm ? "text" : "password"}
                    name="passwordConfirm"
                    placeholder="Password Confirm"
                    className="w-[384px] focus:outline-none h-[44px] px-3 pr-10 border bg-transparent rounded"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}

                  />
                  <button
                    type="button"
                    onMouseDown={togglePasswordVisibility(true)}
                    className="absolute top-3 right-0 pr-3 flex items-center"
                  >
                    {showPasswordConfirm ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-red-500 text-xs pt-2 pl-2">{emailError}</p>
              <button className={`mt-8`}>
                <FWButtonComponent
                  width={390}
                  bgOne={"#f6f6f6"}
                  bgTwo={"#232323"}
                  textOne={"#232323"}
                  textTwo={"#f6f6f6"}
                  borderColor={"#232323"}
                  textContent="reset password"
                />
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

// Componente envoltorio para manejar el token
function ResetPasswordWrapper() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <p>Cargando...</p>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}

export default function ResetPassword() {
  return <ResetPasswordWrapper />;
}
