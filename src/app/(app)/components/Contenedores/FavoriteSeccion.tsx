"use client";

import { useNavBarStore } from "@/components/NavBar/store"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FavoriteSeccion() {
  const [isVisible, setIsVisible] = useState(false);
  const { setIsOpenMen, setIsOpenWoman } = useNavBarStore();

  const toggleVisibility = () => {
    setIsOpenMen(false);
    setIsOpenWoman(false);
    setIsVisible(!isVisible);
  };

  return (
    <>

      <button onClick={toggleVisibility} className="z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleVisibility}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isVisible ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed grid place-content-center top-0 right-0 w-[480px] h-[100dvh] bg-crema shadow-lg p-8 overflow-y-auto z-50"
      >
        <button onClick={toggleVisibility} className="absolute top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-medium mb-6">Favorites</h2>

      </motion.div>
      
    </>
  );
}
