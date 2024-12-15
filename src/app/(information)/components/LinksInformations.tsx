"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinksInformation() {
  const pathname = usePathname().split("/")[2];

  return (
    <ul className="text-[.875rem] font-medium gap-8 grid text-chocolate ">
      <li>
        <Link href="/information/payments">
          <h3>PAGOS</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/shipping-and-return">
          <h3>ENVÍOS Y DEVOLUCIONES</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/general-terms">
          <h3>TÉRMINOS Y CONDICIONES</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/privacy-policy">
          <h3>POLÍTICA DE PRIVACIDAD</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/cookie-policy">
          <h3>POLÍTICA DE COOKIES</h3>
        </Link>
      </li>
    </ul>
  );
}
