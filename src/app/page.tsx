import TopNav from "@/components/topnav";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import ClassesSection from "@/components/classesSection";
import ExperimentalClassesSection from "@/components/experimentalClasses";
import FightYourSelfSection from "@/components/fightYourself";
import AboutSection from "@/components/aboutSection";
import DefaultBtn from "@/components/defaultBtn";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="flex min-w-screen flex-col items-center justify-between">
        <HeroSection id='heroSection' variant="h-screen">
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

              <DefaultBtn content="VER AULAS E TURMAS" width={"354px"}/>
            </div>
          </div>
        </HeroSection>

        <ClassesSection id="classesSection" />

        <ExperimentalClassesSection />

        <FightYourSelfSection />

        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
