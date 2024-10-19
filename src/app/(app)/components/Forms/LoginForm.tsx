import FWButtonComponent from "@/components/Button/FWButton";
import {
  EyesPasswordClose,
  EyesPasswordOpen,
} from "../Accesories/EyesPassword";
import { useEmail } from "../hooks/useEmail";
import { usePassword } from "../hooks/usePassword";
import useStoreAuth from "../Contenedores/Login-Register/store/useStoreAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import ResetPassword from "../Accesories/resetPassword";
import { signIn } from "next-auth/react";

axios.defaults.withCredentials = true;

export default function LoginForm({
  toggleVisibility,
}: {
  toggleVisibility: () => void;
}) {
  const {
    password,
    setShowPassword,
    setPassword,
    passwordError,
    showPassword,
    passwordInputRef,
    setPasswordError,
  } = usePassword();

  const { email, emailError, setEmail, setEmailError } = useEmail();

  const { Login, isLoading, error } = useStoreAuth();

  const [isResetPassword, setIsResetPassword] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    passwordInputRef.current?.focus();
  };

  const verifiedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  const handleAuthLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    const success = await Login(email, password);
    if (success) {
      console.log("success login");
      toggleVisibility();
      toast.success("Inicio de sesión exitoso");
      router.push("/account");
    }
  };


  useEffect(() => {
    if (error === "No existe una cuenta asociada a este correo") {
      setEmailError("No existe una cuenta asociada a este correo");
      setPasswordError(null);
      return;
    }
    if (error === "Por favor, verifica tu correo antes de iniciar sesión") {
      setEmailError("Por favor, verifica tu correo antes de iniciar sesión");
      setPasswordError(null);
      return;
    }
    if (error === "La contraseña ingresada es incorrecta") {
      setPasswordError("La contraseña ingresada es incorrecta");
      setEmailError(null);
      return;
    }

    if (error) <p>{error}</p>;
  }, [error, setEmailError, setPasswordError]);

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
      {isResetPassword ? (
        <ResetPassword toggleVisibility={toggleVisibility} />
      ) : (
        <>
          <form className="grid gap-4" onSubmit={handleAuthLogin}>
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
                <p className="text-red-500 text-xs pt-2 pl-2">
                  {passwordError}
                </p>
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

            <button className="translate-y-20"
              type="submit"
              disabled={!email || !password}
              style={{
                opacity: !email || !password ? 0.5 : 1,
                cursor: !email || !password ? "not-allowed" : "pointer",
              }}
            >
              <FWButtonComponent
                width={380}
                borderColor="#232323"
                textContent="Iniciar sesión"
                bgOne="transparent"
                bgTwo="#232323"
                textOne="#232323"
                textTwo="#f6f6f6"
              />
            </button>
          </form>

          <div className="text-right -translate-y-12">
            <button
              className="text-sm transition-all ease-in duration-300 text-gray-600 hover:underline"
              onClick={() => setIsResetPassword(true)}
            >
              Forgot password?
            </button>
          </div>
        </>
      )}
    </>
  );
}

