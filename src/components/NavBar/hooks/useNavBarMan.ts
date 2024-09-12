import { useEffect, useState, useCallback } from "react";
import { useNavBarStore } from "../store";

export const useNavBar = () => {
    const { isOpenMen, setIsOpenMen, setIsOpenWoman } = useNavBarStore();
    const [isHidden, setIsHidden] = useState(true);
    const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isOpenMen) {
            setIsHidden(false);
        } else {
            const timer = setTimeout(() => setIsHidden(true), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpenMen]);

    useEffect(() => {
        if (isOpenMen) {
            setIsOpenWoman(false);
        }
    }, [isOpenMen, setIsOpenWoman]);

    const handleMouseEnter = useCallback(() => {
        setIsOpenWoman(false);
        const timer = setTimeout(() => setIsOpenMen(true), 350);
        setHoverTimer(timer);
    }, [setIsOpenMen, setIsOpenWoman]);

    const handleMouseLeave = useCallback(() => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
            setHoverTimer(null);
        }
        setIsOpenMen(false);
    }, [hoverTimer, setIsOpenMen]);

    const handleClick = useCallback(() => {
        setIsOpenMen(false);
        setIsOpenWoman(false);
    }, [setIsOpenMen, setIsOpenWoman]);

    return {
        isOpenMen,
        setIsOpenMen,
        setIsOpenWoman,
        isHidden,
        setIsHidden,
        hoverTimer,
        setHoverTimer,
        handleMouseEnter,
        handleMouseLeave,
        handleClick,
    };
};
