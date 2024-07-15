"use client";

import Image from "next/image";

export default function Reels() {
  return (
    <div className="w-full md:w-1/2 bg-white h-[180px] shadow-sm rounded-sm flex flex-row items-center justify-between px-4 overflow-x-hidden relative xl:px-6">
      <p className="absolute top-3 text-sm font-semibold">Actueel aanbod</p>
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="image"
          src="https://www.autoscout24.nl/assets/as24-home/images/categories/car-subscription.webp"
          width={65}
          height={65}
          className="rounded-full"
        />
        <p className="text-sm md:text-xs xl:text-sm text-center">Abonnement</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="image"
          src="https://www.autoscout24.nl/assets/as24-home/images/categories/stadtflitzer.webp"
          width={65}
          height={65}
          className="rounded-full"
        />
        {/* tot 15000 hatchback hybrid benzine elektrisch*/}
        <p className="text-sm md:text-xs xl:text-sm text-center">Stadsauto</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="image"
          src="https://www.autoscout24.nl/assets/as24-home/images/categories/electro.webp"
          width={65}
          height={65}
          className="rounded-full"
        />
        {/* elektrisch */}
        <p className="text-sm md:text-xs xl:text-sm text-center">Elektrisch</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="image"
          src="https://www.autoscout24.nl/assets/as24-home/images/categories/familienauto.webp"
          width={65}
          height={65}
          className="rounded-full"
        />
        {/* tot 40000price  van 2014 tot 100000km suv stationwagen */}
        <p className="text-sm md:text-xs xl:text-sm text-center">Gezinauto</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="image"
          src="https://www.autoscout24.nl/assets/as24-home/images/categories/neu.webp"
          width={65}
          height={65}
          className="rounded-full"
        />
        {/* 2024 */}
        <p className="text-sm md:text-xs xl:text-sm text-center">Nieuw</p>
      </div>
    </div>
  );
}
