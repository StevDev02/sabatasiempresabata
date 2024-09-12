"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useNavBarStore } from "../store";

export default function LogoOption() {
  const { setIsOpenWoman, setIsOpenMen } = useNavBarStore();
  const handleMouseEnter = useCallback(() => {
    setIsOpenWoman(false);
    setIsOpenMen(false);
  }, [setIsOpenWoman, setIsOpenMen]);
  return (
    <Link className="z-[999]" href="/" onMouseEnter={handleMouseEnter}>
      LOGO
    </Link>
  );
}
