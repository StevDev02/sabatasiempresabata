import NavBarFiltersVestimenta from "../../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarFiltersVestimenta />
      <main className="w-full h-full -translate-y-20">{children}</main>
    </>
  );
}
