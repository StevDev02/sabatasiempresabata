"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "../../module.css/button.module.css";

export default function FavoriteSeccion() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleForm = () => setIsFavorite(!isFavorite);

  return (
    <>
      <button onClick={toggleVisibility} className="top-6 right-20 fixed z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.348 0H3.65204C3.07348 0 2.60357 0.469202 2.60357 1.04847V19.1604C2.60357 19.6606 3.0135 20.0007 3.44672 20.0007C3.63087 20.0007 3.81926 19.9393 3.98225 19.8017L9.45956 15.1894C9.61549 15.0582 9.80741 14.9926 10 14.9926C10.1919 14.9926 10.3839 15.0582 10.5398 15.1894L16.0178 19.8017C16.1808 19.9386 16.3692 20.0007 16.5533 20.0007C16.9866 20.0007 17.3965 19.6606 17.3965 19.1604V1.04847C17.3965 0.469202 16.9273 0 16.348 0Z"
            fill="#fff"
          ></path>
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
        className="fixed grid place-content-center top-0 right-0 w-[480px] h-[100dvh] bg-var-primary-white shadow-lg p-8 overflow-y-auto z-50"
      >
        <button onClick={toggleVisibility} className="absolute top-4 right-4">
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-medium mb-6">Favorites</h2>
      </motion.div>
    </>
  );
}
