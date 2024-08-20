import TopNav from "@/components/topnav";
import CardsAula from "@/components/cardsAula";
import Image from "next/image";
import { useState } from "react";
import DefaultBtn from "@/components/defaultBtn";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="flex min-w-screen flex-col items-center justify-between">
        <section
          id="heroSection"
          className="min-w-full min-h-screen pt-[10vh] md:pt-[25vh] px-12 lg:px-24"
        >
          {/* HERO BACKGROUND */}
          <div className="z-10 absolute inset-0 overflow-clip">
            <Image
              src="/assets/imgs/bg-last.webp"
              alt="Background Image"
              fill
              quality={100} // MAX 100
              style={{ zIndex: -1, objectFit: "cover" }}
            />
            <Image
              src="/assets/imgs/bg-medium 2.png"
              className="mix-blend-screen glitch-image"
              alt="Background Image"
              fill
              quality={100} // MAX 100
              style={{ zIndex: 0, objectFit: "cover" }}
            />
            <Image
              src="/assets/imgs/bg-first.webp"
              alt="Background Image"
              fill
              quality={100} // MAX 100
              style={{ zIndex: 1, objectFit: "cover" }}
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

              <DefaultBtn content="VER AULAS E TURMAS" width={"354px"} />
            </div>
          </div>
        </section>

        <section id="classesSection" className="py-24 px-12 lg:px-24">
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

        <section className="min-w-full h-[600px] py-24  bg-gradient-to-br from-zinc-800 to-black relative">
          <div className="max-w-5xl mx-auto flex items-center h-full">
            <div className="w-1/2 flex flex-col gap-5">
              <h1 className="text-8xl font-kenyan text-white">
                AULA EXPERIMENTAL
              </h1>
              <h2 className="  text-start text-balance text-md text-gray-200">
                Você quer experimentar uma sessão de treinamento gratuita
                conosco? Sem problemas! Basta vir durante nosso horário de
                funcionamento regular e falar com nossa equipe na recepção.
                <br />
                <br />
                Lá, iremos aconselhá-lo, encontrar uma data adequada juntos e
                oferecer um tour pela academia.
              </h2>
            </div>
            <div className="absolute w-full md:w-2/3 xl:w-1/2 h-[600px] top-0 right-0 md:mr-[-15vw] lg:mr-[-6vw] xl:mr-[0vw] 2xl:mr-[12vw] grayscale mask-rounded-3xl">
              <Image
                className="absolute top-[55px] right-[100px] opacity-30 mask-rounded-xl"
                src="/assets/imgs/socador-box.png"
                alt="Fight Image"
                width={650}
                height={150}
                quality={100} // MAX 100
                style={{ zIndex: 1, objectFit: "cover" }}
              />
              <Image
                className="absolute top-[55px] right-[75px] opacity-60 mask-rounded-xl"
                src="/assets/imgs/socador-box.png"
                alt="Fight Image"
                width={650}
                height={150}
                quality={100} // MAX 100
                style={{ zIndex: 2, objectFit: "cover" }}
              />
              <Image
                className="absolute top-[55px] right-[50px] mask-rounded-xl"
                src="/assets/imgs/socador-box.png"
                alt="Fight Image"
                width={650}
                height={150}
                quality={100} // MAX 100
                style={{ zIndex: 3, objectFit: "cover" }}
              />

              <Image
                className="absolute top-[140px] right-[110px] "
                src="/assets/imgs/saco-box.png"
                alt="Fight Image"
                width={450}
                height={50}
                quality={100} // MAX 100
                style={{ zIndex: 4, objectFit: "cover" }}
              />

              <Image
                className="absolute top-[0px] right-[155px]"
                src="/assets/imgs/gym-chain.png"
                alt="Fight Image"
                width={150}
                height={50}
                quality={100} // MAX 100
                style={{ zIndex: 1, objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        <section className="min-w-full max-h-screen  min-h-[120vh] pt-24 2xl:pt-44 relative overflow-clip">
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
              src={`/assets/imgs/inter-section.webp`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto object-cover h-full w-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>

        <section className="py-40 px-12 lg:px-24">
          <div className="flex flex-col justify-center items-center gap-14">
            <h1 className="text-8xl font-kenyan text-black">S0BRE NÓS</h1>
            <h2 className="text-center text-xl max-w-3xl text-pretty">
              Fundamos a academia em 2010 e, desde então, estamos com +70
              franquias. Originalmente começamos como uma academia
              exclusivamente de MMA, mas ao longo do tempo, evoluímos para um
              centro de diversas artes marciais, com foco em MMA, BJJ e Muay
              Thai.
              <br />
              <br />
              Sete dias por semana, nossa equipe e comunidade garantem uma ampla
              variedade de atividades por meio de mais de 140 aulas. Nossa área
              de fitness e as amplas áreas de tatame oferecem oportunidades para
              treinos independentes de força e técnica ou sessões de sparring
              com amigos.
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
