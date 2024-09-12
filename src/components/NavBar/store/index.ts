import { create } from "zustand";

interface Store {
    isOpenWoman: boolean;
    setIsOpenWoman: (isOpen: boolean) => void;
    isOpenMen: boolean;
    setIsOpenMen: (isOpen: boolean) => void
}

export const useNavBarStore = create<Store>((set) => ({
    isOpenWoman: false,
    setIsOpenWoman: (isOpen) => set({ isOpenWoman: isOpen }),
    isOpenMen: false,
    setIsOpenMen: (isOpen) => set({ isOpenMen: isOpen }),
}))




