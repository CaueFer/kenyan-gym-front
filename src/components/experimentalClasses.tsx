import Image from "next/image";
import React from "react";

export default function ExperimentalClassesSection() {
  return (
    <section id="experimentalSection"
    className="min-w-full h-[600px] py-24  bg-gradient-to-br from-zinc-800 to-black relative">
      <div className="max-w-5xl mx-auto flex items-center h-full">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-8xl font-kenyan text-white">AULA EXPERIMENTAL</h1>
          <h2 className="  text-start text-balance text-md text-gray-200">
            Você quer experimentar uma sessão de treinamento gratuita conosco?
            Sem problemas! Basta vir durante nosso horário de funcionamento
            regular e falar com nossa equipe na recepção.
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
  );
}
