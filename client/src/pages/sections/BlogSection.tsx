import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const featuredArticle = {
  title: "3 must-try dishes at Nashville's Chinese-meets-Southern hotspot Choy",
  slug: "nashville-choy-dishes",
  date: "August 20, 2022",
  image: "/figmaAssets/rectangle-38-9.png",
  excerpt: "The local dining scene has just been heating up year after year, and one of the hottest new players on the scene is Choy in Nashville, dubbed one of The Infatuation's best new restaurants in 2024.",
};

const articles = [
  {
    title:
      "3 must-try dishes at Nashville's Chinese-meets-Southern hotspot Choy",
    slug: "nashville-choy-dishes",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Must-Know Restaurant Terms for 2025",
    slug: "restaurant-terms-2025",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    slug: "technology-workplace-impact",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Restaurant Loyalty Segmentation - What It Is, How To Do It",
    slug: "restaurant-loyalty-segmentation",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Reducing Plate Waste With Portion Control - A 5-Step Guide",
    slug: "reducing-plate-waste-portion-control",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "How to Ensure Your Restaurant Fails - 5 Key Steps",
    slug: "restaurant-fails-key-steps",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title:
      "Generation Sell - Engaging and Retaining Zoomers at Your Restaurant",
    slug: "generation-sell-engaging-zoomers",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Cloud-Based Tech – A More Sustainable Solution for Your Restaurant",
    slug: "cloud-based-tech-sustainable-solution",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Morale and Motivation - Improving Staff Retention With Syrve",
    slug: "morale-motivation-staff-retention",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-6 px-4 md:px-[10%] py-16">
      <h1 className="w-full [font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-[56px] text-center tracking-[0] leading-normal">
        Our best stories
      </h1>

      <Link to={`/blog/${featuredArticle.slug}`}>
        <Card className="w-full border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex flex-col items-start justify-center gap-4 flex-1">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="[font-family:'Onest',Helvetica] text-[#282828] text-2xl md:text-[32px] leading-normal font-semibold tracking-[0]">
                    {featuredArticle.title}
                  </h2>
                </div>

                <p className="[font-family:'Onest',Helvetica] text-[#909090] leading-normal font-normal text-base tracking-[0]">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-5">
                  <time className="[font-family:'Onest',Helvetica] text-[#282828] leading-normal font-normal text-base tracking-[0]">
                    {featuredArticle.date}
                  </time>
                </div>
              </div>

              <img
                className="flex-1 w-full lg:w-auto h-64 lg:h-[355px] rounded-[5px] object-cover"
                alt="Featured article"
                src={featuredArticle.image}
              />
            </div>
          </CardContent>
        </Card>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {articles.map((article, index) => (
          <Link key={index} to={`/blog/${article.slug}`}>
            <Card className="border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0 flex flex-col gap-2.5">
                <img
                  className="w-full h-60 rounded-[5px] object-cover"
                  alt={article.title}
                  src={article.image}
                />

                <div className="flex flex-col items-start gap-4">
                  <h3 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0] leading-[28px]">
                    {article.title}
                  </h3>
                </div>

                <div className="flex items-center gap-5">
                  <time className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-base tracking-[0] leading-normal">
                    {article.date}
                  </time>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          Load more
        </span>
      </Button>
    </section>
  );
};
