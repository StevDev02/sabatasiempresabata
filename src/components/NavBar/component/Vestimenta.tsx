"use client";

import Link from "next/link";
import { useNavBarWoman } from "../hooks/useNavBarWomen";
import MegaMenuSection from "../MegaMenuSection";

export default function WomanOption() {
  const { isHidden, isOpenWoman, handleMouseEnter, handleMouseLeave, handleClick } = useNavBarWoman();

  return (
    <>
      <Link
        onClick={handleClick}
        href="/collection/vestimenta"
        className={`z-50 text-option text-sm ${isOpenWoman ? "font-medium" : ""}`}
        onMouseEnter={handleMouseEnter}
      >
        VESTIMENTA
      </Link>
      <MegaMenuSection isOpen={isOpenWoman} isHidden={isHidden} handleMouseLeave={handleMouseLeave}>
        <h2>WOMAN</h2>
      </MegaMenuSection>
    </>
  );
}
