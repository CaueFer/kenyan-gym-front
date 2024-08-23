import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-40 px-12 lg:px-24">
      <div className="flex flex-col justify-center items-center gap-14">
        <h1 className="text-8xl font-kenyan text-black">S0BRE NÓS</h1>
        <h2 className="text-center text-xl max-w-3xl text-pretty">
          Fundamos a academia em 2010 e, desde então, estamos com +70 franquias.
          Originalmente começamos como uma academia exclusivamente de MMA, mas
          ao longo do tempo, evoluímos para um centro de diversas artes
          marciais, com foco em MMA, BJJ e Muay Thai.
          <br />
          <br />
          Sete dias por semana, nossa equipe e comunidade garantem uma ampla
          variedade de atividades por meio de mais de 140 aulas. Nossa área de
          fitness e as amplas áreas de tatame oferecem oportunidades para
          treinos independentes de força e técnica ou sessões de sparring com
          amigos.
        </h2>
      </div>
    </section>
  );
}
