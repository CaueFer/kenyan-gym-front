import Image from "next/image";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function FightYourSelfSection() {
  return (
    <>
      <section className="min-w-full pt-24 2xl:pt-44 relative overflow-clip hidden md:block">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Triunfe sobre o inimigo mais difícil <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  A SI PRÓPRIO
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/imgs/fightyourself.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <section className="min-w-full pt-24 2xl:pt-44 relative overflow-clip block md:hidden">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-semibold text-black text-center">
            Triunfe sobre o inimigo mais difícil <br />
            <span className="text-[4rem] font-bold mt-1 leading-none">
              A SI PRÓPRIO
            </span>
          </h1>
          <Image
            src={`/assets/imgs/fightyourselfMini.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </div>
      </section>
    </>
  );
}
