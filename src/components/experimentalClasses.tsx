"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface CustomProps {
  index: number;
  opacity: number;
}

export default function ExperimentalClassesSection() {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: ({ index, opacity }: CustomProps) => ({
      opacity: opacity,
      x: 0,
      transition: {
        duration: index * 0.7,
        type: "spring",
      },
    }),
  };

  return (
    <section
      id="experimentalSection"
      className="min-w-full h-[600px] py-24  bg-gradient-to-br from-zinc-800 to-black relative"
    >
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
          <motion.div
            custom={{ index: 0, opacity: 0.3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            className="absolute top-[55px] right-[100px] mask-rounded-xl"
          >
            <Image
              src="/assets/imgs/socador-box.png"
              alt="Fight Image"
              width={650}
              height={150}
              quality={100}
              style={{ zIndex: 1, objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            custom={{ index: 1, opacity: 0.6 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            className="absolute top-[55px] right-[75px] mask-rounded-xl"
          >
            <Image
              src="/assets/imgs/socador-box.png"
              alt="Fight Image"
              width={650}
              height={150}
              quality={100}
              style={{ zIndex: 2, objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            custom={{ index: 2, opacity: 1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            className="absolute top-[55px] right-[50px] mask-rounded-xl"
          >
            <Image
              src="/assets/imgs/socador-box.png"
              alt="Fight Image"
              width={650}
              height={150}
              quality={100}
              style={{ zIndex: 3, objectFit: "cover" }}
            />
          </motion.div>

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
