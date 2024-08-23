"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div
      className={`w-screen fixed top-0 transition-colors duration-500 backdrop-filter z-50
        ${
          isScrolled
            ? "bg-black/75  backdrop-blur-sm "
            : "bg-gradient-to-b from-black/70"
        }`}
    >
      <div className=" max-w-7xl w-full mx-auto flex justify-between items-center px-10 md:px-20 py-4 text-white">
        <a
          className="font-kenyan text-5xl cursor-pointer"
          onClick={() => {
            router.push("./");
          }}
        >
          KENYAN
        </a>
        <li className="flex gap-3 text-md font-bold">
          <Link
            href={"/#classesSection"}
            scroll
            className={cn(
              "p-2",
              pathname === "/" ? "text-white" : "text-gray-300"
            )}
          >
            Aulas
          </Link>
          <Link
            href={"/#experimentalSection"}
            scroll
            className={cn(
              "p-2",
              pathname === "/" ? "text-white" : "text-gray-300"
            )}
          >
            Experimental
          </Link>
          <Link
            href={"/planos"}
            className={cn(
              "p-2",
              pathname === "/planos" ? "text-white" : "text-gray-300"
            )}
          >
            Planos
          </Link>
        </li>
      </div>
    </div>
  );
}
