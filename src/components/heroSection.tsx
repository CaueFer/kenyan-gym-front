import Image from "next/image";
import React, { ReactNode } from "react";

type HeroSectionProps = {
  children: ReactNode
}

export default function HeroSection({children}: HeroSectionProps) {
  return (
    <section
      id="heroSection"
      className="w-full min-h-screen pt-[10vh] md:pt-[25vh] px-12 lg:px-24"
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

        {children}
    </section>
  );
}
