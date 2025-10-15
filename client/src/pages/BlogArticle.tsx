import React from "react";
import { useParams } from "wouter";
import { FooterSection } from "./sections/FooterSection";
import { BlogArticleSection } from "./sections/BlogArticleSection";
import { RelatedArticlesSection } from "./sections/RelatedArticlesSection";
import { NavigationSection } from "./sections/NavigationSection";
import { getArticleBySlug } from "@/data/articles";
import NotFound from "@/pages/not-found";

export const BlogArticle = (): JSX.Element => {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationSection />
      <BlogArticleSection article={article} />
      <RelatedArticlesSection currentSlug={params.slug} />
      <FooterSection />
    </div>
  );
};
