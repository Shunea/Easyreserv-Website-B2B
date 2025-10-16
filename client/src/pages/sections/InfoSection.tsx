import React from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "./FAQSection";
import { Container } from "@/components/Container";

const calculateYearsSince2023 = (): string => {
  const startDate = new Date(2023, 0, 1); // January 2023
  const currentDate = new Date();
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  
  const totalYears = yearsDiff + monthsDiff / 12;
  
  return totalYears.toFixed(1) + "+";
};

const statsData = [
  {
    label: "ÎNFIINȚAT",
    value: "2023",
  },
  {
    label: "PROFESIONIȘTI DE RENUME",
    value: "15+",
  },
  {
    label: "ANI",
    value: calculateYearsSince2023(),
  },
  {
    label: "WIDGETURI EASYRESERV CREATE",
    value: "101+",
  },
];

const whyChooseUsData = [
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Simplificăm operațiunile",
    description:
      "All-in-One pentru rezervări, POS, KDS, stocuri, rapoarte și automatizări. Mai puține sisteme, mai puține erori, −30% timp operațional.",
    number: "01",
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Atragere & conversie clienți",
    description:
      "Platformă publică de listare & booking B2C, remindere anti no-show, loyalty și campanii. Mai multe rezervări, reveniri și vânzări.",
    number: "02",
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Decizii pe date reale",
    description:
      "KPI live (vânzări, COGS, timpi, rotație), alerte 'late'/'low stock' și rapoarte pe locații. Vizibilitate completă, acțiuni rapide.",
    number: "03",
  },
  {
    icon: "/figmaAssets/icon-2.svg",
    title: "Implementare rapidă & suport local",
    description:
      "Go-live în zile, integrare 1C & plăți, compatibil cu hardware existent. Suport dedicat — de la onboarding la scalare.",
    number: "04",
  },
];

const featuresData = [
  {
    icon: "/figmaAssets/vuesax-broken-global.png",
    title: "Comprehensive Solution",
    description:
      "From booking to employee management, we offer an all-in-one solution for your business.",
  },
  {
    icon: "/figmaAssets/icon.svg",
    title: "Data Security",
    description:
      "Your data is our priority. We implement the most advanced security measures to ensure its safety.",
  },
  {
    icon: "/figmaAssets/innovation.png",
    title: "Innovation",
    description:
      "We continuously enhance our platform to stay ahead in the ever-evolving business environment.",
  },
  {
    icon: "/figmaAssets/vuesax-linear-profile.png",
    title: "User-Friendly Interface",
    description:
      "Our platform is designed to ensure seamless use for business owners and their customers.",
  },
  {
    icon: "/figmaAssets/vuesax-linear-status-up.png",
    title: "Scalability",
    description:
      "As your business grows, our platform grows with you. We are ready to support your expansion.",
  },
  {
    icon: "/figmaAssets/vuesax-linear-heart.png",
    title: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any questions or concerns.",
  },
];

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Rutrum lectus ac.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Condimentum ac.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Et gravida.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Etiam sagittis.",
    answer: "",
  },
];

const footerLinks = {
  column1: [
    "About Us",
    "Solutions",
    "Pricing",
    "Contact",
    "Terms & Conditions",
  ],
  column2: ["LinkedIn", "Facebook", "Instagram"],
};

export const InfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full">
      {/* Povestea Noastră Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 flex flex-col gap-8">
            {/* Header cu imagine mică și titlu/text */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-full lg:w-auto shrink-0">
                <img
                  className="w-full lg:w-[300px] h-auto rounded-[20px] object-cover"
                  alt="EasyReserv Story"
                  src="/figmaAssets/rectangle-435.png"
                />
              </div>

              <div className="flex-1 flex flex-col gap-6">
                <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
                  Povestea noastră
                </h2>

                <div className="flex flex-col gap-4">
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    Într-o seară de ianuarie 2023, Elena Roșca a pus întrebarea care a aprins fitilul:
                    „De ce în Chișinău e aproape imposibil să faci o rezervare online la restaurante?"
                  </p>
                  
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    Răspunsul n-a fost un „încă un formular". Împreună cu Alexandru Iaroslavschi, am documentat pas cu pas cum ar trebui să arate procesul digital de rezervare: de la solicitare, confirmare și alocarea mesei, până la notificări și actualizarea automată a disponibilității. În timp ce mapam fluxul, ne-a lovit realitatea: rezervarea este doar începutul. POS-ul, bucătăria (KDS), stocurile, contabilitatea și rapoartele trăiau în insule separate.
                  </p>
                  
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    Așa s-a născut EasyReserv — ideea unei platforme care leagă rezervările de operațiuni în timp real, pentru ca echipele să lucreze mai repede și cu mai puține erori.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Cronologie */}
            <div className="bg-gray-50 rounded-[20px] p-8 border border-gray-200">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-6">
                Cronologie
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">Ziua 1</span> — Primul flow de rezervare (solicitare → confirmare).
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">Luna 3</span> — Începem web app-ul care centralizează datele (în paralel cu dezvoltarea mobile).
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">Luna 8</span> — Prima versiune de Mobile App (beta) pentru clienți pilot.
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">Luna 13 (1 martie 2024)</span> — Mobile App în producție; în primele 48h, intrăm în Top 2 la rating în categoria ei.
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">Luna 14</span> — Integrare POS fiscal: bon, split note, reduceri, imprimante.
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">Luna 18</span> — Primul restaurant full-cycle în ecosistem (rezervări → POS → KDS → stocuri → rapoarte) cu ~30.000 € profit suplimentar după lansare.
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6 lg:col-span-2">
                  <span className="font-semibold text-[#fe9800]">Luna 20</span> — Extindem cu KDS & Timere, Stocuri & Rețetare (COGS), Rapoarte live, Automatizări & Notificări și integrări locale.
                </p>
              </div>
            </div>

            {/* Grid 2x2 pentru subsecțiuni ca carduri */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  Cine suntem azi
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  EasyReserv este o platformă All-in-One care unește rezervări, POS, comenzi/KDS, stocuri & rețetare, rapoarte în timp real și automatizări — plus o platformă publică de listare a partnerilor & booking B2C, ca utilizatorii să descopere și să rezerve direct.
                  Go-live în zile, nu luni, integrare 1C și plăți, compatibilitate cu hardware existent.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  Optimizări pe industrie
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  Restaurante & cafenele/kiosk, saloane & barbershop, hoteluri & pensiuni, chirii auto, fitness & wellness, medical (clinici/cabinete), retail — fiecare cu fluxuri și KPI dedicate (timere KDS, abonamente, tarife pe interval, ocupare resurse, loturi/expirări, coduri de bare etc.).
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  Impact
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  40 locații în primul an • 4.600+ utilizatori • 80.000+ notificări/lună • 30%+ timp optimizat pentru echipe • 99.9% uptime.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  Misiune
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  Să simplificăm operațiunile și să creștem profitabilitatea, legând rezervările de procesele zilnice și automatizând repetitivul, cu vizibilitate în timp real pentru decizii pe date — nu pe presupuneri.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-8 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center shadow-sm">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                  Începe călătoria ta
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex w-full items-center justify-center gap-8 px-[180px] py-[50px] bg-[#282828]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-[15px] ${
              index < statsData.length - 1 ? "border-r border-[#ffffff40]" : ""
            }`}
          >
            <div className="w-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
              {stat.label}
            </div>

            <div className="w-60 [font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px] text-center">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-8 px-[180px] py-[50px] w-full max-w-[1440px]">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[72px]">
            De ce să ne alegi?
          </h2>
        </div>

        <div className="flex items-center gap-5 w-full">
          {whyChooseUsData.map((item, index) => (
            <Card
              key={index}
              className="flex-1 h-[400px] bg-[#f0f4f5] rounded-[20px] border border-solid border-[#8aa2a980] shadow-[8px_28px_30px_#00000008] overflow-hidden"
            >
              <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10 h-full relative">
                <img className="w-[58px] h-[58px]" alt="Icon" src={item.icon} />

                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[30px]">
                    {item.title}
                  </h3>

                  <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {item.description}
                  </p>
                </div>

                <div className="absolute left-[calc(50%-104px)] bottom-[-100px] bg-[linear-gradient(180deg,rgba(138,162,169,0.5)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-20 [font-family:'Onest',Helvetica] font-bold text-transparent text-[200px] text-right tracking-[0] leading-[240.0px]">
                  {item.number}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 px-0 py-[50px] w-full max-w-[1138px]">
        <h2 className="w-[974px] [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
          Ready to transform your business?
        </h2>

        <div className="flex flex-col items-start gap-2.5 w-[674px]">
          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base text-center tracking-[0] leading-[20.8px]">
            Join us today and experience a new era of efficiency and growth. In
            a world where change is the only constant, staying ahead is not an
            option - it's a necessity.
          </p>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base text-center tracking-[0] leading-[20.8px]">
            Let's build a better future for your business, together.
          </p>
        </div>

        <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center">
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
            Learn more
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2.5 p-[50px] bg-neutral-950 rounded-[40px] mx-[180px]">
        <div className="grid grid-cols-3 gap-[20px] w-full max-w-[1080px]">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#282828] rounded-[20px] border-0"
            >
              <CardContent className="flex flex-col items-start justify-center gap-6 p-6">
                <img
                  className="w-[60px] h-[60px]"
                  alt={feature.title}
                  src={feature.icon}
                />

                <h3 className="[font-family:'Onest',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[31.2px]">
                  {feature.title}
                </h3>

                <p className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-[20.8px]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5 px-[180px] py-[50px] w-full max-w-[1440px]">
        <div className="flex flex-col items-start gap-10 flex-1">
          <div className="flex flex-col items-start gap-4 w-[530px]">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[52.8px]">
              Experience the Difference
              <br />
              Today!
            </h2>

            <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                Get started
              </span>
            </Link>
          </div>
        </div>

        <img
          className="w-[530px] h-[475.48px]"
          alt="Element mobileapp"
          src="/figmaAssets/20901966-mobileapp-mockup1-copy-1.png"
        />
      </div>

      <FAQSection />

      <div className="flex flex-col items-start gap-2.5 px-[180px] py-[50px] w-full max-w-[1440px]">
        <div className="flex flex-col items-start justify-center gap-8 p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
          <div className="flex flex-col items-start gap-4 w-full z-10 max-w-xl">
            <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
              Start Optimizing Your Business Today!
            </h2>

            <Link href="/pricing" className="h-auto bg-white rounded-[5px] px-6 py-4 hover:bg-white/90 inline-flex items-center justify-center">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base tracking-[0] leading-5">
                Become a partner
              </span>
            </Link>
          </div>

          <img
            className="absolute -top-11 left-[772px] w-[367px] h-[366px] opacity-30"
            alt="Logo icon"
            src="/figmaAssets/logo-icon-1.svg"
          />

          <img
            className="absolute top-[calc(50%-102px)] right-6 w-[323px] h-[204px]"
            alt="Group"
            src="/figmaAssets/group.png"
          />
        </div>
      </div>
    </section>
  );
};
