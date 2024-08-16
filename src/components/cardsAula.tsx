"use client";

import { Constants } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DefaultBtn from "./defaultBtn";

export default function CardsAula() {
  const [aulas, setAulas] = useState(Constants.AULAS_INITIAL_VALUE);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-4 mx-auto max-w-3xl xl:max-w-5xl mt-10">
      {aulas.map((aula, index) => (
        <div
          role="listitem"
          key={index}
          className="w-[370px] xl:max-w-[330px]  h-[500px] mx-auto overflow-clip group transition-all duration-500 relative"
        >
          <div className=" w-full h-full scale-[1.1] group-hover:scale-[1] relative transition-all duration-300">
            <Image
              alt={aulas[index]}
              className="transition-all duration-500"
              loading="lazy"
              src={`/assets/imgs/card-${aula.toLocaleLowerCase()}.webp`}
              sizes="100vw"
              style={{ opacity: 1 }}
              fill
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="absolute inset-0 opacity-[0] group-hover:opacity-[0.7] bg-gradient-to-br from-[#E2CBFF] via-[#393BB2] to-[#2125EB] transition-opacity duration-300 z-40"></div>
              <div className="flex flex-col justify-center items-center gap-4 transition-all duration-300">
                <h1 className="font-kenyan text-5xl uppercase text-white z-50">
                  {aula}
                </h1>
                <button className="z-50 group-hover:block hidden rounded-sm animate-fade-up animate-duration-400 bg-gray-50 hover:bg-gray-200 px-4 py-3 font-bold text-md uppercase text-black">
                  Ver Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
