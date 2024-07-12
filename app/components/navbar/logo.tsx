"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type TLogoProps = {
  height: number;
  width: number;
};

export default function Logo({ height, width }: TLogoProps) {
  const router = useRouter();

  return (
    <Image
      src="https://www.autoscout24.de/cms-content-assets/4ydEzuq5aFVUjXdvHLripG-7eb7ed609239464291ac4b2f1dac2927-autoscout24redesign23-1100.png"
      alt="Logo"
      width={width}
      height={height}
      onClick={() => router.push("/")}
      className="cursor-pointer"
    />
  );
}
