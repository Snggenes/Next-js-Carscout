"use client";
import { useCallback, useState } from "react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

import { FaStar, FaBell } from "react-icons/fa";
import ProfileMenuItem from "./profile-menu-item";
import useLoginModal from "../modals/use-login-modal";

export default function ProfileMenu({ user }: { user: User | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    const loginModal = useLoginModal();
  return (
    <div className="flex flex-row gap-3 relative items-center">
      <FaStar className="h-[23px] w-[23px] cursor-pointer" />
      <FaBell className="h-[23px] w-[23px] cursor-pointer" />
      <div className="hidden lg:block cursor-pointer" onClick={handleOpen}>
        {user ? (
          <div>Mijn Autoscout24</div>
        ) : (
          <div className="hover:bg-white hover:text-black transition py-2 px-4 rounded-sm border-white border-2"
            onClick={() => loginModal.open()}
          >
            Inloggen
          </div>
        )}
      </div>
      {isOpen && user && (
        <div className="absolute w-64 bg-white right-0 top-8 lg:top-10 rounded-sm shadow-md overflow-hidden z-20 text-black p-5 text-sm">
          <div className="flex flex-col cursor-pointer">
            <ProfileMenuItem onClick={() => {}} label="Overzicht" />
            <ProfileMenuItem onClick={() => {}} label="Favorieten" />
            <ProfileMenuItem
              onClick={() => {}}
              label="Opgeslagen zoekopdrachten"
            />
            <ProfileMenuItem onClick={() => {}} label="Advertentie" />
            <ProfileMenuItem
              onClick={() => {}}
              label="ExpressVerkoop afspraken"
            />
            <ProfileMenuItem onClick={() => {}} label="Berichten" />
            <ProfileMenuItem onClick={() => {}} label="Profile" />
            <hr />
            <ProfileMenuItem onClick={() => signOut()} label="Logout" />
          </div>
        </div>
      )}
    </div>
  );
}
