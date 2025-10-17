import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureImageSection } from "./sections/FeatureImageSection";
import { FooterSection } from "./sections/FooterSection";
import { PricingHeroSection } from "./sections/PricingHeroSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PricingTableSection } from "./sections/PricingTableSection";
import { SubscriptionOptionsSection } from "./sections/SubscriptionOptionsSection";
import { WhatIsEasyReservSection } from "./sections/WhatIsEasyReservSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

export const Pricing = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO {...seoConfig.pricing} />
      <img
        className="absolute top-[4538px] left-[500px] w-[1512px] h-[416px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="absolute top-[2518px] left-[-428px] w-[1512px] h-[416px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      <img
        className="absolute top-[1608px] left-[385px] w-[1512px] h-[416px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20-1.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1044px] h-[879px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-21-1.svg"
      />

      <img
        className="absolute top-[51px] left-[1144px] w-[973px] h-[585px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-22.svg"
      />

      <img
        className="absolute top-[205px] left-[-165px] w-[656px] h-[510px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="absolute top-[299px] left-[983px] w-[1512px] h-[416px] pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20-2.svg"
      />

      <NavigationSection />

      <PricingHeroSection />
      <ContentWrapperSection />
      <CallToActionSection />
      <SubscriptionOptionsSection />
      <PricingTableSection />
      <WhatIsEasyReservSection />
      <FeatureImageSection />
      <FooterSection />
    </div>
  );
};
