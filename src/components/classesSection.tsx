import React, { ReactHTMLElement } from "react";
import CardsAula from "./cardsAula";

type ClassesSectionProps = React.HTMLProps<HTMLDivElement>;

export default function ClassesSection({ id, ...props }: ClassesSectionProps) {
  return (
    <section id={id} className="py-24 px-12 lg:px-24">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-8xl font-kenyan">AULAS</h1>
        <h2 className="md:max-w-[55%] text-balance text-center text-md">
          Em mais de 1500 m², oferecemos um amplo espectro de artes marciais,
          fitness e recuperação. Você decide se é Artes Marciais Mistas, Muay
          Thai, Jiu-Jitsu Brasileiro, boxe ou luta livre, você encontrará tudo o
          que um artista marcial poderia desejar. Seja para um primeiro treino
          experimental ou para um competidor ambicioso, temos o curso certo para
          você. Para sua recuperação ativa, você também pode participar das
          nossas aulas de yoga ou reservar uma massagem relaxante.
        </h2>
      </div>

      <CardsAula />
    </section>
  );
}
