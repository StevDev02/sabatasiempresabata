"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "../../module.css/button.module.css";

export default function CartSeccion() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCart, setIsCart] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleForm = () => setIsCart(!isCart);

  return (
    <>
      <button onClick={toggleVisibility} className="top-6 right-10 fixed z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.98737 20H17.0126C17.7859 20 18.4125 19.3735 18.4125 18.6002V7.51147C18.4125 6.73816 17.7859 6.11162 17.0126 6.11162H14.4585V4.45848C14.4585 2.00028 12.4582 0 10 0C7.5418 0 5.54152 2.00028 5.54152 4.45848V6.11162H2.98737C2.21407 6.11162 1.58752 6.73816 1.58752 7.51147V18.6002C1.58752 19.3735 2.21407 20 2.98737 20ZM6.3882 4.45848C6.3882 2.46666 8.00818 0.84668 10 0.84668C11.9918 0.84668 13.6118 2.46737 13.6118 4.45848V6.11162H6.3875V4.45848H6.3882Z"
            fill="white"
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

        <h2 className="text-xl font-medium mb-6">
        Shoppin cart
        </h2>

        

        
      </motion.div>
    </>
  );
}
