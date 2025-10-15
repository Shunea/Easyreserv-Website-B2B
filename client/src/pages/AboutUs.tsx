import React from "react";
import { NavigationSection } from "./sections/NavigationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { InfoSection } from "./sections/InfoSection";

export function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      <NavigationSection />
      <MainContentSection />
      <InfoSection />
    </div>
  );
}
