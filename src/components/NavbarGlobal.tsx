import CartSeccion from "@/app/(app)/components/Contenedores/CartSeccion";
import FavoriteSeccion from "@/app/(app)/components/Contenedores/FavoriteSeccion";
import ManOption from "./NavBar/component/Zapatos";
import WomanOption from "./NavBar/component/Vestimenta";
import ContactOption from "./NavBar/component/Contact";
import LogoOption from "./NavBar/component/Logo";
import AuthIconSelect from "./NavBar/component/auth/AuthIcon";

export default function NavbarGlobal() {
  return (
    <nav
      className={`fixed bg-crema px-[25px] flex transition-all ease-in-out duration-500 top-0 left-0 z-[990] w-full`}
    >
      <div className="flex items-center justify-center gap-16 w-full">
        <LogoOption />
        <ul className="flex h-[82px] items-center justify-center w-full gap-6">
          <ManOption />
          <WomanOption />
          <ContactOption />
        </ul>
        <div className="flex h-[82px] items-center justify-center gap-6">
          <CartSeccion />
          <FavoriteSeccion />
          <AuthIconSelect />
        </div>
      </div>

    </nav>
  );
}
