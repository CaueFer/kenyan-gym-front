"use client";

import React, {
  ButtonHTMLAttributes,
  ReactHTMLElement,
  ReactNode,
} from "react";

interface DefaultBtnProps {
  children?: ReactNode;
  content: string;
  width: string;
}

export default function DefaultBtn({ content, width }: DefaultBtnProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`relative inline-flex overflow-hidden p-[1px] focus:outline-none `}
      style={{ maxWidth: width }}
      onClick={() => {
        scrollToSection("classesSection");
      }}
    >
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
      <span className=" button-glitch inline-flex h-full w-full cursor-pointer font-bold items-center justify-center bg-slate-950 px-3 py-1 text-md tracking-tight text-white backdrop-blur-3xl">
        {content}
      </span>
    </button>
  );
}
