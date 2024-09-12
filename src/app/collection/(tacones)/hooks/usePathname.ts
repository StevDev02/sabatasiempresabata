import { usePathname } from "next/navigation";

export const usePathnameHook = () => {
    const pathname = usePathname();
    return pathname;
};