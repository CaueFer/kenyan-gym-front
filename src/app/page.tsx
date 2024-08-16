import TopNav from "@/components/topnav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section
          id="heroSection"
          className="min-w-screen min-h-screen overflow-clip max-w-7xl pt-[5%]"
        >
          <div className="z-10 absolute inset-0">
            <Image
              src="/assets/imgs/bg-last.webp"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100} // MAX 100
              style={{ zIndex: -1 }}
            />
            <Image
              src="/assets/imgs/bg-medium.webp"
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

          <div className="flex flex-col gap-4 z-20 w-full text-7xl text-white relative">
            <h1>
              ARTES MARCIAIS. <br />
              MUSCULAÇÃO.
              <br />É AQUI.
            </h1>
            <h2 className="text-gray-200 text-md">
              Venha treinar conosco no coração de Joinville. Uma comunidade
              fantástica com treinadores experientes o aguarda. Juntos, vamos
              trazer à tona o melhor de você.
            </h2>
            <button className="inline-block px-5 py-4 bg-black text-sm">
              VER AULAS E TURMAS
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
