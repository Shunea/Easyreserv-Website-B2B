import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Article } from "@/data/articles";

interface BlogArticleSectionProps {
  article: Article;
}

export const BlogArticleSection = ({ article }: BlogArticleSectionProps): JSX.Element => {
  const sections = article.content.sections;
  return (
    <article className="flex w-full items-start px-4 md:px-0">
      <div className="flex flex-col items-start justify-center gap-8 w-full max-w-[1080px] mx-auto py-12">
        <div className="items-center gap-8 flex flex-col w-full">
          <header className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <h1 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-3xl md:text-5xl tracking-[0] leading-[1.2]">
                {article.title}
              </h1>
            </div>

            <div className="inline-flex items-center gap-6">
              <div className="inline-flex items-center gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarImage
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                  <AvatarFallback>{article.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <span className="[font-family:'Onest',Helvetica] font-medium text-[#909090] text-sm tracking-[0] leading-normal whitespace-nowrap">
                  {article.author.name}
                </span>
              </div>

              <time className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-sm tracking-[0] leading-normal whitespace-nowrap">
                {article.date}
              </time>
            </div>
          </header>

          <img
            className="w-full h-64 md:h-[462px] rounded-[10px] object-cover"
            alt="Featured article image"
            src={article.image}
          />

          <div className="flex items-start w-full">
            <p className="flex-1 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[0] leading-[1.8]">
              {article.content.intro.split('\n\n').map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  {index < article.content.intro.split('\n\n').length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </span>
              ))}
            </p>
          </div>

{sections.map((section, index) => (
            <section
              key={index}
              className="flex-col gap-4 flex items-start w-full"
            >
              <h2 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-2xl tracking-[0] leading-normal w-full">
                {section.title}
              </h2>

              <p className="w-full [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[0] leading-[1.8]">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <span key={pIndex}>
                    {paragraph}
                    {pIndex < section.content.split("\n\n").length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </p>
            </section>
          ))}

          <blockquote className="flex items-center gap-8 p-8 w-full bg-[#f8f9fa] rounded-xl border-l-4 border-[#2d2c65]">
            <p className="flex-1 [font-family:'Onest',Helvetica] font-medium text-[#282828] text-xl md:text-2xl tracking-[0] leading-[1.6] italic">
              " {article.content.quote} "
            </p>
          </blockquote>
        </div>

        <section className="items-start gap-12 flex flex-col w-full">
          <div className="flex-col gap-4 flex items-start w-full">
            <h2 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-2xl tracking-[0] leading-normal w-full">
              Conclusion:
            </h2>

            <p className="w-full [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[0] leading-[1.8]">
              {article.content.conclusion}
            </p>
          </div>
        </section>

        <footer className="inline-flex items-center gap-8 flex-wrap">
          <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-normal">
            Share on
          </span>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                className="w-8 h-8"
                alt="Share on Facebook"
                src="/figmaAssets/frame-2147223550.svg"
              />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
};
