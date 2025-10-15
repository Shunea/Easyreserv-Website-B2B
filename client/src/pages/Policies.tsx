import React from "react";
import { PoliciesSection } from "./sections/PoliciesSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationSection } from "./sections/NavigationSection";

export const Policies = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationSection />
      <PoliciesSection />
      <FooterSection />
    </div>
  );
};
