import NavBarFilters from "../../components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarFilters />
      <main className="w-full h-full -translate-y-20">{children}</main>
    </>
  );
}
