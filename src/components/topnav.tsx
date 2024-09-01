"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <div
      className={`w-screen fixed top-0 transition-colors duration-500 backdrop-filter z-50
        ${
          isScrolled
            ? "bg-black/75  backdrop-blur-sm "
            : "bg-gradient-to-b from-black/70"
        }`}
    >
      <div className="max-w-7xl w-screen mx-auto flex justify-between items-center px-10 md:px-20 py-4 text-white">
        <a
          className="font-kenyan text-5xl cursor-pointer"
          onClick={() => {
            router.push("./");
          }}
        >
          KENYAN
        </a>

        {/* MOBILE MENU */}
        <Icon
          icon="material-symbols:menu"
          className="text-4xl block md:hidden z-50"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <li
          className={cn(
            "flex flex-col md:flex-row items-end md:items-center gap-3 text-md font-bold absolute md:static top-10 md:px-0 px-10 md:py-0 py-24 md:bg-none bg-gradient-to-l from-black inset-0 h-screen md:h-auto transition-all duration-300",
            showMenu
              ? "opacity-100 translate-x-0"
              : "opacity-0  translate-x-[100%]"
          )}
          onClick={() => {
            setShowMenu(false);
          }}
        >
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

        {/* DESKTOP MENU */}
        <li
          className={cn(
            "hidden md:flex flex-col md:flex-row items-end md:items-center gap-3 text-md font-bold absolute md:static top-10 md:px-0 px-10 md:py-0 py-24 md:bg-none bg-gradient-to-l from-black inset-0 h-screen md:h-auto"
          )}
        >
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
