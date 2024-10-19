import NavBarFAQ from "../components/sections/NavBarFAQ";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-full flex px-[25px] items-center h-[120dvh]">
        <NavBarFAQ />
        {children}
      </main>
    </>
  );
}
