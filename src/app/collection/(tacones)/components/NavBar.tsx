"use client";

import { Collection, CollectionOption } from "../const/Index";
import { useMemo } from "react";
import Link from "next/link";
import { usePathnameHook } from "../hooks/usePathname";
import FilterSectionZapatos from "./FilterSection";

const COLLECTION_OPTIONS: CollectionOption[] = [
  { name: "Show all", value: Collection.SHOW_ALL },
  { name: "Taco bajo", value: Collection.TACO_BAJO },
  { name: "Taco alto", value: Collection.TACO_ALTO },
  { name: "Botines", value: Collection.BOTINES },
  { name: "Botas", value: Collection.BOTAS },
  { name: "Sandalias", value: Collection.SANDALIAS },
];

const getSectionName = (currentSection: string): string => {
  const option = COLLECTION_OPTIONS.find((opt) => opt.value === currentSection);
  return option ? option.name.toUpperCase() : "TACONES";
};

const NavBarFilters: React.FC = () => {
  const pathname = usePathnameHook();

  const currentSection = useMemo(
    () => pathname.split("/").pop() || "",
    [pathname]
  );
  const sectionName = useMemo(
    () => getSectionName(currentSection),
    [currentSection]
  );

  return (
    <>
      <header className="py-[108px] px-[25px]">
        <h2 className="text-chocolate -translate-y-4 h-[140px] py-4 text-6xl font-semibold">
          {sectionName}
        </h2>
        <nav className="w-full -translate-y-10 h-full">
          <ul className="w-[450px] h-[35.19px] flex items-center justify-between text-chocolate text-[13px]">
            {COLLECTION_OPTIONS.map((option) => (
              <NavBarItem
                key={option.value}
                option={option}
                isSelected={currentSection === option.value}
              />
            ))}
          </ul>
        </nav>
        <hr className="w-full -translate-y-8 h-[1px] bg-chocolate" />
        <ul className="flex items-center justify-between">
          <li className="flex items-center gap-2 text-chocolate text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
            Sort by
          </li>
          <li className="flex items-center gap-2 text-chocolate text-sm font-medium">
            <FilterSectionZapatos />
          </li>
        </ul>
      </header>
    </>
  );
};

interface NavBarItemProps {
  option: CollectionOption;
  isSelected: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ option, isSelected }) => (
  <li className={`relative ${isSelected ? "text-select" : "text-is-select"}`}>
    <Link href={`/collection/zapatos/${option.value}`}>
      <button>{option.name}</button>
    </Link>
  </li>
);

export default NavBarFilters;
