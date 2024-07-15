"use client";

import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-sm flex flex-col bg-[#F4F4F4] pt-8">
      <h1 className="font-bold pl-4">
        AutoScout24: Europees online autoplatform.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-4 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">AutoScout24</h1>
          <p className="cursor-pointer">Over AutoScout24</p>
          <p className="cursor-pointer">Pers</p>
          <p className="cursor-pointer">Carrière</p>
          <p className="cursor-pointer">Juridische informatie</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Media</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Service</h1>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">Veelgestelde vragen</p>
          <p className="cursor-pointer">Merkenoverzicht</p>
          <p className="cursor-pointer">Occasions per regio</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Autobedrijf</h1>
          <p className="cursor-pointer">Inloggen</p>
          <p className="cursor-pointer">Registreren</p>
          <p className="cursor-pointer">Informatie</p>
          <p className="cursor-pointer">Contact</p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Follow us on</h1>
            <p className="cursor-pointer">AutoScout24 voor iOS</p>
            <p className="cursor-pointer">AutoScout24 voor Android</p>
            <div className="flex flex-row gap-4 items-center">
              <Instagram
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.instagram.com/Carscout---");
                }}
              />
              <Twitter
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://twitter.com/Carscout---");
                }}
              />
              <Linkedin
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.linkedin.com/company/Carscout---");
                }}
              />
              <Youtube
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.youtube.com/user/Carscout---");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 py-6">
        <p className="font-light text-sm text-gray-400">
          © Copyright 2024 AutoScout24 Nederland B.V. All rights reserved.
        </p>
        <p className="font-light text-sm text-gray-400">
          AutoScout24.nl, LeaseVergelijker, AutoProff, Carscout Media and Smyle
          are part of the Carscout family.
        </p>
      </div>
    </footer>
  );
}
