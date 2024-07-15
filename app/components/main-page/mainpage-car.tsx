"use client";
import { TCar } from "@/lib/models/car-model";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Heart from "../heart/heart";

export default function MainpageCar({ car,userInfo }: { car: TCar, userInfo: any }) {
  const router = useRouter();
  return (
    <div className="w-full h-[240px] md:h-[300px] lg:h-[340px] rounded-sm shadow-sm bg-white">
      <div className="w-full h-32 md:h-36 lg:h-44 relative">
        <Heart carId={car._id} userInfo={userInfo}/>
        <Image
          src={car.images[0]}
          alt={car.brand + " " + car.model}
          fill
          className="rounded-t-sm cursor-pointer"
          onClick={() => router.push(`/car/${car._id}`)}
        />
      </div>
      <div className="flex flex-col gap-1 p-1 md:p-3 lg:py-5 text-sm md:text-base">
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm font-semibold">{car.brand}</p>
          <p className="text-sm">{car.model}</p>
        </div>
        <h1 className="font-semibold text-lg">€{car.price}</h1>
        <p className="text-sm">
          {car.fuel} | {car.km}-km  | {car.year}
        </p>
        <div className="hidden md:inline text-sm bg-gray-200">Particulier</div>
        <p className="text-sm">Address comes here!</p>
      </div>
    </div>
  );
}
