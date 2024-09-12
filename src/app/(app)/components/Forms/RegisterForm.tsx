import FWButtonComponent from "@/components/Button/FWButton";
import { EyesPasswordClose, EyesPasswordOpen } from "../Accesories/EyesPassword";
import { useEmail } from "../hooks/useEmail";
import { useFirstName } from "../hooks/useFirstName";
import { useLastName } from "../hooks/useLastName";
import { usePassword } from "../hooks/usePassword";
export default function RegisterForm() {

  const { password, passwordError, setPassword, showPassword, setShowPassword, passwordInputRef } = usePassword();
  const { lastName, lastNameError, setLastName } = useLastName();
  const { email, emailError, setEmail } = useEmail();
  const { firstName, firstNameError, setFirstName } = useFirstName();

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    passwordInputRef.current?.focus();
  };

  const verifiedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };

  const handleAuthRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <form className="grid gap-4"
      onSubmit={handleAuthRegister}
    >

      <div>
        <input
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
      style={
        {
            opacity: !firstName || !lastName || !email || !password ? 0.5 : 1,
            cursor: !firstName || !lastName || !email || !password ? "not-allowed" : "pointer",
        }
      }
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
  );
}
