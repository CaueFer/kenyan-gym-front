"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear().toString();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-zinc-800 w-full ">
      <div className="flex flex-col gap-10 justify-center items-center text-white max-w-7xl w-full mx-auto px-12 md:px-28">
        <h1 className="font-kenyan text-6xl">KENYAN</h1>
        
        <div className="w-full flex flex-row gap-2 justify-around items-start">
          <div className="flex flex-col gap-1">
            <span className="font-bold uppercase">ENDEREÇO</span>
            <p className="">
              Kenyan Gym
              <br />
              Joinville, SC
              <br />
              Brasil
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-bold uppercase">HORÁRIOS:</span>
            <div className="grid grid-cols-2 grid-rows-3">
              <p>Manhã</p>
              <p className="font-bold">06h - 12h</p>

              <p>Tarde</p>
              <p className="font-bold">12h - 18h</p>

              <p>Noite</p>
              <p className="font-bold">18h - 23h</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase">REDES SOCIAIS:</span>
            <p className="flex gap-6">
              <Icon icon="mdi:instagram" className="text-4xl" />
              <Icon icon="ant-design:facebook-outlined" className="text-4xl" />
              <Icon icon="ant-design:whats-app-outlined" className="text-4xl" />
            </p>
          </div>
        </div>

        <div className="flex-1 text-center">
          <button className="text-white font-bold" onClick={scrollToTop}>
            VOLTAR AO TOPO
          </button>
        </div>

        <div className="flex flex-row justify-between items-center w-full mt-4">
          <p>© Kenyan Training Center</p>

          <a href="https://github.com/CaueFer" target="_blank">
            C-DEV - {year}
          </a>
        </div>
      </div>
    </section>
  );
}
