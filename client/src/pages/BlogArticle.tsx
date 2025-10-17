import React from "react";
import { useParams } from "wouter";
import { FooterSection } from "./sections/FooterSection";
import { BlogArticleSection } from "./sections/BlogArticleSection";
import { RelatedArticlesSection } from "./sections/RelatedArticlesSection";
import { NavigationSection } from "./sections/NavigationSection";
import { getArticleBySlug } from "@/data/articles";
import NotFound from "@/pages/not-found";
import { SEO } from "@/components/SEO";
import { getBlogArticleSEO } from "@/lib/seo-config";

export const BlogArticle = (): JSX.Element => {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO {...getBlogArticleSEO(
        article.title,
        article.excerpt,
        article.slug,
        article.author.name,
        article.date,
        article.image
      )} />
      <NavigationSection />
      <BlogArticleSection article={article} />
      <RelatedArticlesSection currentSlug={params.slug} />
      <FooterSection />
    </div>
  );
};
