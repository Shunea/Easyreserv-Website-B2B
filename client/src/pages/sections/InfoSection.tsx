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
    title: "Simplify Operations",
    description:
      "We streamline and centralize all your booking needs, making your business more efficient.",
    number: "01",
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Attract Clients",
    description:
      "Our platform helps you build strong connections with customers, ensuring their loyalty.",
    number: "02",
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Outperform the Competition",
    description:
      "Leverage cutting-edge technologies to elevate your business management.",
    number: "03",
  },
  {
    icon: "/figmaAssets/icon-2.svg",
    title: "Unwavering Support",
    description:
      "We stand by your side, offering the assistance and expertise you need to succeed.",
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
      <div className="flex items-center gap-5 px-[180px] py-[50px] w-full max-w-[1440px]">
        <img
          className="w-[622px] h-[434px] rounded-[20px] object-cover"
          alt="Rectangle"
          src="/figmaAssets/rectangle-435.png"
        />

        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="self-stretch [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[52.8px]">
            Our Mission
          </h2>

          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-5">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                At EasyReserv, our mission is clear: To provide B2B businesses
                with a cutting-edge ERP solution that optimizes operations,
                increases revenue, and enhances customer experiences.
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                We're committed to simplifying your business processes, one
                module at a time.
              </p>
            </div>

            <Link href="/contact" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                Request Demo
              </span>
            </Link>
          </div>
        </div>
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
            Why choose us?
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
