import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 md:py-24">
      <Container>
        {/* Text Content - Left Side */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d2c65]/10 rounded-full w-fit">
            <div className="w-2 h-2 bg-[#2d2c65] rounded-full animate-pulse"></div>
            <span className="[font-family:'Onest',Helvetica] font-medium text-[#2d2c65] text-sm">
              POS disponibil • Integrare rapidă
            </span>
          </div>

          {/* Headline */}
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[56px] tracking-[0]">
            All-in-one pentru rezervări & operațiuni B2B
          </h1>

          {/* Subheadline */}
          <p className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-lg tracking-[-0.32px] leading-7">
            Un singur panou pentru comenzi, POS, stocuri, rapoarte și plăți.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-8 py-4 shadow-sm">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
                Programează un demo
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto bg-white hover:bg-gray-50 border-2 border-[#2d2c65] rounded-[5px] px-8 py-4"
            >
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base text-center tracking-[0] leading-5">
                Vezi modulele
              </span>
            </Button>
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
