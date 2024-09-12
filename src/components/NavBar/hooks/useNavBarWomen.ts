import { useEffect, useState, useCallback } from "react";
import { useNavBarStore } from "../store";

export const useNavBarWoman = () => {
    const { isOpenWoman, setIsOpenWoman, setIsOpenMen } = useNavBarStore();
    const [isHidden, setIsHidden] = useState(true);
    const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isOpenWoman) {
            setIsHidden(false);
            setIsOpenMen(false);
        } else {
            const timer = setTimeout(() => setIsHidden(true), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpenWoman, setIsOpenMen]);

    const handleMouseEnter = useCallback(() => {
        setIsOpenMen(false);
        const timer = setTimeout(() => setIsOpenWoman(true), 350);
        setHoverTimer(timer);
    }, [setIsOpenWoman, setIsOpenMen]);

    const handleMouseLeave = useCallback(() => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
            setHoverTimer(null);
        }
        setIsOpenWoman(false);
    }, [hoverTimer, setIsOpenWoman]);

    const handleClick = useCallback(() => {
        setIsOpenMen(false);
        setIsOpenWoman(false);
    }, [setIsOpenMen, setIsOpenWoman]);

    return {
        isOpenWoman,
        setIsOpenWoman,
        setIsOpenMen,
        isHidden,
        setIsHidden,
        hoverTimer,
        setHoverTimer,
        handleMouseEnter,
        handleMouseLeave,
        handleClick,
    };
};
