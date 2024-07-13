"use client";
import { use, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState<string | null>("");

  useEffect(() => {
    setIsFirstTime(localStorage.getItem("is-first-time"));
  }, []);

  useEffect(() => {
    if (isFirstTime === null) {
      setIsOpen(true);
    }
  }, [isFirstTime]);

  if (!isOpen) return null;

  if (isOpen && !isFirstTime) {
    return (
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/20">
        <div className="bg-white h-full w-full md:h-[610px] md:w-[480px] rounded-md relative flex flex-col items-center p-8 gap-8">
          <IoMdClose
            className="absolute text-black top-6 right-6 w-8 h-8 cursor-pointer"
            onClick={() => {
              localStorage.setItem("is-first-time", "1");
              setIsOpen(false);
            }}
          />
          <h1 className="font-semibold text-3xl">Welcome!</h1>
          <div className="w-full flex flex-row items-center gap-6">
            <GoDotFill />
            <p>Voorlopig kunt u alleen inloggen via Google.</p>
          </div>
        </div>
      </div>
    );
  }
}
