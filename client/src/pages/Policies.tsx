import React from "react";
import { PoliciesSection } from "./sections/PoliciesSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

export const Policies = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO {...seoConfig.policies} />
      <NavigationSection />
      <PoliciesSection />
      <FooterSection />
    </div>
  );
};
