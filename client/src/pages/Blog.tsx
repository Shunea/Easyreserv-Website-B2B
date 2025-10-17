import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { BlogSection } from "./sections/BlogSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";

export const Blog = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO {...seoConfig.blog} />
      <NavigationSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};
