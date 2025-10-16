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
import { Container } from "@/components/Container";

const heroFeatures = [
  {
    icon: "/figmaAssets/icon-5.svg",
    title: "Eficiență în timp",
    description: "Concentrează-te pe livrarea serviciilor de calitate. Noi automatizăm pașii repetitivi și scurtăm timpii operaționali.",
    height: "h-auto min-h-[200px]",
  },
  {
    icon: "/figmaAssets/icon-5.svg",
    title: "Accesibilitate",
    description:
      "Ajungi la un public mai larg, inclusiv la persoane cu dizabilități, cu interfețe moderne și procese simple de rezervare.",
    height: "h-auto min-h-[221px]",
  },
  {
    icon: "/figmaAssets/icon-5.svg",
    title: "Control acces",
    description:
      "Controlează accesul angajaților în sistem prin roluri și permisiuni. Datele rămân în siguranță și respectă confidențialitatea.",
    height: "h-auto",
  },
];

const getFeaturesByIndustry = (industry: string) => {
  const featuresByIndustry: Record<string, {
    employeeManagement: Array<{title: string, description: string}>,
    businessInsights: Array<{title: string, description: string}>,
    inventoryManagement: Array<{title: string, description: string}>,
    customerEngagement: Array<{title: string, description: string}>
  }> = {
    restaurante: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Îți oferim instrumente ca să-ți gestionezi ușor echipa: planificarea turelor (ospătari, bucătari, bar), pontaj, performanță. Ai control complet.",
        },
        {
          title: "Management financiar precis",
          description: "Rămâi la zi cu încasările și plățile: gestiune de debit/credit, închideri corecte de zi, sănătate financiară clară pe locație.",
        },
        {
          title: "Profiluri complete de clienți",
          description: "Cunoaște-ți oaspeții și personalizează experiența: istoric rezervări, preferințe (mese, alergeni, vinuri), note pentru servire.",
        },
        {
          title: "Configurare flexibilă a afacerii",
          description: "Configurezi rapid restaurantul tău: săli/terase, plan de mese, roluri/permisiuni, fluxuri de lucru. Platforma se adaptează nevoilor tale.",
        },
        {
          title: "Management meniuri și servicii",
          description: "Creezi și actualizezi meniurile cu ușurință: categorii, prețuri, meniuri de prânz/promo, variante și opționale. Totul mereu la zi și atrăgător.",
        },
        {
          title: "Stocare facilă a documentelor",
          description: "Stochezi în siguranță documente importante: facturi, NIR-uri, contracte, dosare angajați. Task-urile administrative devin simple.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Vezi clar ce se întâmplă în restaurant: vânzări, marje, rotația meselor, timpi de servire, productivitate. Iei decizii pe date reale.",
        },
        {
          title: "Gestionare fluentă a comenzilor",
          description: "Optimizezi fluxul de comenzi din sală și livrare: preluare, transmitere la bucătărie/bar, urmărire status, predare rapidă — satisfacție mai mare a clienților.",
        },
      ],
      inventoryManagement: [
        {
          title: "Management eficient al stocurilor",
          description: "Monitorizezi ingredientele fără efort: rețetar, scădere automată la vânzare, alerte 'low stock', inventare ghidate. Ai mereu ce trebuie pe stoc.",
        },
        {
          title: "Managementul furnizorilor",
          description: "Administrezi relațiile cu furnizorii și comanda de aprovizionare: liste de prețuri, comenzi, recepții — lanț de aprovizionare fluent.",
        },
        {
          title: "Managementul flotei de transport",
          description: "Dacă livrezi la domiciliu sau între locații, gestionezi eficient mașinile/curierii, astfel încât operațiunile să meargă lin.",
        },
      ],
      customerEngagement: [
        {
          title: "Instrument de marketing puternic",
          description: "Crește vânzările cu funcțiile de marketing din aplicația mobilă: oferte, promoții, noutăți trimise direct pe telefonul clienților.",
        },
        {
          title: "Marketing țintit",
          description: "Folosești datele pentru a segmenta publicul (vârstă, interese, preferințe) și trimiți mesaje personalizate care cresc engagementul.",
        },
        {
          title: "Rezervări simplificate",
          description: "Administrezi rezervările ușor — atât pentru restaurant, cât și pentru clienți: confirmări, remindere, alocare la masă, experiență fluidă cap-coadă.",
        },
      ],
    },
    cafenele: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Planifici turele barista/casier, pontaj și targeturi pe oră. Vizibilitate pe productivitate și timpi de servire în orele de vârf.",
        },
        {
          title: "Management financiar precis",
          description: "Închidere de zi corectă, evidență încasări/plăți, reconcilieri rapide. Vezi marja pe produs și costul ingredientelor în timp real.",
        },
        {
          title: "Profiluri complete de clienți",
          description: "Istoric comenzi (tip cafea, lapte, siropuri), preferințe & alergeni. Experiență personalizată la următoarea vizită.",
        },
        {
          title: "Configurare flexibilă a punctului de vânzare",
          description: "Case rapide, roluri & permisiuni, layout de produse pe ecran, preset-uri și shortcut-uri pentru top vânzări.",
        },
        {
          title: "Meniu & servicii",
          description: "Meniuri pe momente ale zilei (morning/afternoon), variante (mărime, lapte, shot extra), bundle-uri și oferte.",
        },
        {
          title: "Stocare facilă documente",
          description: "Facturi, NIR-uri, contracte furnizori și dosare angajați — păstrate sigur, ușor de găsit.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Vânzări pe oră/zi, top SKU, cost băutură, marjă, productivitate pe casier/barista. Decizii rapide pentru program și sortiment.",
        },
        {
          title: "Gestionare fluentă a comenzilor",
          description: "Flux sală–bar clar: comandă → preparare → 'ready for pickup'. Cozi mai scurte, predare rapidă, clienți mai mulțumiți.",
        },
      ],
      inventoryManagement: [
        {
          title: "Management eficient al stocurilor",
          description: "Rețetar pe băuturi, scădere automată la vânzare, alerte 'low stock', inventare ghidate. Ții pierderile sub control.",
        },
        {
          title: "Managementul furnizorilor",
          description: "Comenzi de aprovizionare, liste de prețuri, recepții și trasabilitate. Ai ingredientele potrivite la timp.",
        },
        {
          title: "Management flotă/transport (opțional)",
          description: "Pentru locații multiple sau livrări: gestiune curieri, rute și transferuri între puncte.",
        },
      ],
      customerEngagement: [
        {
          title: "Instrument de marketing puternic",
          description: "Promoții 'happy hour', campanii în orele mai libere, push/SMS cu oferte și noutăți — direct pe telefonul clientului.",
        },
        {
          title: "Marketing țintit",
          description: "Segmente pe frecvență, preferințe (espresso, latte, alternative vegane), cupoane personalizate care aduc reveniri.",
        },
        {
          title: "Pre-comenzi & ridicare programată",
          description: "Clientul comandă din timp și ridică la oră; tu netezești vârfurile și reduci aglomerația la tejghea.",
        },
      ],
    },
    saloane: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Planifici programul pe specialiști (stilist, colorist, barber, cosmetician), ture, pontaj și comision. Ținte/bonusuri și vizibilitate pe performanță.",
        },
        {
          title: "Management financiar precis",
          description: "Închidere de zi corectă, evidență încasări/plăți, vânzări pe servicii & produse retail, rapoarte pe comisioane.",
        },
        {
          title: "Profiluri complete de clienți",
          description: "Istoric vizite, tehnici & nuanțe folosite, alergeni, poze înainte/după, preferințe. Experiență personalizată la fiecare revenire.",
        },
        {
          title: "Configurare flexibilă a afacerii",
          description: "Servicii, durate, timpi tampon, resurse (scaun/sală/aparat), prețuri diferențiate pe specialist. Roluri & permisiuni.",
        },
        {
          title: "Meniu de servicii & pachete",
          description: "Coafor, colorare, tratamente, manichiură/pedichiură, barbering, epilare, cosmetică – cu pachete și opționale (tratament, masaj scalp etc.).",
        },
        {
          title: "Stocare facilă documente",
          description: "Contracte, consimțăminte, fișe client, facturi – stocate sigur, acces rapid când ai nevoie.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Venit/oră pe specialist, rata de ocupare, servicii profitabile, vânzare retail, CLV & frecvență vizite. Decizii pe date, nu pe intuiție.",
        },
        {
          title: "Flux comenzi/servicii fluent",
          description: "Programare → confirmare → execuție → încasare → recomandare/următoarea vizită. Mai puține întârzieri, clienți mai mulțumiți.",
        },
      ],
      inventoryManagement: [
        {
          title: "Consum pe serviciu (rețetar)",
          description: "Scădere automată pentru vopsele, oxidant, tratamente, consumabile. Alerte 'low stock', inventare ghidate.",
        },
        {
          title: "Managementul furnizorilor",
          description: "Liste de prețuri, comenzi, recepții – ai materiale la timp și costuri sub control.",
        },
        {
          title: "Logistică internă (multi-locație)",
          description: "Transfer produse între saloane, trasabilitate lot/expirare pentru siguranță și conformitate.",
        },
      ],
      customerEngagement: [
        {
          title: "Programări & remindere automate",
          description: "Confirmări prin SMS/Email/Push, reamintiri inteligente, reprogramare rapidă. No-show ↓ semnificativ.",
        },
        {
          title: "Abonamente & pachete",
          description: "Ședințe recurente (coafor, manichiură, tratamente), carduri cadou, punch-card. Recurență și venit stabil.",
        },
        {
          title: "Marketing țintit",
          description: "Campanii pe segmente (serviciu preferat, frecvență, zile scurse), recomandări post-serviciu, review & before/after.",
        },
      ],
    },
    barbershop: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Planifici programul pe specialiști (stilist, colorist, barber, cosmetician), ture, pontaj și comision. Ținte/bonusuri și vizibilitate pe performanță.",
        },
        {
          title: "Management financiar precis",
          description: "Închidere de zi corectă, evidență încasări/plăți, vânzări pe servicii & produse retail, rapoarte pe comisioane.",
        },
        {
          title: "Profiluri complete de clienți",
          description: "Istoric vizite, tehnici & nuanțe folosite, alergeni, poze înainte/după, preferințe. Experiență personalizată la fiecare revenire.",
        },
        {
          title: "Configurare flexibilă a afacerii",
          description: "Servicii, durate, timpi tampon, resurse (scaun/sală/aparat), prețuri diferențiate pe specialist. Roluri & permisiuni.",
        },
        {
          title: "Meniu de servicii & pachete",
          description: "Coafor, colorare, tratamente, manichiură/pedichiură, barbering, epilare, cosmetică – cu pachete și opționale (tratament, masaj scalp etc.).",
        },
        {
          title: "Stocare facilă documente",
          description: "Contracte, consimțăminte, fișe client, facturi – stocate sigur, acces rapid când ai nevoie.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Venit/oră pe specialist, rata de ocupare, servicii profitabile, vânzare retail, CLV & frecvență vizite. Decizii pe date, nu pe intuiție.",
        },
        {
          title: "Flux comenzi/servicii fluent",
          description: "Programare → confirmare → execuție → încasare → recomandare/următoarea vizită. Mai puține întârzieri, clienți mai mulțumiți.",
        },
      ],
      inventoryManagement: [
        {
          title: "Consum pe serviciu (rețetar)",
          description: "Scădere automată pentru vopsele, oxidant, tratamente, consumabile. Alerte 'low stock', inventare ghidate.",
        },
        {
          title: "Managementul furnizorilor",
          description: "Liste de prețuri, comenzi, recepții – ai materiale la timp și costuri sub control.",
        },
        {
          title: "Logistică internă (multi-locație)",
          description: "Transfer produse între saloane, trasabilitate lot/expirare pentru siguranță și conformitate.",
        },
      ],
      customerEngagement: [
        {
          title: "Programări & remindere automate",
          description: "Confirmări prin SMS/Email/Push, reamintiri inteligente, reprogramare rapidă. No-show ↓ semnificativ.",
        },
        {
          title: "Abonamente & pachete",
          description: "Ședințe recurente (coafor, manichiură, tratamente), carduri cadou, punch-card. Recurență și venit stabil.",
        },
        {
          title: "Marketing țintit",
          description: "Campanii pe segmente (serviciu preferat, frecvență, zile scurse), recomandări post-serviciu, review & before/after.",
        },
      ],
    },
  };

  return featuresByIndustry[industry] || featuresByIndustry.restaurante;
};

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

  const currentFeatures = getFeaturesByIndustry(selectedIndustry);
  const employeeManagementFeatures = currentFeatures.employeeManagement;
  const businessInsightsFeatures = currentFeatures.businessInsights;
  const inventoryManagementFeatures = currentFeatures.inventoryManagement;
  const customerEngagementFeatures = currentFeatures.customerEngagement;

  return (
    <section className="relative z-10 flex flex-col w-full items-center">
      <Container className="py-[50px]">
        <div className="relative z-20 col-span-12 md:col-span-6 flex flex-col items-start justify-center gap-5">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-5xl tracking-[0] leading-[normal]">
            <span className="text-[#282828]">Crește-ți afacerea și </span>
            <span className="text-[#fe9800]">eficiența</span>
            <span className="text-[#282828]">
              {" "}
              în multiple industrii
            </span>
          </h1>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[20.8px]">
            Fie că ai un restaurant, un salon sau orice alt tip de business, EasyReserv se adaptează nevoilor tale: rezervări, POS, stocuri, rapoarte și automatizări – totul într-o singură platformă.
          </p>

          <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center" data-testid="button-explore-plans">
            <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
              Explorează planurile
            </span>
          </Link>
        </div>

        <div className="col-span-12 md:col-span-6 flex items-start gap-5">
          <div className="flex flex-col items-start gap-5">
            {heroFeatures.slice(0, 2).map((feature, index) => (
              <Card
                key={index}
                className={`w-[255px] ${feature.height} bg-[#2d2c651a] rounded-[20px] border-[#2d2c65]`}
              >
                <CardContent className="flex flex-col items-start gap-2.5 p-5">
                  <img
                    className="w-[53px] h-[53px]"
                    alt="Icon"
                    src={feature.icon}
                  />
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[26px]">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[20.8px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-[255px] bg-[#2d2c651a] rounded-[20px] border-[#2d2c65]">
            <CardContent className="flex flex-col items-start gap-2.5 p-5">
              <img
                className="w-[53px] h-[53px]"
                alt="Icon"
                src={heroFeatures[2].icon}
              />
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[26px]">
                {heroFeatures[2].title}
              </h3>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[20.8px]">
                {heroFeatures[2].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>

      <Container className="py-[50px]">
        <div className="col-span-12 flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl text-center tracking-[0] leading-[normal]">
            Descoperă funcționalitățile care ne diferențiază pentru
          </h2>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833] [font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-lg md:text-2xl cursor-pointer appearance-none bg-no-repeat bg-right pr-12"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%232d2c65' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center'
            }}
            data-testid="select-industry"
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-5">
          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-[normal]">
                Managementul angajaților și al afacerii
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
                Perspective de business și analitice
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
                Managementul stocurilor și al lanțului de aprovizionare
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
                Implicarea clienților și marketing
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
