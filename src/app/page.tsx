import TopNav from "@/components/topnav";
import CardsAula from "@/components/cardsAula";
import Image from "next/image";
import { useState } from "react";
import DefaultBtn from "@/components/defaultBtn";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="flex min-w-screen flex-col items-center justify-between px-12 lg:px-24 ">
        <section
          id="heroSection"
          className="min-w-full min-h-screen pt-[10vh] md:pt-[25vh] "
        >
          {/* HERO BACKGROUND */}
          <div className="z-10 absolute inset-0 overflow-clip">
            <Image
              src="/assets/imgs/bg-last.webp"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100} // MAX 100
              style={{ zIndex: -1 }}
            />
            <Image
              src="/assets/imgs/bg-medium 2.png"
              className="mix-blend-screen glitch-image"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100} // MAX 100
              style={{ zIndex: 0 }}
            />
            <Image
              src="/assets/imgs/bg-first.webp"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100} // MAX 100
              style={{ zIndex: 1 }}
            />
          </div>

          <div className="flex flex-col gap-[100px] md:gap-[50px] items-start z-20 text-white relative">
            <h1 className="font-kenyan leading-tight text-7xl md:text-8xl">
              ARTES MARCIAIS. <br />
              MUSCULAÇÃO.
              <br />
              SUA MELHOR VERSÃO.
            </h1>
            <div className="flex flex-col gap-8 md:max-w-[50%]">
              <h2 className="text-gray-200 text-xl text-balance ">
                Venha treinar conosco. Uma comunidade fantástica com treinadores
                experientes o aguarda. Juntos, vamos trazer à tona o melhor de
                você.
              </h2>
             
             <DefaultBtn content="VER AULAS E TURMAS" width={'350px'} />
            </div>
          </div>
        </section>

        <section id="classesSection" className="py-24">
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1 className="text-8xl font-kenyan">AULAS</h1>
            <h2 className="max-w-[55%] text-balance text-center text-md">
              Em mais de 1500 m², oferecemos um amplo espectro de artes
              marciais, fitness e recuperação. Você decide se é Artes Marciais
              Mistas, Muay Thai, Jiu-Jitsu Brasileiro, boxe ou luta livre, você
              encontrará tudo o que um artista marcial poderia desejar. Seja
              para um primeiro treino experimental ou para um competidor
              ambicioso, temos o curso certo para você. Para sua recuperação
              ativa, você também pode participar das nossas aulas de yoga ou
              reservar uma massagem relaxante.
            </h2>
          </div>

          <CardsAula />
        </section>
      </main>
    </>
  );
}
