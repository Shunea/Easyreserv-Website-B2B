import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { BlogSection } from "./sections/BlogSection";
import { NavigationSection } from "./sections/NavigationSection";

export const Blog = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};
