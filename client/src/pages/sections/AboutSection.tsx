import React from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";

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
      {/* Top Stats Section */}
      <div className="w-full py-12 bg-[#282828]">
        <Container>
          {topStats.map((stat, index) => (
            <div
              key={index}
              className={`col-span-6 md:col-span-3 flex flex-col items-center justify-center gap-4 ${
                index < topStats.length - 1
                  ? "md:border-r md:border-[#ffffff40]"
                  : ""
              }`}
            >
              <div className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
                {stat.label}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px]">
                {stat.value}
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* Best Features Section */}
      <div className="w-full py-16 md:py-24">
        <Container>
          <div className="col-span-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl text-center tracking-[0] leading-[52.8px] mb-12">
              Best features
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[480px]">
              <Accordion
                type="single"
                collapsible
                defaultValue="mobile-reservations"
                className="w-full"
              >
                {features.map((feature) => (
                  <AccordionItem
                    key={feature.id}
                    value={feature.id}
                    className={`border-b border-[#cccccc] ${
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
                          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-6">
                            {feature.content}
                          </p>
                          <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                            <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                              Request Demo
                            </span>
                          </Link>
                        </div>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img
              className="w-full max-w-[530px] h-auto"
              alt="Features illustration"
              src="/figmaAssets/frame-39977.svg"
            />
          </div>
        </Container>
      </div>

      {/* About Us Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img
              className="w-full max-w-[622px] h-auto rounded-[20px] object-cover"
              alt="Restaurant interior"
              src="/figmaAssets/rectangle-435.png"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-10">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              About us
            </h2>

            <div className="flex flex-col gap-5">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                EasyReserv is dedicated to revolutionizing business
                management. Our journey began with a simple concept: to make
                business operations simpler, more efficient, and profitable.
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                Join us on this exciting journey and redefine the way you
                manage your business.
              </p>
            </div>

            <div>
              <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  Request Demo
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Stats Section */}
      <div className="w-full py-12 bg-[#282828]">
        <Container>
          {bottomStats.map((stat, index) => (
            <div
              key={index}
              className={`col-span-12 md:col-span-4 flex flex-col items-center justify-center gap-2.5 ${
                index < bottomStats.length - 1
                  ? "md:border-r md:border-[#ffffff40]"
                  : ""
              }`}
            >
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px] text-center">
                {stat.value}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center max-w-[240px]">
                {stat.label}
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* CTA Section 1 */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12">
            <div className="flex flex-col items-start justify-center gap-8 p-8 md:p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
              <div className="flex flex-col items-start gap-4 w-full relative z-10 max-w-xl">
                <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-3xl md:text-4xl tracking-[0] leading-10">
                  Start Optimizing Your Business Today!
                </h2>

                <Link href="/pricing" className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    Become a partner
                  </span>
                </Link>
              </div>

              <img
                className="absolute -top-11 right-1/3 w-[367px] h-[366px] opacity-30"
                alt="Logo icon"
                src="/figmaAssets/logo-icon-1.svg"
              />

              <img
                className="absolute top-1/2 -translate-y-1/2 right-6 w-[323px] h-[204px]"
                alt="Group"
                src="/figmaAssets/group.png"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Unlock Future Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-10">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              Unlock the Future of Business Management
            </h2>

            <div className="flex flex-col gap-4">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
                Take a leap towards efficiency, profitability, and success. Join
                the growing community of businesses transforming the way they
                operate. Embrace innovation, enhance your customer experience,
                and elevate your business to new heights.
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
                Are you ready to optimize your business and outperform the
                competition?
              </p>
            </div>

            <div>
              <Link href="/pricing" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  Start your journey!
                </span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img
              className="w-full max-w-[530px] h-auto"
              alt="Mobile app mockup"
              src="/figmaAssets/20901966-mobileapp-mockup1-copy-1.png"
            />
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-16 bg-[#282828]">
        <Container>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-8">
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
                What is EasyReserv
              </h2>

              <p className="[font-family:'Onest',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[27px]">
                EasyReserv is a comprehensive solution for managing and optimizing
                your business. Mobile reservations, employee management, business
                insights, inventory management, and other features are available.
                You can save time, increase revenue, improve the client
                experience, cut costs, and increase productivity by utilizing our
                platform.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
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
                  className="border-b border-[#3f4e5b]"
                >
                  <AccordionTrigger className="px-0 py-5 hover:no-underline">
                    <span className="text-left text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  {item.answer && (
                    <AccordionContent className="px-0 pb-5">
                      <p className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0]">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </div>

      {/* Download App Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
            <img
              className="w-full max-w-[530px] h-auto object-contain"
              alt="Mobile app mockup"
              src="/figmaAssets/20901989-mobileapp-mockup4-copy.png"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-10 order-1 lg:order-2">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              Download the EasyReserv App
            </h2>

            <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
              Experience the convenience of managing your business on the go
              with the EasyReserv mobile app. Seamlessly handle reservations,
              track inventory, and access business insights anytime, anywhere.
              Empower your team and enhance customer satisfaction with just a
              few taps. Download now and unlock a world of efficiency at your
              fingertips!
            </p>

            <div className="flex flex-col gap-4">
              <div className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0]">
                Available on
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://bit.ly/4c6yKJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity h-12"
                >
                  <img
                    className="h-full w-auto"
                    alt="Download on the App Store"
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1722556800"
                  />
                </a>
                <a
                  href="https://bit.ly/49Ce2Q1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity h-12"
                >
                  <img
                    className="h-full w-auto object-contain"
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section 2 */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12">
            <div className="flex flex-col items-start justify-center gap-8 p-8 md:p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
              <div className="flex flex-col items-start gap-4 w-full relative z-10 max-w-xl">
                <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-3xl md:text-4xl tracking-[0] leading-10">
                  Start Optimizing Your Business Today!
                </h2>

                <Link href="/pricing" className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    Start your journey!
                  </span>
                </Link>
              </div>

              <img
                className="absolute -top-11 right-1/3 w-[367px] h-[366px] opacity-30"
                alt="Logo icon"
                src="/figmaAssets/logo-icon-1.svg"
              />

              <img
                className="absolute top-1/2 -translate-y-1/2 right-6 w-[323px] h-[204px]"
                alt="Group"
                src="/figmaAssets/group-1.png"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
