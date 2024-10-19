import FWButtonComponent from "@/components/Button/FWButton";
import { useEffect } from "react";
import useStoreAuth from "../Contenedores/Login-Register/store/useStoreAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPassword({ toggleVisibility }: { toggleVisibility: () => void }) {

  const { resetPassword, isResetPassword, isLoading } = useStoreAuth();

  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );
    const email = formData.email as string;
    resetPassword(email);
  };

  async function handleMessage() {
    toggleVisibility();
    await toast.success(
      "Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña"
    );
    await router.push("/account");
  }

  useEffect(() => {
    if (
      isResetPassword ===
      "Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña"
    ) {
      handleMessage();
    }
  }, [isResetPassword]);

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
    <form onSubmit={handleResetPassword}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={`w-[384px] focus:outline-none h-[44px] px-3 border  bg-transparent rounded`}
      />
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
  );
}
