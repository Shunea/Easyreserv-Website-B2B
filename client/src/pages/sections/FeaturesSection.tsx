import React from "react";
import { Link } from "wouter";
import { Container } from "@/components/Container";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative z-10 w-full py-16 md:py-24">
      <Container>
        {/* Text Content - Left Side */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-10">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[56px] tracking-[0]">
            Manage Your Business Anytime, Anywhere
          </h1>

          <p className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-base tracking-[-0.32px] leading-6">
            Discover the power of our ERP solution and take your business to new
            heights with the freedom you've always wanted. It's time to
            redefine how you manage your business – the future is here, and
            it's in your hands.
          </p>

          <div>
            <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
                Request Demo
              </span>
            </Link>
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
