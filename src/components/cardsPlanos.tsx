"use client";

import { Constants } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function CardsPlanos() {
  const [planos, setPlanos] = useState(Constants.PLANOS_INITIAL_VALUE);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto mt-10">
      {planos.map((plano, index) => (
        <div
          role="listitem"
          key={index}
          className="min-w-[270px] max-w-[330px] mx-auto group transition-all duration-500 relative"
        >
          <div className="w-full h-full shadow-xl">
            <div className="px-4 py-6 bg-black text-white flex flex-col gap-4 items-center text-center">
              <h1 className="text-5xl font-kenyan ">{plano.title}</h1>
              <div className="flex gap-1 items-end justify-end">
                <h2 className="text-4xl font-kenyan">
                  {plano.price + plano.currency}
                </h2>
                <p className="text-2xl">/mes</p>
              </div>
            </div>
            <div className="bg-white p-6 flex flex-col gap-5">
              {Object.entries(plano.planInfos).map(([key, info], index) => (
                <div key={index} className="flex flex-col gap-3">
                  <h1 className="font-bold text-xl">{info.title}</h1>
                  <h2 className="text-xl">{info.value}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
