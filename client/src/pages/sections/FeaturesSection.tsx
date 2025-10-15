import React from "react";
import { Button } from "@/components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-between gap-8 px-4">
      <div className="inline-flex flex-col items-start gap-10 flex-1">
        <h1 className="w-full max-w-[530px] [font-family:'Onest',Helvetica] font-bold text-[#282828] text-[56px] leading-[56px] tracking-[0]">
          Manage Your Business Anytime, Anywhere
        </h1>

        <p className="w-full max-w-[532px] [font-family:'Onest',Helvetica] font-medium text-[#282828] text-base tracking-[-0.32px] leading-6">
          Discover the power of our ERP solution and take your business to new
          heights with the freedom you&#39;ve always wanted. It&#39;s time to
          redefine how you manage your business – the future is here, and
          it&#39;s in your hands.
        </p>

        <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
            Request Demo
          </span>
        </Button>
      </div>

      <div className="flex-1 flex justify-end">
        <img
          className="w-full max-w-[561px] h-auto object-cover"
          alt="Card"
          src="/figmaAssets/card.png"
        />
      </div>
    </section>
  );
};
