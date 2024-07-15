"use client";

import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function LastSearch() {
  return (
    <div className="w-full flex flex-col md:w-1/2 bg-white h-[180px] shadow-sm rounded-sm">
      <div className="flex flex-row gap-2 h-[108px] items-center mx-2">
        <Car height={70} width={70} className="bg-[#f4f4f4] p-3" />
        <div>
          <p className="text-sm">asdhashd</p>
          <p className="text-lg">asdhashd</p>
          <p className="text-sm">asdhashd</p>
        </div>
      </div>
      <hr />
      <div className="flex h-[73px] items-center">
        <Button variant="custom" className="w-full md:w-1/2 border-2">
          Zoekopdracht opslaan
        </Button>
      </div>
    </div>
  );
}
