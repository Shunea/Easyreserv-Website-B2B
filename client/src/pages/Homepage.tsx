import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { NavigationSection } from "./sections/NavigationSection";
import { FooterSection } from "./sections/FooterSection";

export const Homepage = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <img
        className="absolute top-[1286px] left-[-707px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-25.svg"
      />

      <img
        className="absolute top-[205px] left-[-165px] w-[656px] h-[510px]"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="absolute top-[299px] left-[983px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      <img
        className="absolute top-[3951px] left-[1005px] w-[634px] h-[517px]"
        alt="Vector"
        src="/figmaAssets/vector-24.svg"
      />

      <NavigationSection />
      <FeaturesSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};
