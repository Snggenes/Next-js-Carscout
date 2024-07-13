"use client"
import Link from "next/link";

export default function Links() {

  return (
    <div className="hidden lg:flex flex-row gap-2 items-center">
      <Link
        href="/"
        className="hover:bg-white hover:text-black transition py-3 px-4 rounded-sm"
      >
        Zoeken
      </Link>
      <Link
        href="/sell"
        className="hover:bg-white hover:text-black transition py-3 px-4 rounded-sm"
      >
        Verkopen
      </Link>
      <Link
        href="/magazine"
        className="hover:bg-white hover:text-black transition py-3 px-4 rounded-sm"
      >
        Magazine
      </Link>
      <Link
        href="/"
        className="hover:bg-white hover:text-black transition py-3 px-4 rounded-sm"
      >
        Auto-abonnement
      </Link>
      <Link
        href="/"
        className="hover:bg-white hover:text-black transition py-3 px-4 rounded-sm"
      >
        Financial Lease
      </Link>
    </div>
  );
}
