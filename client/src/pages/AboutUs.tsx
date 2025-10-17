import React from "react";
import { NavigationSection } from "./sections/NavigationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { InfoSection } from "./sections/InfoSection";
import { FooterSection } from "./sections/FooterSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

export function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      <SEO {...seoConfig.about} />
      <NavigationSection />
      <MainContentSection />
      <InfoSection />
      <FooterSection />
    </div>
  );
}
