"use client";

import Link from "next/link";
import { useNavBarStore } from "../store";
import { useCallback } from "react";

export default function ContactOption() {
  const { setIsOpenWoman, setIsOpenMen } = useNavBarStore();
  const handleMouseEnter = useCallback(() => {
    setIsOpenWoman(false);
    setIsOpenMen(false);
  }, [setIsOpenWoman, setIsOpenMen]);
  return (
    <li
      className="w-full text-sm relative z-50"
      onMouseEnter={handleMouseEnter}
    >
      <Link className="text-option" href="/contact">
        CONTACTO
      </Link>
    </li>
  );
}
