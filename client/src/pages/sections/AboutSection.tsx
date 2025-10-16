import React from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";

const calculateYearsSince2023 = (): string => {
  const startDate = new Date(2023, 0, 1); // January 2023
  const currentDate = new Date();
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  
  const totalYears = yearsDiff + monthsDiff / 12;
  
  return totalYears.toFixed(1) + "+";
};

const topStats = [
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

const features = [
  {
    id: "smart-reservations",
    title: "Rezervări inteligente (Web & Mobile)",
    content:
      "Booking online + hartă mese, waitlist, confirmări automate și prevenire no-show. Impact: −20–35% no-shows, rotație mese mai rapidă.",
  },
  {
    id: "fiscal-pos",
    title: "POS fiscal & comenzi rapide",
    content:
      "Bon fiscal, split note, reduceri, meniuri combo, mod offline, imprimante multiple. Impact: +10–15% viteză la încasare, mai puține erori la casă.",
  },
  {
    id: "digital-kitchen",
    title: "Bucătărie digitală & Timere (KDS)",
    content:
      "Tichete pe ecran, countdown per fel, alerte \"late\", prioritizare automată. Impact: −25% timp de servire, transparență între sală și bucătărie.",
  },
  {
    id: "inventory-cogs",
    title: "Stocuri & Rețetare (COGS)",
    content:
      "Scădere automată la vânzare, rețetar pe produs, alerte \"low stock\", inventar. Impact: −1.5–3% pierderi lunare, marjă controlată pe fiecare articol.",
  },
  {
    id: "real-time-reports",
    title: "Rapoarte & KPI în timp real",
    content:
      "Vânzări, marje, rotație mese, productivitate staff, comparații pe locații/intervale. Impact: decizii zilnice pe date, fără exporturi manuale.",
  },
  {
    id: "automations",
    title: "Automatizări & Notificări",
    content:
      "SMS/Push pentru confirmări, remindere, \"5 min rămase\", stoc scăzut, taskuri. Impact: mai puține întârzieri, mai multe reveniri ale clienților.",
  },
  {
    id: "team-management",
    title: "Management echipă & permisiuni",
    content:
      "Roluri, ture, targeturi, audit log; onboarding rapid pentru noi angajați. Impact: 0 \"acces greșit\", timp mai mic de instruire.",
  },
  {
    id: "payments-accounting",
    title: "Plăți & Integrare soft de contabilitate",
    content:
      "Plăți card/online, export în soft de contabilitate, reconciliere, documente fiscale. Impact: închideri de zi corecte, mai puțin timp la contabilitate.",
  },
  {
    id: "multi-platform",
    title: "Multi-platformă & multi-locație",
    content:
      "Web, iOS, Android (+ smartwatch pentru ospătari); grupare pe rețea. Impact: control centralizat, operațiuni unitare pe toate punctele.",
  },
  {
    id: "marketing-loyalty",
    title: "Marketing, Loyalty & Referral",
    content:
      "Cupoane, puncte, campanii, segmente; linkuri de recomandare și bonusuri. Impact: +8–12% frecvență vizite, CLV mai mare.",
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
  const [selectedIndustry, setSelectedIndustry] = React.useState("restaurante");

  const industries = [
    { value: "restaurante", label: "Restaurante" },
    { value: "cafenele", label: "Cafenele" },
    { value: "saloane", label: "Saloane de frumusețe" },
    { value: "barbershop", label: "Barbershopuri" },
    { value: "hotel", label: "Hotele & Pensiuni" },
    { value: "chirii-auto", label: "Chirii auto" },
    { value: "fitness", label: "Fitness" },
    { value: "medical", label: "Medical" },
    { value: "retail", label: "Retail" },
  ];

  return (
    <section className="flex flex-col items-center w-full">
      {/* Top Stats Section */}
      <div className="w-full py-12 bg-[#282828]">
        <div className="flex items-center justify-center gap-8 px-[180px]">
          {topStats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-4 ${
                index < topStats.length - 1
                  ? "border-r border-[#ffffff40]"
                  : ""
              }`}
            >
              <div className="w-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
                {stat.label}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Features Section */}
      <div className="w-full py-16 md:py-24">
        <Container>
          <div className="col-span-12 flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl text-center tracking-[0] leading-[52.8px]">
              Cele mai bune funcționalități
            </h2>
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="appearance-none bg-white border border-[#cccccc] rounded-lg px-6 py-3 pr-10 [font-family:'Onest',Helvetica] font-medium text-[#282828] text-lg cursor-pointer hover:border-[#2d2c65] focus:outline-none focus:ring-2 focus:ring-[#2d2c65] focus:border-transparent transition-colors"
              >
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#282828"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
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
                              Solicită Demo
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
              Despre EasyReserv
            </h2>

            <div className="flex flex-col gap-5">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                Am început cu o întrebare simplă: de ce e atât de complicat să faci o rezervare online? Când am conectat primul formular la un restaurant, am realizat că rezervarea e doar vârful aisbergului. Lipseau legăturile dintre rezervări, casă (POS), bucătărie, stocuri, contabilitate și rapoarte.
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                De aici a pornit EasyReserv: o platformă All-in-One care aduce totul la un loc — rezervări și waitlist, POS fiscal, comenzi & KDS, stocuri & rețetare (COGS), rapoarte în timp real și automatizări. Am construit-o pentru echipe reale, cu go-live în zile, nu luni, integrare cu 1C și plăți, fără să schimbi hardware-ul.
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                Astăzi optimizăm operațiuni în industrii diverse: restaurante și cafenele, saloane & barbershop, hoteluri & pensiuni, chirie auto, fitness & wellness, medical și retail. Misiunea noastră rămâne aceeași: mai puține sisteme, mai puține erori, decizii mai bune pe date reale – ca tu să vinzi mai mult și echipa să lucreze mai simplu.
              </p>
            </div>

            <div>
              <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  Solicită Demo
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Stats Section */}
      <div className="w-full py-12 bg-[#282828]">
        <div className="flex items-center justify-center gap-8 px-[180px]">
          {bottomStats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-2.5 ${
                index < bottomStats.length - 1
                  ? "border-r border-[#ffffff40]"
                  : ""
              }`}
            >
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px] text-center">
                {stat.value}
              </div>
              <div className="w-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
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
        <div className="flex items-start gap-5 px-[180px] max-w-[1440px] mx-auto">
          <div className="flex flex-col w-[530px] gap-8">
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

          <div className="flex flex-col w-[530px]">
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
        </div>
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
