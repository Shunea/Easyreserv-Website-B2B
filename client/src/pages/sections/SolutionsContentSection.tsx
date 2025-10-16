import { useState } from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const industryFeatures: Record<string, Array<{ title: string; description: string }>> = {
  "restaurante": [
    { title: "Rezervări & Waitlist", description: "Booking online cu hartă mese, confirmări/remindere anti no-show, alocare inteligentă. Rotația meselor crește, iar golurile se reduc." },
    { title: "POS fiscal & comenzi", description: "Bon fiscal, split note, reduceri, meniuri/combos, imprimante multiple. Viteză la încasare și mai puține erori la casă." },
    { title: "Bucătărie digitală (KDS) & Timere", description: "Tichete pe ecran, countdown per fel, alerte 'late', prioritate automată. Timpul de servire scade vizibil." },
    { title: "Stocuri & Rețetare (COGS)", description: "Scădere automată la vânzare, rețetar per produs, inventar ghidat și alerte 'low stock'. Ții costurile sub control." },
    { title: "Rapoarte & KPI", description: "Vânzări, marje, rotație mese, timpi de pregătire, productivitate staff, comparații pe locații. Decizi pe date reale, nu pe presupuneri." },
    { title: "Automatizări & Notificări", description: "Remindere clienți, 'ready for pickup', alerte de întârziere și taskuri operaționale. Mai puține întârzieri, mai multă satisfacție." }
  ],
  "cafenele": [
    { title: "Preset-uri POS & comenzi rapide", description: "Produse favorite, bon în câteva secunde, cozi mai scurte la orele de vârf." },
    { title: "Rețetar simplu pe ingrediente", description: "Dozare la gram, alerte 'low stock', control al pierderilor." },
    { title: "Pre-comenzi & ridicare programată", description: "Clienții comandă din timp, tu netezești vârfurile de trafic." },
    { title: "Rapoarte pe oră & SKU", description: "Vânzări pe intervale, top produse, productivitate pe casier." },
    { title: "Loyalty & cupoane", description: "Card de puncte, campanii push în off-peak, reveniri mai dese." },
    { title: "Integrare plăți & reconciliere", description: "Închideri de zi corecte, rapoarte clare către contabilitate." }
  ],
  "saloane": [
    { title: "Programări cu specialist & resurse", description: "Sloturi curate, servicii combinate, alocare scaun/sală. No-show scade, planificarea devine transparentă." },
    { title: "Abonamente & pachete", description: "Recurență previzibilă, oferte personalizate, venit stabil." },
    { title: "CRM clienți", description: "Istoric, preferințe, notițe, recomandări de servicii. CLV crește." },
    { title: "POS & retail", description: "Servicii + produse pe același bon, discounturi controlate, rapoarte mixte." },
    { title: "Rapoarte pe specialist", description: "Venit/oră, ocupare, servicii profitabile, targeturi." },
    { title: "Remindere & follow-up", description: "Reamintiri automate înainte/după vizită, recenzii, reprogramări rapide." }
  ],
  "hoteluri": [
    { title: "Calendar camere & restricții smart", description: "Min-stay, late checkout, blocări sezoniere; ocupare crescută și management simplu." },
    { title: "Check-in/Check-out fluid", description: "Tarife, taxe locale, garanții, extra-servicii pe notă din POS." },
    { title: "Pachete & upsell", description: "Mic dejun, SPA, transfer; venitul pe cameră crește natural." },
    { title: "Rapoarte ADR/RevPAR", description: "Tarife, canale, pachete – vezi clar ce funcționează." },
    { title: "Automatizări oaspeți", description: "Pre-check-in, mesaje în timpul sejurului, review post-check-out." },
    { title: "Integrare plăți", description: "Preautorizări, deblocări, reconciliere, închideri corecte." }
  ],
  "chirie-auto": [
    { title: "Rezervări pe interval & tarifare dinamică", description: "Disponibilitate în timp real, tarife pe sezon/zi, add-ons (scaun copil, GPS)." },
    { title: "Mentenanță & daune", description: "Dosare vehicul, alerte revizii/ITP, istoric intervenții. Cost/km sub control." },
    { title: "Facturare cu depozit", description: "Garanții, extra-kilometri, accesorii pe linie – totul transparent." },
    { title: "Contracte & documente", description: "Generare, semnare și stocare sigură." },
    { title: "Rapoarte pe vehicul", description: "Utilizare, venit, downtime, profitabilitate." },
    { title: "Notificări ridicare/return", description: "Disciplina fluxul și reduci întârzierile." }
  ],
  "fitness": [
    { title: "Programări clase & waitlist", description: "Locuri limitate, eliberări automate, confirmări & remindere. Clasele se umplu corect." },
    { title: "Abonamente & freeze", description: "Tipuri flexibile, pauze controlate, retenție sănătoasă." },
    { title: "Acces controlat", description: "QR/NFC pentru intrare, statistici prezență." },
    { title: "POS & pro-shop", description: "Suplimente, echipament, servicii extra (PT, masaj)." },
    { title: "Rapoarte de retenție", description: "Cohorte, frecvență, rata de anulare – vezi clar unde intervii." },
    { title: "Campanii de reactivare", description: "Win-back bazat pe segmente și comportament." }
  ],
  "medical": [
    { title: "Calendar resurse fără suprapuneri", description: "Medic, sală, aparat; sloturi curate, flux ordonat." },
    { title: "Reception → încasare clară", description: "POS, factură/chitanță, servicii compuse și coplată." },
    { title: "Dosare & documente", description: "Fişe, acorduri, atașamente – stocate securizat." },
    { title: "Rapoarte pe servicii/medic", description: "Venit, timp mediu, profitabilitate, încărcare." },
    { title: "Remindere & pregătire", description: "Mesaje pentru analize, pregătire proceduri, no-show scăzut." },
    { title: "Export către contabilitate", description: "Flux simplu către 1C; închideri precise." }
  ],
  "retail": [
    { title: "POS rapid & promo", description: "Bundle-uri, reduceri, retururi/schimb – operare clară pentru casieri." },
    { title: "Coduri de bare & inventare", description: "Recepții rapide, FIFO, inventare parțiale ghidate." },
    { title: "Rapoarte pe SKU/marjă/rotație", description: "Decizii corecte de listă și aprovizionare." },
    { title: "Campanii & cupoane", description: "Trafic targetat, conversie monitorizată." },
    { title: "Stocuri multi-locație", description: "Vizibilitate centrală, transferuri între puncte." },
    { title: "Permisiuni & audit", description: "Acces pe roluri, acțiuni urmărite." }
  ]
};

const industries = [
  { value: "restaurante", label: "Restaurante" },
  { value: "cafenele", label: "Cafenele / Kiosk" },
  { value: "saloane", label: "Saloane & Barbershop" },
  { value: "hoteluri", label: "Hoteluri & Pensiuni" },
  { value: "chirie-auto", label: "Chirie Auto" },
  { value: "fitness", label: "Fitness & Wellness" },
  { value: "medical", label: "Medical (clinici/cabinete)" },
  { value: "retail", label: "Retail (magazine mici)" }
];

const employeeManagementFeatures = [
  {
    title: "Efficient Staff Management",
    description:
      "We provide you with the tools to manage your workforce effortlessly. From scheduling shifts to tracking performance, you'll have full control.",
  },
  {
    title: "Accurate Financial Management",
    description:
      "Stay on top of your financials with features for debit and credit management, keeping your business in great financial health.",
  },
  {
    title: "Comprehensive Client Profiles",
    description:
      "Get to know your customers better and provide them with tailored experiences by maintaining detailed client profiles.",
  },
  {
    title: "Flexible Business Setup",
    description:
      "Easily configure your business, whether it's a restaurant, barbershop, salon, or any other type. Our platform is customized to your specific needs.",
  },
  {
    title: "Menu and Service Management",
    description:
      "Create and manage menus and services with ease, ensuring your offerings are always up-to-date and attractive.",
  },
  {
    title: "Effortless Document Storage",
    description:
      "Securely store important documents, such as invoices and employee records, making your administrative tasks a breeze.",
  },
];

const businessInsightsFeatures = [
  {
    title: "Data-Driven Business Insights",
    description:
      "Gain valuable insights into your business operations. Make informed decisions based on data, helping your business grow and succeed.",
  },
  {
    title: "Seamless Order Handling",
    description:
      "Streamline your order management process to deliver efficient service and enhance customer satisfaction.",
  },
];

const inventoryManagementFeatures = [
  {
    title: "Efficient Staff Management",
    description:
      "Keep track of your inventory effortlessly, ensuring that you always have the right products in stock.",
  },
  {
    title: "Supplier Management",
    description:
      "Manage your relationships with suppliers and streamline the procurement process for a smooth supply chain operation.",
  },
  {
    title: "Transport Park Management",
    description:
      "If you rely on transportation for your business, our platform helps you manage your fleet effectively, keeping your operations running smoothly.",
  },
];

const customerEngagementFeatures = [
  {
    title: "Powerful Marketing Tool",
    description:
      "Engage your customers and boost sales through our mobile app's marketing features. Send offers, sales, and updates directly to your customers' smartphones.",
  },
  {
    title: "Targeted Marketing",
    description:
      "Leverage data to target specific customer demographics. Send personalized messages based on age, interests, and preferences to drive customer engagement.",
  },
  {
    title: "Streamlined Reservations",
    description:
      "Simplify the process of managing reservations, ensuring a seamless experience for both your business and your customers.",
  },
];

const howItWorksSteps = [
  {
    icon: "/figmaAssets/frame-1894.svg",
    title: "Select Your  Business",
  },
  {
    icon: "/figmaAssets/frame-2147223393.svg",
    title: "Select Your  Subscription Module",
  },
  {
    icon: "/figmaAssets/frame-2147223396.svg",
    title: "Business Setup Made Easy",
  },
  {
    icon: "/figmaAssets/frame-2147223394.svg",
    title: "Reservation Capabilities",
  },
  {
    icon: "/figmaAssets/frame-2147223395.svg",
    title: "Employee Access and Management",
  },
];

const businessTypes = [
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "IT Company",
    decorativeIcon: "/figmaAssets/frame-6.svg",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Beauty Clinic",
    decorativeIcon: "/figmaAssets/frame-1.svg",
  },
  {
    icon: "/figmaAssets/frame.svg",
    name: "Medical Clinic",
    decorativeIcon: "/figmaAssets/frame.svg",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Restaurant",
    decorativeIcon: "/figmaAssets/frame-7.svg",
  },
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "Catering",
    decorativeIcon: "/figmaAssets/frame-6.svg",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Entertainment",
    decorativeIcon: "/figmaAssets/frame-1.svg",
  },
  {
    icon: "/figmaAssets/frame.svg",
    name: "Beauty Salon",
    decorativeIcon: "/figmaAssets/frame.svg",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Dental Clinic",
    decorativeIcon: "/figmaAssets/frame-7.svg",
  },
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "Barbershop",
    decorativeIcon: "/figmaAssets/frame-6.svg",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Co-Working Space Rent",
    decorativeIcon: "/figmaAssets/frame-1.svg",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Accounting Firm",
    decorativeIcon: "/figmaAssets/frame-7.svg",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Hotel",
    decorativeIcon: "/figmaAssets/frame-7.svg",
  },
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "Pet Grooming Service",
    decorativeIcon: "/figmaAssets/frame-6.svg",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Conference Hall Rent",
    decorativeIcon: "/figmaAssets/frame-1.svg",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Fitness Center",
    decorativeIcon: "/figmaAssets/frame-7.svg",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Wellness Center",
    decorativeIcon: "/figmaAssets/frame-7.svg",
  },
];

const benefitsRow1 = [
  {
    icon: "/figmaAssets/icon.svg",
    title: "Time Efficiency",
    description:
      "With mobile reservations and automated employee management, businesses can save hours of administrative work, allowing staff to focus on delivering excellent service.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Increase Revenue",
    description:
      "The insights provided by our platform help identify opportunities for revenue growth, such as optimizing pricing strategies and enhancing the customer experience to encourage repeat business.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Enhance Client Experience",
    description:
      "By offering a user-friendly mobile app for reservations and payments, you improve customer convenience and satisfaction. Personalized service through CRM strengthens client relationships.",
  },
];

const benefitsRow2 = [
  {
    icon: "/figmaAssets/icon.svg",
    title: "Inventory Management",
    description:
      "Keep track of inventory levels, order supplies efficiently, and minimize wastage to control costs effectively.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Multi-Platform Access",
    description:
      "Access your ERP system from both web and mobile, providing flexibility and convenience for you and your clients.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Online  Payments",
    description:
      "Streamline transactions with integrated online payment options, making it easy for clients to pay for services directly through the app.",
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

const footerLinks = [
  { text: "About Us" },
  { text: "Solutions" },
  { text: "Pricing" },
  { text: "Contact" },
  { text: "Terms & Conditions" },
];

const socialLinks = [
  { text: "LinkedIn" },
  { text: "Facebook" },
  { text: "Instagram" },
];

export const SolutionsContentSection = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const selectedIndustryLabel = industries.find(i => i.value === selectedIndustry)?.label || "";
  const features = selectedIndustry ? industryFeatures[selectedIndustry] : [];

  return (
    <section className="relative z-10 flex flex-col w-full items-center">
      <Container className="py-[50px]">
        <div className="col-span-12 flex flex-col items-center justify-center gap-8 text-center">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-5xl tracking-[0] leading-[normal]">
            <span className="text-[#282828]">Descoperă funcționalitățile care contează în </span>
            <span className="text-[#fe9800]">industria ta</span>
          </h1>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[0] leading-[28px] max-w-4xl">
            EasyReserv conectează rezervările cu POS, stocuri, rapoarte și automatizări. Alege industria și vezi ce optimizări livrăm din prima zi.
          </p>

          <div className="w-full max-w-md">
            <label className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-base mb-3 block text-left">
              Alege industria
            </label>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger 
                className="w-full h-14 text-lg border-2 border-[#2d2c65] focus:ring-2 focus:ring-[#fe9800]" 
                data-testid="select-industry"
              >
                <SelectValue placeholder="Selectează o industrie pentru a vedea funcționalitățile relevante" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry.value} value={industry.value} data-testid={`industry-${industry.value}`}>
                    {industry.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedIndustry && (
            <div className="w-full mt-4">
              <p className="[font-family:'Onest',Helvetica] font-medium text-[#2d2c65] text-sm mb-6">
                Aceste funcționalități sunt optimizate pentru {selectedIndustryLabel}
              </p>
            </div>
          )}
        </div>

        {selectedIndustry && features.length > 0 && (
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#2d2c651a] rounded-[20px] border-[#2d2c65] hover:shadow-lg transition-shadow"
                data-testid={`feature-card-${index}`}
              >
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div className="flex items-start gap-3 w-full">
                    <CheckCircle2 className="w-6 h-6 text-[#fe9800] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-lg tracking-[0] leading-[24px] mb-2">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm tracking-[0] leading-[20px] opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!selectedIndustry && (
          <div className="col-span-12 flex items-center justify-center py-16">
            <div className="text-center max-w-md">
              <div className="w-24 h-24 bg-[#2d2c651a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-[#2d2c65]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-lg opacity-60">
                Selectează o industrie pentru a vedea funcționalitățile relevante
              </p>
            </div>
          </div>
        )}

        <div className="col-span-12 flex justify-center mt-8">
          <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-8 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center" data-testid="button-explore-plans">
            <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
              Explorează planurile
            </span>
          </Link>
        </div>
      </Container>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
            Discover the features that set our platform apart for every business
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-5">
          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-[normal]">
                Employee and Business Management
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {employeeManagementFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < employeeManagementFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-[normal]">
                Business Insights and Analytics
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {businessInsightsFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < businessInsightsFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-5">
          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-[normal]">
                Inventory and Supply Chain Management
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {inventoryManagementFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < inventoryManagementFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-[normal]">
                Customer Engagement and Marketing
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {customerEngagementFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < customerEngagementFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      <div className="flex flex-col items-center justify-center gap-5 py-[50px] w-full bg-white">
        <Container>
          <div className="col-span-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
              How It Works
            </h2>
          </div>

          <div className="col-span-12 flex flex-col items-center justify-center gap-5">
            <div className="flex items-center justify-between gap-4 w-full relative">
              <div className="absolute top-1/2 left-[40px] right-[40px] h-2 bg-[#2d2c65] -translate-y-1/2 hidden lg:block" />

              {howItWorksSteps.map((step, index) => (
                <img
                  key={index}
                  className="relative w-20 h-20 z-10"
                  alt="Frame"
                  src={step.icon}
                />
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start gap-2.5 w-full">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex-1 [font-family:'Inter',Helvetica] font-bold text-[#282828] text-xl text-center tracking-[0] leading-[26px]"
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
            What type of business do you own?
          </h2>
        </div>

        {businessTypes.map((business, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="w-full bg-white rounded-[20px] border-[#8aa2a980] shadow-[0px_13px_24px_#0000000d] overflow-hidden relative">
              <CardContent className="flex flex-col items-start gap-4 p-8">
                <img className="w-12 h-12" alt="Frame" src={business.icon} />
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-[normal]">
                  {business.name}
                </h3>
                <img
                  className="absolute top-[93px] left-[199px] w-[148px] h-[66px]"
                  alt="Frame"
                  src={business.decorativeIcon}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </Container>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[72px]">
            Simplify Your Operations,
            <br />
            Amplify Your Success
          </h2>
        </div>

        {benefitsRow1.map((benefit, index) => (
          <div key={index} className="col-span-12 md:col-span-4">
            <Card className="w-full bg-brandsnowy rounded-[20px] border-[#8aa2a980] shadow-[8px_28px_30px_#00000008]">
              <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10">
                <img
                  className="w-[58px] h-[58px]"
                  alt="Icon"
                  src={benefit.icon}
                />
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="font-bold text-[#282828] text-xl leading-[30px] [font-family:'Onest',Helvetica] tracking-[0]">
                    {benefit.title}
                  </h3>
                  <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {benefitsRow2.map((benefit, index) => (
          <div key={index} className="col-span-12 md:col-span-4">
            <Card className="w-full bg-brandsnowy rounded-[20px] border-[#8aa2a980] shadow-[8px_28px_30px_#00000008]">
              <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10">
                <img
                  className="w-[58px] h-[58px]"
                  alt="Icon"
                  src={benefit.icon}
                />
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="font-bold text-[#282828] text-xl leading-[30px] [font-family:'Onest',Helvetica] tracking-[0]">
                    {benefit.title}
                  </h3>
                  <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </Container>

      <div className="flex flex-col items-start gap-2.5 py-[50px] w-full bg-[#282828]">
        <Container>
          <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-[33px]">
            <h2 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
              What is EasyReserv
            </h2>

            <p className="font-body-large font-[number:var(--body-large-font-weight)] text-white text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
              EasyReserv is a comprehensive solution for managing and optimizing
              your business. Mobile reservations, employee management, business
              insights, inventory management, and other features are available.
              You can save time, increase revenue, improve the client
              experience, cut costs, and increase productivity by utilizing our
              platform.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-col items-start">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#3f4e5b]"
                >
                  <AccordionTrigger className="font-[number:var(--body-large-font-weight)] text-white text-[length:var(--body-large-font-size)] leading-[var(--body-large-line-height)] font-body-large tracking-[var(--body-large-letter-spacing)] [font-style:var(--body-large-font-style)] hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  {item.answer && (
                    <AccordionContent
                      className="font-[number:var(--description-font-weight)] text-white text-[length:var(--description-font-size)] leading-[var(--description-line-height)] font-description tracking-[var(--description-letter-spacing)] [font-style:var(--description-font-style)]"
                    >
                      {item.answer}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </div>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <div className="flex flex-col items-start justify-center gap-8 p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
            <div className="flex flex-col items-start gap-4 w-full relative z-10">
              <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
                Start Optimizing Your Business Today!
              </h2>
            </div>

            <Button className="h-auto bg-white rounded-xl p-4 hover:bg-white/90 relative z-10">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-base tracking-[0] leading-4">
                Become a partner
              </span>
            </Button>

            <img
              className="absolute -top-11 left-[772px] w-[367px] h-[366px]"
              alt="Logo icon"
              src="/figmaAssets/logo-icon.svg"
            />

            <img
              className="absolute top-[calc(50.00%_-_108px)] right-6 w-[323px] h-[216px]"
              alt="Group"
              src="/figmaAssets/group.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
