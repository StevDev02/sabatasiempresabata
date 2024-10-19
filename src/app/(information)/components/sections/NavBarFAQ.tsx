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
            Check out the FAQ , and if you are still unsure about something, do
            not hesitate to{" "}
            <Link className="underline" href="/contact">
              contact us
            </Link>
            .
          </p>
        </div>
        <LinksInformation />
      </nav>
    </>
  );
}
