"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinksInformation() {
  const pathname = usePathname().split("/")[2];

  return (
    <ul className="text-[.875rem] font-medium gap-8 grid text-chocolate ">
      <li>
        <Link href="/information/payments">
          <h3>PAYMENTS</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/shipping-and-return">
          <h3>SHIPPING AND RETURNS</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/general-terms">
          <h3>GENERAL TERMS</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/privacy-policy">
          <h3>PRIVACY POLICY</h3>
        </Link>
      </li>
      <li>
        <Link href="/information/cookie-policy">
          <h3>COOKIE POLICY</h3>
        </Link>
      </li>
    </ul>
  );
}
