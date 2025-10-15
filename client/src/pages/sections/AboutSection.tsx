import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const topStats = [
  {
    label: "ESTABLISHED",
    value: "2023",
  },
  {
    label: "OUTSTANDING PROFESSIONALS",
    value: "15+",
  },
  {
    label: "MONTHS OF DEVELOPMENT",
    value: "8+",
  },
  {
    label: "EASYRESERV WIDGES CREATED",
    value: "101+",
  },
];

const features = [
  {
    id: "employee-management",
    title: "Employee Management",
    content: null,
  },
  {
    id: "mobile-reservations",
    title: "Mobile Reservations",
    content:
      "Allow your clients to make reservations easily through the mobile app, reducing no-shows and optimizing table turnover.",
  },
  {
    id: "business-insights",
    title: "Business Insights",
    content: null,
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    content: null,
  },
  {
    id: "multi-platform",
    title: "Multi-Platfor Access",
    content: null,
  },
  {
    id: "crm",
    title: "Customer Relationship Management",
    content: null,
  },
  {
    id: "online-payments",
    title: "Online Payments",
    content: null,
  },
];

const bottomStats = [
  {
    value: "400",
    label: "PLACES USED OUR PRODUCT IN THE FIRST YEAR",
  },
  {
    value: "30%",
    label: "OR MORE OF YOUR EMPLOYEES' TIME CAN BE OPTIMIZED",
  },
  {
    value: "80,000",
    label: "NOTIFICATIONS ARE SENT MONTHLY",
  },
];

const faqItems = [
  {
    question: "Can I access EasyReserv on both the web and mobile devices?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Viverra ut tincidunt lectus sem sit sed augue a. Sed nec nulla facilisis ut congue amet diam id ipsum. Arcu aenean in tellus aliquet in morbi. Justo ridiculus accumsan montes in in arcu fermentum ac vitae.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Rutrum lectus ac.",
    answer: null,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Condimentum ac.",
    answer: null,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Et gravida.",
    answer: null,
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Etiam sagittis.",
    answer: null,
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

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex w-full items-center justify-center gap-8 px-[180px] py-[50px] bg-[#282828]">
        {topStats.map((stat, index) => (
          <div
            key={index}
            className={`inline-flex flex-col items-center justify-center gap-[15px] ${
              index < topStats.length - 1
                ? "border-r [border-right-style:solid] border-[#ffffff40]"
                : ""
            }`}
          >
            <div className="w-60 [font-family:'Inter',Helvetica] font-medium text-grayswhite text-sm tracking-[0] leading-[18.2px]">
              {stat.label}
            </div>
            <div className="w-60 [font-family:'Inter',Helvetica] font-semibold text-grayswhite text-[32px] tracking-[0] leading-[38.4px]">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="inline-flex flex-col items-center gap-8 px-[180px] py-[50px]">
        <h2 className="self-stretch [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[52.8px]">
          Best features
        </h2>

        <div className="inline-flex items-center gap-[70px]">
          <div className="flex flex-col w-[480px] items-start">
            <Accordion
              type="single"
              collapsible
              defaultValue="mobile-reservations"
              className="w-full"
            >
              {features.map((feature, index) => (
                <AccordionItem
                  key={feature.id}
                  value={feature.id}
                  className={`border-b [border-bottom-style:solid] border-[#cccccc] ${
                    !feature.content ? "opacity-50" : ""
                  }`}
                >
                  <AccordionTrigger className="px-0 py-5 hover:no-underline">
                    <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xl tracking-[0.40px] leading-7">
                      {feature.title}
                    </span>
                  </AccordionTrigger>
                  {feature.content && (
                    <AccordionContent className="px-0 pb-5">
                      <div className="flex flex-col gap-6">
                        <p className="font-text font-[number:var(--text-font-weight)] text-[#282828] text-[length:var(--text-font-size)] tracking-[var(--text-letter-spacing)] leading-[var(--text-line-height)] [font-style:var(--text-font-style)]">
                          {feature.content}
                        </p>
                        <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
                          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                            Request Demo
                          </span>
                        </Button>
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <img
            className="w-[530px] h-[590px]"
            alt="Frame"
            src="/figmaAssets/frame-39977.svg"
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-5 px-[180px] py-[50px]">
        <img
          className="w-[622px] h-[434px] rounded-[20px] object-cover"
          alt="Restaurant interior"
          src="/figmaAssets/rectangle-435.png"
        />

        <div className="inline-flex flex-col items-start gap-4">
          <h2 className="self-stretch [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[52.8px]">
            About us
          </h2>

          <div className="w-[438px]">
            <div className="inline-flex flex-col items-start gap-10">
              <div className="inline-flex flex-col items-start gap-10">
                <div className="w-[438px] gap-5 flex flex-col items-start">
                  <p className="self-stretch [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    EasyReserv is dedicated to revolutionizing business
                    management. Our journey began with a simple concept: to make
                    business operations simpler, more efficient, and profitable.
                  </p>

                  <p className="self-stretch [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    Join us on this exciting journey and redefine the way you
                    manage your business.
                  </p>
                </div>

                <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                    Request Demo
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-8 px-[180px] py-[50px] bg-[#282828]">
        {bottomStats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-2.5 flex-1 ${
              index < bottomStats.length - 1
                ? "border-r [border-right-style:solid] border-[#ffffff40]"
                : ""
            }`}
          >
            <div className="w-60 [font-family:'Inter',Helvetica] font-semibold text-grayswhite text-[32px] tracking-[0] leading-[38.4px]">
              {stat.value}
            </div>
            <div className="w-60 [font-family:'Inter',Helvetica] font-medium text-grayswhite text-sm tracking-[0] leading-[18.2px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full items-start gap-2.5 px-[180px] py-[50px]">
        <div className="flex flex-col items-start justify-center gap-8 p-12 self-stretch w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
          <div className="flex flex-col items-start gap-4 w-full relative z-10">
            <h2 className="self-stretch [font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
              Start Optimizing Your Business Today!
            </h2>

            <Button className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                Become a partner
              </span>
            </Button>
          </div>

          <img
            className="absolute -top-11 left-[772px] w-[367px] h-[366px]"
            alt="Logo icon"
            src="/figmaAssets/logo-icon-1.svg"
          />

          <img
            className="absolute top-[calc(50.00%_-_102px)] right-6 w-[323px] h-[204px]"
            alt="Group"
            src="/figmaAssets/group.png"
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-5 px-[180px] py-[50px]">
        <div className="flex-col gap-10 inline-flex items-start">
          <div className="flex flex-col w-[530px] items-start gap-4">
            <h2 className="self-stretch [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[52.8px]">
              Unlock the Future of Business Management
            </h2>

            <div className="gap-4 flex flex-col items-start">
              <p className="self-stretch [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
                Take a leap towards efficiency, profitability, and success. Join
                the growing community of businesses transforming the way they
                operate. Embrace innovation, enhance your customer experience,
                and elevate your business to new heights.
              </p>

              <p className="self-stretch [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
                Are you ready to optimize your business and outperform the
                competition?
              </p>
            </div>

            <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                Start your journey!
              </span>
            </Button>
          </div>
        </div>

        <img
          className="w-[530px] h-[475.48px]"
          alt="Mobile app mockup"
          src="/figmaAssets/20901966-mobileapp-mockup1-copy-1.png"
        />
      </div>

      <div className="inline-flex flex-col items-start gap-2.5 px-[180px] py-[50px] bg-[#282828]">
        <div className="gap-5 inline-flex items-start">
          <div className="flex flex-col w-[530px] items-start gap-[33px]">
            <h2 className="self-stretch font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
              What is EasyReserv
            </h2>

            <p className="self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-white text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
              EasyReserv is a comprehensive solution for managing and optimizing
              your business. Mobile reservations, employee management, business
              insights, inventory management, and other features are available.
              You can save time, increase revenue, improve the client
              experience, cut costs, and increase productivity by utilizing our
              platform.
            </p>
          </div>

          <div className="inline-flex flex-col items-start w-[530px]">
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="w-full"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b [border-bottom-style:solid] border-[#3f4e5b]"
                >
                  <AccordionTrigger className="px-0 py-5 hover:no-underline">
                    <span className="text-left text-[length:var(--body-large-font-size)] leading-[var(--body-large-line-height)] font-body-large font-[number:var(--body-large-font-weight)] text-white tracking-[var(--body-large-letter-spacing)] [font-style:var(--body-large-font-style)]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  {item.answer && (
                    <AccordionContent className="px-0 pb-5">
                      <p className="text-[length:var(--description-font-size)] leading-[var(--description-line-height)] font-description font-[number:var(--description-font-weight)] text-white tracking-[var(--description-letter-spacing)] [font-style:var(--description-font-style)]">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-5 px-[180px] py-[50px]">
        <img
          className="w-[530px] h-[475.48px] object-cover"
          alt="Mobile app mockup"
          src="/figmaAssets/20901989-mobileapp-mockup4-copy.png"
        />

        <div className="flex-col gap-10 inline-flex items-start">
          <div className="flex flex-col w-[530px] items-start gap-4">
            <h2 className="self-stretch [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[52.8px]">
              Download the EasyReserv App
            </h2>

            <p className="self-stretch [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
              Experience the convenience of managing your business on the go
              with the EasyReserv mobile app. Seamlessly handle reservations,
              track inventory, and access business insights anytime, anywhere.
              Empower your team and enhance customer satisfaction with just a
              few taps. Download now and unlock a world of efficiency at your
              fingertips!
            </p>

            <div className="inline-flex flex-col items-start gap-4">
              <div className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl text-center tracking-[0] leading-[normal]">
                Available on
              </div>

              <img
                alt="App store badges"
                src="/figmaAssets/frame-30297-1.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-2.5 px-[180px] py-[50px]">
        <div className="flex flex-col items-start justify-center gap-8 p-12 self-stretch w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
          <div className="flex flex-col items-start gap-4 w-full relative z-10">
            <h2 className="self-stretch [font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
              Start Optimizing Your Business Today!
            </h2>

            <Button className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                Start your journey!
              </span>
            </Button>
          </div>

          <img
            className="absolute -top-11 left-[772px] w-[367px] h-[366px]"
            alt="Logo icon"
            src="/figmaAssets/logo-icon-1.svg"
          />

          <img
            className="absolute top-[calc(50.00%_-_102px)] right-6 w-[323px] h-[204px]"
            alt="Group"
            src="/figmaAssets/group-1.png"
          />
        </div>
      </div>

      <footer className="flex flex-col w-full items-center justify-center gap-[53px] px-[180px] py-[50px] bg-[#191a24]">
        <div className="flex items-start justify-center gap-[43px] self-stretch w-full">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="inline-flex items-center gap-4">
              <img
                className="w-14 h-14"
                alt="Logo"
                src="/figmaAssets/logo.svg"
              />

              <div className="flex items-center justify-center w-[164px] h-14 [font-family:'Inter',Helvetica] font-semibold text-grayswhite text-2xl tracking-[0] leading-[33.6px]">
                EasyReserv.io
              </div>
            </div>

            <p className="self-stretch opacity-75 [font-family:'Inter',Helvetica] font-normal text-grayswhite text-sm tracking-[0] leading-[normal]">
              EasyReserv is a versatile online booking system that enables
              businesses across various industries to manage appointments and
              reservations seamlessly, all for free.
            </p>
          </div>

          <div className="flex items-start justify-center flex-1">
            <nav className="flex flex-col items-start gap-4 flex-1">
              {footerLinks.column1.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="self-stretch [font-family:'Inter',Helvetica] font-normal text-grayswhite text-base tracking-[-0.32px] leading-[normal] hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-4 flex-1">
              {footerLinks.column2.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="self-stretch [font-family:'Inter',Helvetica] font-normal text-grayswhite text-base tracking-[-0.32px] leading-[normal] hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>

            <div className="inline-flex flex-col items-start gap-2">
              <div className="[font-family:'Inter',Helvetica] font-normal text-grayswhite text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Available on
              </div>

              <img alt="App store badges" src="/figmaAssets/frame-30297.svg" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between self-stretch w-full">
          <div className="[font-family:'Inter',Helvetica] font-normal text-grayswhite text-base text-center tracking-[-0.32px] leading-7 whitespace-nowrap">
            © EasyReserv.io 2023. All rights reserved.
          </div>

          <div className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-grayswhite text-base text-center leading-4">
            <span className="text-white tracking-[-0.05px] leading-7">
              Developed by
            </span>
            <span className="font-medium text-white tracking-[0] leading-[0.1px]">
              &nbsp;
            </span>
            <span className="font-bold text-white tracking-[-0.05px] leading-7 underline">
              iShunea Tech Solutions
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};
