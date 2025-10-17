import React from "react";
import { Link } from "wouter";
import { Container } from "@/components/Container";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Decorative vectors */}
      <img
        className="absolute top-0 left-[-165px] w-[656px] h-[510px] z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />
      <img
        className="absolute top-20 right-0 w-[1512px] h-[416px] z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />
      
      <Container>
        {/* Text Content - Left Side */}
        <div className="relative z-20 col-span-12 lg:col-span-5 flex flex-col justify-center gap-10">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[56px] tracking-[0]">
            De la Rezervări la POS, Rapoarte și Automatizări — într-o singură platformă
          </h1>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[-0.32px] leading-6">
            O singură platformă pentru rezervări, POS, operațiuni și analitică — creată pentru restaurante, cafenele, saloane de frumusețe, barbershopuri, hotele, pensiuni, chirii auto, fitness, medical, retail. Configurezi roluri, meniuri/servicii și pornești fluxurile cu go-live rapid. Automatizările reduc timpii și cresc conversiile, iar dashboardurile îți arată situația pe loc, pe zi sau pe lună. Integrezi contabilitatea, plățile și notificările fără a schimba hardware-ul.
          </p>

          <div className="flex flex-col gap-4">
            <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center w-fit">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
                Începe perioada de probă
              </span>
            </Link>
            
            <div className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-sm tracking-[0] leading-5">
              All-in-One • POS disponibil • Fiscal ready • Go-live rapid
            </div>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="col-span-12 lg:col-span-7 flex items-center justify-center lg:justify-end">
          <img
            className="w-full max-w-[561px] h-auto object-contain"
            alt="Dashboard preview"
            src="/figmaAssets/card.png"
          />
        </div>
      </Container>
    </section>
  );
};
