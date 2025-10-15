import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { BlogArticleSection } from "./sections/BlogArticleSection";
import { RelatedArticlesSection } from "./sections/RelatedArticlesSection";
import { NavigationSection } from "./sections/NavigationSection";

export const BlogArticle = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationSection />
      <BlogArticleSection />
      <RelatedArticlesSection />
      <FooterSection />
    </div>
  );
};
