"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useNavBarStore } from "@/components/NavBar/store";
import { useState } from "react";

import RegisterForm from "../Forms/RegisterForm";
import LoginForm from "../Forms/LoginForm";

export default function AuthForm() {
  
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { setIsOpenMen, setIsOpenWoman } = useNavBarStore();

  const toggleVisibility = () => {
    setIsOpenMen(false);
    setIsOpenWoman(false);
    setIsVisible(!isVisible);
  }

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
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
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

        <h2 className="text-2xl text-center font-bold mb-6">
          Log In or Create Account
        </h2>

        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 ${
              isLogin ? "border-b border-black" : "border-b border-[#ccc]"
            } ${isLogin ? "" : "text-[#ccc]"}`}
            onClick={() => setIsLogin(true)}
          >
            LOG IN
          </button>
          <button
            className={`flex-1 py-2 ${
              !isLogin ? "border-b border-black" : "border-b border-[#ccc]"
            } ${isLogin ? "text-[#ccc]" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            I&apos;M NEW HERE
          </button>
        </div>

        {!isLogin && <RegisterForm />}

        {isLogin && <LoginForm />}
        
      </motion.div>
      
    </>
  );
}
