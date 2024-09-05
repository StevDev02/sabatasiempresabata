"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "../../module.css/button.module.css";

export default function AuthForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      <button onClick={toggleVisibility} className="top-6 right-[120px] fixed z-40">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.49979 20H17.5008C18.2742 20 18.9007 19.3734 18.9007 18.6001V14.5622C18.9007 14.1656 18.7342 13.7875 18.4393 13.5222C16.2019 11.5127 13.2435 10.2907 9.99997 10.2907C6.75648 10.2907 3.79733 11.5134 1.56068 13.5229C1.26576 13.7875 1.09924 14.1663 1.09924 14.5622V18.5994C1.09924 19.3727 1.72579 19.9993 2.49909 19.9993L2.49979 20ZM1.94663 14.5629C1.94663 14.4055 2.01225 14.2559 2.12725 14.1529C4.29193 12.2084 7.0881 11.1381 10.0007 11.1381C12.9133 11.1381 15.7094 12.2084 17.8741 14.1522C17.9891 14.2552 18.0547 14.4048 18.0547 14.5622V18.6001C18.0547 18.9049 17.8064 19.1533 17.5016 19.1533H2.49979C2.19499 19.1533 1.94663 18.9049 1.94663 18.6001V14.5629Z"
            fill="white"
          ></path>
          <path
            d="M10 9.34523C12.5803 9.34523 14.6723 7.25323 14.6723 4.67297C14.6723 2.09271 12.581 0 10 0C7.41906 0 5.32776 2.09201 5.32776 4.67226C5.32776 7.25252 7.41976 9.34453 10 9.34453V9.34523ZM10 0.84668C12.1097 0.84668 13.8256 2.56262 13.8256 4.67226C13.8256 6.78191 12.1097 8.49785 10 8.49785C7.89038 8.49785 6.17444 6.78191 6.17444 4.67226C6.17444 2.56262 7.89038 0.84668 10 0.84668Z"
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

        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
          {!isLogin && (
            <>
              <input
                autoComplete="off"
                type="text"
                placeholder="First name"
                className="w-[384px] focus:outline-none h-[44px] px-3 border border-gray-300 bg-transparent rounded"
              />
              <input
                autoComplete="off"
                type="text"
                placeholder="Last name"
                className="w-[384px] focus:outline-none h-[44px] px-3 border bg-transparent border-gray-300 rounded"
              />
            </>
          )}
          <input
            autoComplete="off"
            type="email"
            placeholder="Email address"
            className="w-[384px] focus:outline-none h-[44px] px-3 border bg-transparent border-gray-300 rounded"
          />
          <input
            autoComplete="off"
            type="password"
            placeholder="Password"
            className="w-[384px] focus:outline-none bg-transparent h-[44px] px-3 border border-gray-300 rounded"
          />
          {isLogin && (
            <div className="text-right -translate-y-3">
              <a href="#" className="text-sm transition-all ease-in duration-300 text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button className={`${styles.fwButtonContainer} ${
              isLogin ? "" : "translate-y-5"
            }`} >
            <div
              className={`${styles.fwButtonContainerDiv} ${styles.fwButtonContainerDiv1}`}
            >
              <span className={`${styles.fwButtonContainerSpan}`}>
                <p className={`${styles.fwButtonContainerP} uppercase`}>{isLogin ? "Log In" : "Create Account"}</p>
              </span>
            </div>
            <div
              className={`${styles.fwButtonContainerDiv} ${styles.fwButtonContainerDiv2}`}
            >
              <span className={`${styles.fwButtonContainerSpan}`}>
                <p className={`${styles.fwButtonContainerP} uppercase`}>{isLogin ? "Log In" : "Create Account"}</p>
              </span>
            </div>
          </button>
        </form>
      </motion.div>
    </>
  );
}
