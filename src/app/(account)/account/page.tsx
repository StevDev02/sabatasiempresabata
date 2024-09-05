import Link from "next/link";
import AccountContainerParams from "../components/Index";
import ButtonSingOut from "../components/Buttons";

export default function AccountPage() {
  return (
    <main className="w-full flex gap-10 items-center px-[25px] h-[105dvh]">
      <header className="w-[742px] translate-y-[24px] p-4 bg_grey_light h-[527px] ">
        <h2 className="text-4xl pb-[90px] leading-[120%] font-bold">Welcome, Steven Sanchez</h2>
        <nav className="w-[236px] h-[168px] flex flex-col items-start justify-between">
          <Link className="text-sm font-medium" href="/account">
            CONTACT INFORMATION
          </Link>
          <Link
            className="text-sm font-medium"
            href="/account?location=contactAddresses"
          >
            ADDRESSES
          </Link>
          <Link
            className="text-sm font-medium"
            href="/account?location=contactOrders"
          >
            ORDERS
          </Link>
          <ButtonSingOut />
        </nav>
      </header>
      <section className="w-full grid items-center h-[527px] relative">
        <AccountContainerParams />
      </section>
    </main>
  );
}
