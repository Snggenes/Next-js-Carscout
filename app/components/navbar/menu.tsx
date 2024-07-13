"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import useLoginModal from "../modals/use-login-modal";

export default function Menu({ user }: { user: User | undefined }) {
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      {!isOpen ? (
        <AiOutlineMenu
          className="h-[20px] w-[20px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <IoMdClose
          className="h-[25px] w-[25px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <div className="flex flex-col items-center overflow-x-hidden overflow-y-auto fixed top-12 right-0 bottom-0 left-0 z-50 outline-none focus:outline-none bg-[#F4F4F4] px-4">
          <div className="w-full flex flex-col items-center">
            {user ?(
              <Button
              onClick={() => signOut()}
              variant="menu"
              className="h-14 my-4"
            >
              Mijn Autoscout24{" "}
              <p className="text-base font-semibold">Uitloggen</p>
            </Button>
            ):(
              <Button
              onClick={() => {
                setIsOpen(false);
                return loginModal.open();
              }}
              variant="menu"
              className="h-14 my-4"
            >
              Mijn Autoscout24{" "}
              <p className="text-base font-semibold">Inloggen</p>
            </Button>
            )}
            <Button variant="menu" className="h-14">
              Zoeken <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              Verkopen <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              Magazine <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              Auto-abonnement <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14 mb-4">
              Financial Lease <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              Favorieten <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              Opgeslagen zoekopdrachten <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              Advertentie <FaArrowRight />
            </Button>
            <Button variant="menu" className="h-14">
              ExpressVerkoop afspraken <FaArrowRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
