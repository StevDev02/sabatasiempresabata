"use client";

import Link from "next/link";
import { useNavBar } from "../hooks/useNavBarMan";
import MegaMenuSection from "../MegaMenuSection";

export default function ManOption() {
  const { isHidden, isOpenMen, handleMouseEnter, handleMouseLeave, handleClick } = useNavBar();

  return (
    <>
      <Link
        onClick={handleClick}
        href="/collection/zapatos/all"
        className={`z-50 text-sm text-option ${isOpenMen ? "font-medium" : ""}`}
        onMouseEnter={handleMouseEnter}
      >
        ZAPATOS
      </Link>
      <MegaMenuSection isOpen={isOpenMen} isHidden={isHidden} handleMouseLeave={handleMouseLeave}>
        <h2>MAN</h2>
      </MegaMenuSection>
    </>
  );
}
