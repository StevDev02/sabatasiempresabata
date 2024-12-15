import Link from "next/link";
import LinksInformation from "../LinksInformations";

export default function NavBarFAQ() {
  return (
    <>
      <nav className="p-[25px] translate-y-8 bg-[#ededee] w-[507px] h-dvh ">
        <div className="grid gap-4 pb-20">
          <h2 className="text-chocolate h-[140px] text-7xl font-bold">
            Support & FAQ
          </h2>
          <p className="text-[.875rem] text-chocolate ">
            Revisa las preguntas frecuentes, y si aún tienes dudas, no
            dudes en{" "}
            <Link className="underline" href="/contact">
              contactanos
            </Link>
            .
          </p>
        </div>
        <LinksInformation />
      </nav>
    </>
  );
}
