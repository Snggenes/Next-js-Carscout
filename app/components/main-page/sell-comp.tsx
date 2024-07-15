"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SellComp() {
  return (
    <div className="px-4 py-6 w-full md:w-1/2 bg-white h-[180px] shadow-sm rounded-sm">
      <p className="text-lg font-semibold mb-2">
        Verkoop je auto gratis en snel!
      </p>
      <p className="text-base mb-5">
        Kenteken invoeren, dagwaarde ontvangen, auto verkopen.
      </p>
      <Link href="sell">
        <Button className="w-2/5 border-2 rounded-md bg-[#333333]">
          Gratis verkopen
        </Button>
      </Link>
    </div>
  );
}
