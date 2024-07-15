"use client";

import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type TNewOffers = {
  children?: React.ReactNode;
};

export default function NewOffers({ children }: TNewOffers) {
  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-base md:text-lg font-semibold mb-4">
        Nieuw aanbod sinds je laatste zoekopdracht
      </h1>
      <div className="w-full">{children}</div>
      <div className="mt-4 p-5 w-full flex flex-row gap-2 justify-center items-center bg-white text-blue-800 font-semibold shadow-md">
        <Plus size={15} />
        <p
          className="text-sm cursor-pointer"
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            if (!params.has("newOffersLimit")) {
              params.set("newOffersLimit", "8");
              return router.replace(`?${params.toString()}` ,{
                scroll: false
              });
            }
            if (
              params.has("newOffersLimit") &&
              params.get("newOffersLimit") === "8"
            ) {
              params.set("newOffersLimit", "12");
              router.replace(`?${params.toString()}`,{
                scroll: false
              });
            }
          }}
        >
          Toen meer
        </p>
      </div>
    </div>
  );
}
