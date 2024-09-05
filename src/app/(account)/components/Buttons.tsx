"use client"

import { useRouter } from "next/navigation";

export default function ButtonSingOut() {
    const router = useRouter();
  const handleSignOut = () => {
    router.push("/");
  };
  return (
    <button
      className="text-sm font-medium"
      onClick={handleSignOut}
    >
      SIGN OUT
    </button>
  );
}
