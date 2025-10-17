import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Search } from "lucide-react";
import blogImage from "@assets/blog-test-image.png";

type Category = "Toate" | "Use Case" | "News" | "Updates" | "Divertisment";

const featuredArticle = {
  title: "Cum să îți transformi restaurantul într-un business de succes în 2025",
  slug: "transformare-restaurant-business-succes",
  date: "2024-08-20",
  displayDate: "20 August 2024",
  image: blogImage,
  category: "Use Case" as Category,
  excerpt: "Descoperă cele mai eficiente strategii și tehnici moderne pentru a-ți dezvolta afacerea din industria HoReCa. De la digitalizare până la optimizarea experienței clienților, află cum să rămâi competitiv pe piața actuală.",
};

const articles = [
  {
    title:
      "Cum să îți transformi restaurantul într-un business de succes în 2025",
    slug: "transformare-restaurant-business-succes",
    date: "2024-08-20",
    displayDate: "20 August 2024",
    category: "Use Case" as Category,
    image: blogImage,
  },
  {
    title: "Termeni esențiali pentru industria HoReCa în 2025",
    slug: "termeni-horeca-2025",
    date: "2024-08-15",
    displayDate: "15 August 2024",
    category: "News" as Category,
    image: blogImage,
  },
  {
    title:
      "Impactul tehnologiei asupra afacerii: Cum tehnologia schimbă industria",
    slug: "impact-tehnologie-afacere",
    date: "2024-08-10",
    displayDate: "10 August 2024",
    category: "Updates" as Category,
    image: blogImage,
  },
  {
    title: "Programele de fidelizare - Ce sunt și cum le implementezi",
    slug: "programe-fidelizare-implementare",
    date: "2024-08-05",
    displayDate: "5 August 2024",
    category: "Use Case" as Category,
    image: blogImage,
  },
  {
    title: "Reducerea risipei alimentare prin control al porțiilor - Ghid în 5 pași",
    slug: "reducere-risipa-control-portii",
    date: "2024-08-01",
    displayDate: "1 August 2024",
    category: "Use Case" as Category,
    image: blogImage,
  },
  {
    title: "5 greșeli care pot duce la eșecul restaurantului tău",
    slug: "greseli-esec-restaurant",
    date: "2024-07-28",
    displayDate: "28 Iulie 2024",
    category: "Divertisment" as Category,
    image: blogImage,
  },
  {
    title:
      "Generația Z - Cum să atragi și să reții tinerii angajați în restaurant",
    slug: "generatia-z-angajati-restaurant",
    date: "2024-07-25",
    displayDate: "25 Iulie 2024",
    category: "News" as Category,
    image: blogImage,
  },
  {
    title: "Tehnologia Cloud - O soluție sustenabilă pentru restaurantul tău",
    slug: "tehnologie-cloud-solutie-sustenabila",
    date: "2024-07-20",
    displayDate: "20 Iulie 2024",
    category: "Updates" as Category,
    image: blogImage,
  },
  {
    title: "Moralul și Motivația - Îmbunătățirea retenției angajaților",
    slug: "moral-motivatie-retentie-angajati",
    date: "2024-07-15",
    displayDate: "15 Iulie 2024",
    category: "Use Case" as Category,
    image: blogImage,
  },
];

export const BlogSection = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("Toate");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const categories: Category[] = ["Toate", "Use Case", "News", "Updates", "Divertisment"];

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Toate" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <section className="flex flex-col w-full items-center gap-6 px-4 md:px-[10%] py-16">
      <h1 className="w-full [font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-[56px] text-center tracking-[0] leading-normal">
        Poveștile noastre
      </h1>

      <div className="w-full flex flex-col gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Caută articole..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 h-12 bg-white border border-gray-200 rounded-lg focus-visible:ring-1 focus-visible:ring-[#2d2c65]"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                    : "bg-white text-[#282828] border-gray-200 hover:bg-gray-50"
                } rounded-full px-4 py-2 h-auto`}
              >
                <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
                  {category}
                </span>
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setSortOrder("newest")}
              variant={sortOrder === "newest" ? "default" : "outline"}
              className={`${
                sortOrder === "newest"
                  ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                  : "bg-white text-[#282828] border-gray-200 hover:bg-gray-50"
              } rounded-lg px-4 py-2 h-auto`}
            >
              <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
                Cele mai noi
              </span>
            </Button>
            <Button
              onClick={() => setSortOrder("oldest")}
              variant={sortOrder === "oldest" ? "default" : "outline"}
              className={`${
                sortOrder === "oldest"
                  ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                  : "bg-white text-[#282828] border-gray-200 hover:bg-gray-50"
              } rounded-lg px-4 py-2 h-auto`}
            >
              <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
                Cele mai vechi
              </span>
            </Button>
          </div>
        </div>
      </div>

      <Link to={`/blog/${featuredArticle.slug}`}>
        <Card className="w-full border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex flex-col items-start justify-center gap-4 flex-1">
                <div className="flex flex-col items-start gap-4 w-full">
                  <span className="inline-block px-3 py-1 bg-[#2d2c65] text-white rounded-full text-xs font-medium">
                    {featuredArticle.category}
                  </span>
                  <h2 className="[font-family:'Onest',Helvetica] text-[#282828] text-2xl md:text-[32px] leading-normal font-semibold tracking-[0]">
                    {featuredArticle.title}
                  </h2>
                </div>

                <p className="[font-family:'Onest',Helvetica] text-[#909090] leading-normal font-normal text-base tracking-[0]">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-5">
                  <time className="[font-family:'Onest',Helvetica] text-[#282828] leading-normal font-normal text-base tracking-[0]">
                    {featuredArticle.displayDate}
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
        {filteredAndSortedArticles.map((article, index) => (
          <Link key={index} to={`/blog/${article.slug}`}>
            <Card className="border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex flex-col gap-2.5">
                <img
                  className="w-full h-60 rounded-[5px] object-cover"
                  alt={article.title}
                  src={article.image}
                />

                <div className="flex flex-col items-start gap-4">
                  <span className="inline-block px-3 py-1 bg-[#2d2c65] text-white rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <h3 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0] leading-[28px]">
                    {article.title}
                  </h3>
                </div>

                <div className="flex items-center gap-5">
                  <time className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-base tracking-[0] leading-normal">
                    {article.displayDate}
                  </time>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredAndSortedArticles.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          Nu au fost găsite articole care să corespundă criteriilor de căutare.
        </p>
      )}

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          Încarcă mai multe
        </span>
      </Button>
    </section>
  );
};
