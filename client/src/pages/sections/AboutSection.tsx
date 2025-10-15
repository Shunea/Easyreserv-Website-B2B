import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

const topStats = [
  {
    label: "COMENZI PROCESATE LUNAR",
    value: "5000+",
  },
  {
    label: "UPTIME GARANTAT",
    value: ">99.9%",
  },
  {
    label: "CONFORMITATE",
    value: "Fiscal & 1C ready",
  },
];

const industries = [
  {
    id: "restaurante",
    title: "Restaurante",
    icon: "🍽️",
    features: [
      "Rezervări & comenzi integrate",
      "POS cu bon fiscal instant",
      "Gestionare mese & zone"
    ],
  },
  {
    id: "chirie-auto",
    title: "Chirie Auto",
    icon: "🚗",
    features: [
      "Tracking vehicule în timp real",
      "Contract digital automat",
      "Asigurări & documente"
    ],
  },
  {
    id: "fitness",
    title: "Fitness & Wellness",
    icon: "💪",
    features: [
      "Rezervări clase & antrenori",
      "Abonamente & pachete",
      "Check-in automat"
    ],
  },
  {
    id: "medical",
    title: "Clinici Medicale",
    icon: "🏥",
    features: [
      "Programări pacienți",
      "Fișă medicală digitală",
      "Reminder-uri automate"
    ],
  },
  {
    id: "retail",
    title: "Retail",
    icon: "🛍️",
    features: [
      "Inventar sincronizat live",
      "Comenzi online & în magazin",
      "Rapoarte vânzări detaliate"
    ],
  },
  {
    id: "hoteluri",
    title: "Hoteluri",
    icon: "🏨",
    features: [
      "Check-in/out digital",
      "Gestionare camere",
      "Servicii adiționale"
    ],
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
              className={`col-span-12 md:col-span-4 flex flex-col items-center justify-center gap-4 ${
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

      {/* Industrii & Module Section */}
      <div className="w-full py-16 md:py-24">
        <Container>
          <div className="col-span-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl text-center tracking-[0] leading-[52.8px] mb-4">
              Industrii & Module
            </h2>
            <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg text-center tracking-[-0.36px] leading-7 mb-12 max-w-3xl mx-auto">
              Soluții personalizate pentru fiecare tip de business
            </p>
          </div>

          {industries.map((industry) => (
            <div key={industry.id} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl">
                    {industry.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-[#2d2c65] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm leading-6">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full h-auto border-[#2d2c65] hover:bg-[#2d2c65]/5 rounded-[5px] px-4 py-3">
                  <span className="[font-family:'Onest',Helvetica] font-semibold text-[#2d2c65] text-sm">
                    Află mai mult
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* POS Section */}
      <div className="w-full py-16 bg-gradient-to-br from-[#2d2c65]/5 to-transparent">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img
              className="w-full max-w-[622px] h-auto rounded-[20px] object-cover shadow-xl"
              alt="POS interface"
              src="/figmaAssets/rectangle-435.png"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d2c65] rounded-full w-fit">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-sm">
                ✨ POS DISPONIBIL ACUM
              </span>
            </div>

            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              Transformă tableta în casă de marcat
            </h2>

            <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-7">
              Bon fiscal, split note, rabaturi, inventar live, mod offline. Integrare în &lt;15 minute, fără hardware exotic.
            </p>

            <ul className="space-y-4">
              {[
                "Print & bon fiscal automat",
                "Interface touch rapid & intuitiv",
                "Mod offline - funcționează fără internet",
                "Roluri & permisiuni configurabile"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2d2c65] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-base leading-6">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-8 py-4 shadow-sm">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  Cere activarea POS
                </span>
              </Button>
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

                <Button className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    Become a partner
                  </span>
                </Button>
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
              <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  Start your journey!
                </span>
              </Button>
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

              <img
                className="w-auto h-auto"
                alt="App store badges"
                src="/figmaAssets/frame-30297-1.svg"
              />
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

                <Button className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    Start your journey!
                  </span>
                </Button>
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

      {/* Footer */}
      <footer className="w-full py-16 bg-[#191a24]">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-4">
              <img
                className="w-14 h-14"
                alt="Logo"
                src="/figmaAssets/logo.svg"
              />

              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[33.6px]">
                EasyReserv.io
              </div>
            </div>

            <p className="opacity-75 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal max-w-md">
              EasyReserv is a versatile online booking system that enables
              businesses across various industries to manage appointments and
              reservations seamlessly, all for free.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <nav className="flex flex-col gap-4">
                {footerLinks.column1.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </nav>

              <nav className="flex flex-col gap-4">
                {footerLinks.column2.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-2">
                <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0]">
                  Available on
                </div>

                <img
                  className="w-auto h-auto"
                  alt="App store badges"
                  src="/figmaAssets/frame-30297.svg"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-[#ffffff20]">
            <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base text-center tracking-[-0.32px] leading-7">
              © EasyReserv.io 2023. All rights reserved.
            </div>

            <div className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-base text-center">
              <span className="tracking-[-0.05px] leading-7">
                Developed by
              </span>
              <span className="font-medium tracking-[0]">
                &nbsp;
              </span>
              <span className="font-bold tracking-[-0.05px] leading-7 underline">
                iShunea Tech Solutions
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
};
