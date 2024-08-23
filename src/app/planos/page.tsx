import TopNav from "@/components/topnav";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import DefaultBtn from "@/components/defaultBtn";
import CardsPlanos from "@/components/cardsPlanos";

export default function Planos() {
  return (
    <>
      <TopNav />
      <main className="flex min-w-screen flex-col items-center justify-between">
        <HeroSection>
          <div className="flex flex-col gap-[100px] md:gap-[50px] items-center z-20 text-white relative">
            <h1 className="font-kenyan leading-tight text-7xl md:text-8xl">
              PLANOS
            </h1>
            <div className="flex flex-col gap-14 max-w-[80%] justify-center items-center">
              <h2 className="text-gray-200 text-xl text-balance text-center">
                Com opções acessíveis e flexíveis, garantimos que seu
                investimento em saúde e bem-estar vale a pena. Escolha seu
                plano, aproveite nossas instalações de primeira classe, e conte
                com a experiência dos nossos treinadores.
                <br />
                Juntos, vamos alcançar seus objetivos!
              </h2>

              <DefaultBtn content="VER PLANOS" width={"270px"} />
            </div>
          </div>
        </HeroSection>

        <section id="classesSection" className="py-24 px-12 lg:px-24">
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1 className="text-8xl font-kenyan">MENSALIDADES</h1>
            <h2 className="max-w-[55%] text-center text-xl text-pretty">
              Para todos com 16 anos ou mais.
              <br />
              <br />
              Para manter a qualidade de nossos cursos, estamos atualmente
              regulando o número de novos membros por meio de uma lista de
              espera.
              <br />
              <br />
              Isso se aplica apenas a adultos. Crianças podem se tornar membros
              diretamente após participarem de uma aula experimental.
            </h2>
          </div>

          <CardsPlanos />
        </section>
      </main>
      <Footer />
    </>
  );
}
