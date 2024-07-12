"use client";

import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";

type TLoginModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal({ isOpen, setIsOpen }: TLoginModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-800/20">
      <div className="bg-white h-full w-full md:h-[610px] md:w-[377px] rounded-md relative">
        <IoMdClose
          className="absolute text-black top-6 right-6 w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <div className="flex flex-col gap-4 w-full items-center text-black">
          <Image
            alt="Logo"
            width={150}
            height={50}
            src="https://seekvectorlogo.net/wp-content/uploads/2020/03/autoscout24-gmbh-vector-logo.png"
          />
          <div className="flex flex-col w-full gap-4 pl-4 pr-12">
            <p className="text-lg">Inloggen of account aanmaken</p>
            <p className="text-sm">
              Log in en bewaar je zoekopdrachten op één plek.
            </p>
          </div>
          <div className="px-4 w-full">
            <Button variant="custom" className="text-sm">
              Ga verder als autobedrijf?
            </Button>
          </div>
          <div className="w-full flex flex-col px-4 gap-1 border py-2">
            <label>E-mailadres</label>
            <Button variant="custom" className="border text-gray-400/80 mb-2">
              Bijv. jan@example.com
            </Button>
            <Button
              variant="custom"
              className="border bg-yellow-300 hover:bg-yellow-200 transition"
            >
              Ga verder met email
            </Button>
            <p className="w-full p-4 flex items-center justify-center">-of-</p>
            <Button
              variant="custom"
              className="text-sm gap-4 mb-2"
              onClick={() => signIn("google")}
            >
              <FaGoogle /> Ga verder met Google
            </Button>
            <Button variant="custom" className="text-sm gap-4 mb-2">
              <FaFacebookF />
              Ga verder met Facebook
            </Button>
            <Button variant="custom" className="text-sm gap-4">
              <FaApple />
              Ga verder met Apple
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
