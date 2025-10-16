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

const getFeaturesByIndustry = (industry: string) => {
  const featuresByIndustry: Record<string, Array<{id: string, title: string, content: string}>> = {
    restaurante: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Booking online + hartă mese, waitlist și confirmări automate → −20–35% no-shows.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Bon fiscal, split note, meniuri/combos, mod offline, imprimante multiple.",
      },
      {
        id: "digital-kitchen",
        title: "Bucătărie digitală & Timere (KDS)",
        content: "Tichete pe ecran, countdown per fel, alerte \"late\" → −25% timp de servire.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Rețetare (COGS)",
        content: "Scădere automată la vânzare, rețetar și inventar ghidat → 0 erori la final.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Vânzări, marjă, rotație mese, timpi servire, comparații pe locații.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Confirmări/remindere, \"5 min rămase\", alerte stoc & \"late\".",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    cafenele: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Pre-comenzi din mobil și ridicare la oră fixă, cozi mai scurte în orele de vârf.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Vânzare ultra-rapidă cu preset-uri; bon fiscal în <2 secunde.",
      },
      {
        id: "operations",
        title: "Operațiuni & Pregătire",
        content: "Ecran barista/patiserie, prioritizare automată pe comenzi rapide.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Ingrediente",
        content: "Dozare ingrediente, alerte \"low stock\" pentru orele de vârf.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Vânzări pe oră/produse, waste, productivitate casieri.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Ready-for-pickup, happy hour, push la off-peak.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    saloane: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Programări cu selectare specialist/serviciu, pachete și abonamente.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Pachete/abonamente, vânzare produse retail, pontaj servicii.",
      },
      {
        id: "operations",
        title: "Calendar operațional",
        content: "Calendar operațional pe fotolii/săli, timp ocupat vs liber.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Consum",
        content: "Consum pe serviciu (vopsea, tratamente), inventar trasabil.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Venit/ora specialist, rate no-show, top servicii & CLV.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Reamintiri înainte/după, follow-up recurență.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    barbershop: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Programări cu selectare specialist/serviciu, pachete și abonamente.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Pachete/abonamente, vânzare produse retail, pontaj servicii.",
      },
      {
        id: "operations",
        title: "Calendar operațional",
        content: "Calendar operațional pe fotolii/săli, timp ocupat vs liber.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Consum",
        content: "Consum pe serviciu (vopsea, tratamente), inventar trasabil.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Venit/ora specialist, rate no-show, top servicii & CLV.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Reamintiri înainte/după, follow-up recurență.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    hotel: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Calendar camere, restricții smart (min-stay/late-checkout), cereri speciale.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Încasare camere + extra-servicii (mic dejun, spa), taxe locale din POS.",
      },
      {
        id: "operations",
        title: "Housekeeping & Mentenanță",
        content: "Taskboard housekeeping & mentenanță cu statusuri live.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Consumabile",
        content: "Consum pe cameră (mini-bar, consumabile), stocuri pe zone.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "ADR, RevPAR, ocupare, canale & pachete.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Pre-check-in, upsell (late checkout/spa), review post-sejur.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    "chirii-auto": [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Rezervare vehicul pe interval, extra-opțiuni (scaun copil, GPS), depozit.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Facturare cu depozit, extra-kilometri, asigurări și accesorii pe linie.",
      },
      {
        id: "operations",
        title: "Planificare & Service",
        content: "Planificare revizii/ITP, status disponibil/în service/închiriat.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Piese",
        content: "Piese/consumabile, stoc accesorii (lanțuri, scaune, suporturi).",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Utilizare flotă, venit/vehicul, cost/km, downtime.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Reminder ridicare/return, alerte depășire orar/kilometri.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    fitness: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Rezervări la clase, locuri limitate, listă de așteptare și check-in din aplicație.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Abonamente, freeze, top-up credit, PT/masaj pe bon.",
      },
      {
        id: "operations",
        title: "Capacitate & Program",
        content: "Capacitate sală, program antrenori, ocupare pe intervale.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Consumabile",
        content: "Stoc suplimente & proshop, consumabile spa.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Retenție, frecvență, încărcare clase, venit/abonat.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Reamintiri clase, freeze expirare, reactivare.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    medical: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Programări pe medic/specialitate/sală, chestionar pre-vizită și reamintiri.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Servicii compuse, coplată, tipuri de plată diverse pe același bon.",
      },
      {
        id: "operations",
        title: "Flux pacient & Cabinet",
        content: "Flux recepție → investigație → încasare, timp mediu per serviciu.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Materiale medicale",
        content: "Loturi/expirări, trasabilitate materiale & consumabile.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Venit/medic, servicii profitabile, timpi de așteptare.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Remindere vizită, pregătire analiză, follow-up.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
    retail: [
      {
        id: "smart-reservations",
        title: "Rezervări inteligente (Web & Mobile)",
        content: "Sloturi de ridicare/instalare, programare consultanță în showroom.",
      },
      {
        id: "fiscal-pos",
        title: "POS fiscal & comenzi rapide",
        content: "Discounturi promo, bundle-uri, retururi și schimb pe bon.",
      },
      {
        id: "operations",
        title: "Operațiuni zilnice",
        content: "Taskuri zilnice pentru recepție marfă, facing, etichetare.",
      },
      {
        id: "inventory-cogs",
        title: "Stocuri & Inventar",
        content: "Coduri de bare, recepții rapide, inventare parțiale, FIFO.",
      },
      {
        id: "real-time-reports",
        title: "Rapoarte & KPI în timp real",
        content: "Marjă pe SKU, rotație, shrink, coș mediu.",
      },
      {
        id: "automations",
        title: "Automatizări & Notificări",
        content: "Stoc revenit, coș abandonat, cupoane segmentate.",
      },
      {
        id: "team-management",
        title: "Management echipă & permisiuni",
        content: "Roluri/permisiuni, ture, targeturi, audit log, onboarding rapid.",
      },
      {
        id: "payments-accounting",
        title: "Plăți & Integrare soft de contabilitate",
        content: "Plăți card/online, export 1C, reconciliere, documente fiscale.",
      },
    ],
  };

  return featuresByIndustry[industry] || featuresByIndustry.restaurante;
};

const bottomStats = [
  {
    value: "400",
    label: "LOCAȚII AU FOLOSIT PRODUSUL ÎN PRIMUL AN",
  },
  {
    value: "30%+",
    label: "DIN TIMPUL ANGAJAȚILOR POATE FI OPTIMIZAT",
  },
  {
    value: "80,000",
    label: "NOTIFICĂRI SUNT TRIMISE LUNAR",
  },
  {
    value: "4,600+",
    label: "UTILIZATORI ÎN PLATFORMĂ",
  },
];

const faqItems = [
  {
    question: "Pe ce dispozitive pot folosi EasyReserv?",
    answer: "Web (desktop/laptop) și mobil (iOS/Android). Avem și extensii dedicate (ex. smartwatch pentru ospătari) și suport pentru imprimante/scanere compatibile.",
  },
  {
    question: "Aveți POS fiscal disponibil?",
    answer: "Da. POS-ul EasyReserv emite bon fiscal, suportă split note, reduceri, mod offline și imprimante multiple. Se conectează cu stocurile și rapoartele în timp real.",
  },
  {
    question: "Cum mă ajută pe industria mea?",
    answer: "Avem optimizări pe industrie: de la timere KDS și rotație mese în restaurante, la abonamente & programări în beauty/fitness, ocupare camere în hoteluri, tarifare pe interval la chirii auto, loturi/expirări în medical și coduri de bare în retail.",
  },
  {
    question: "Cât durează implementarea (go-live)?",
    answer: "De la 1 zi pentru o singură locație până la 1–2 săptămâni pentru rețele (import meniuri/servicii, utilizatori, stocuri, training).",
  },
  {
    question: "Trebuie să schimb hardware-ul?",
    answer: "De regulă, nu. Lucrăm cu tablete/PC-uri curente și imprimante compatibile. Dacă e nevoie, recomandăm modele testate de noi.",
  },
  {
    question: "Se integrează cu 1C și plăți cu cardul?",
    answer: "Da. Export contabil în 1C, reconciliere documente și integrare cu procesatori de plată (online & la POS), plus SMS/Email pentru notificări.",
  },
  {
    question: "Ce rapoarte oferă platforma?",
    answer: "Vânzări, marje, rotație mese, timpi de servire, productivitate angajați, KPI pe locații/perioade, COGS pe rețetă, utilizare resurse (vehicul/sală/aparat) – live.",
  },
  {
    question: "Cum reduceți no-show-urile și întârzierile?",
    answer: "Cu confirmări & remindere automate, waitlist, alerte \"5 min rămase\", timere pe producție și notificări pentru comenzi gata/întârziate.",
  },
  {
    question: "Ce planuri de preț aveți? (ex. Restaurante)",
    answer: "Abonament per locație + add-ons pe utilizator/modul. Pentru Restaurante: Basic €50, Standard €125, Pro €200, Enterprise la cerere – toate cu trial gratuit. (Pentru alte industrii, planurile apar după ce selectezi industria.)",
  },
  {
    question: "Datele mele sunt în siguranță?",
    answer: "Da. Acces pe roluri, audit log, criptare în tranzit, backupuri regulate și export de date la cerere. Tu ești proprietarul datelor tale.",
  },
  {
    question: "Ce suport oferiți?",
    answer: "Onboarding asistat, training pentru echipă, suport prioritar pe email/chat/telefon și materiale de lucru (ghiduri & video).",
  },
  {
    question: "Pot migra ușor din alt sistem?",
    answer: "Da. Importăm meniuri/servicii, clienți, stocuri și istorice esențiale din fișiere sau prin integrări, cu verificări la pre-go-live.",
  },
  {
    question: "Pot începe gratuit?",
    answer: "Da. Oferim perioadă de probă pe o locație ca să testezi fluxurile înainte de contractare.",
  },
  {
    question: "Se poate personaliza pentru nevoile mele?",
    answer: "În afară de setările standard, avem add-ons și automatizări configurabile; pentru cerințe avansate, oferim proiecte Enterprise.",
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
  const [openAccordion, setOpenAccordion] = React.useState("smart-reservations");
  const [openFaqAccordion, setOpenFaqAccordion] = React.useState("faq-0");

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

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    setOpenAccordion("smart-reservations");
  };

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
            <select
              value={selectedIndustry}
              onChange={(e) => handleIndustryChange(e.target.value)}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833] [font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-lg cursor-pointer appearance-none bg-no-repeat bg-right pr-12"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%232d2c65' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center'
              }}
            >
              {industries.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[480px]">
              <Accordion
                type="single"
                collapsible
                value={openAccordion}
                onValueChange={setOpenAccordion}
                className="w-full"
              >
                {getFeaturesByIndustry(selectedIndustry).map((feature) => (
                  <AccordionItem
                    key={feature.id}
                    value={feature.id}
                    className={`border-b border-[#cccccc] ${
                      !feature.content ? "opacity-50" : ""
                    }`}
                  >
                    <AccordionTrigger className="px-0 py-5 hover:no-underline">
                      <span className={`[font-family:'Onest',Helvetica] font-normal text-xl tracking-[0.40px] leading-7 transition-colors ${
                        openAccordion === feature.id ? 'text-[#282828]' : 'text-[#999999]'
                      }`}>
                        {feature.title}
                      </span>
                    </AccordionTrigger>
                    {feature.content && (
                      <AccordionContent className="px-0 pb-5">
                        <div className="flex flex-col gap-6">
                          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-6">
                            {feature.content}
                          </p>
                          <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-5 py-2.5 shadow-sm inline-flex items-center justify-center w-fit">
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
              alt="EasyReserv Co-Founders presentation"
              src="/figmaAssets/about-founders.jpg"
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
                  Optimizează-ți afacerea chiar azi!
                </h2>

                <Link href="/pricing" className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    Devino partener
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
            <div className="flex flex-col gap-4">
              <p className="[font-family:'Onest',Helvetica] font-semibold text-[#fe9800] text-lg tracking-[0] leading-6">
                All-in-One & rezultate
              </p>
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
                Dezleagă viitorul managementului de business
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
                Treci la o platformă All-in-One pentru rezervări, POS, stocuri, rapoarte și automatizări. Simplifici fluxurile, reduci timpii morți și iei decizii pe date reale. Alătură-te companiilor care și-au crescut veniturile și controlul operațional cu EasyReserv.
              </p>
            </div>

            <div>
              <Link href="/pricing" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  Începe călătoria ta
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
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              Ce este EasyReserv?
            </h2>

            <p className="[font-family:'Onest',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[27px]">
              EasyReserv este o platformă All-in-One pentru rezervări, POS fiscal, comenzi/KDS, stocuri & rețetare, rapoarte în timp real și automatizări. E construită pe fluxuri optimizate pe industrie (restaurante, cafenele/kiosk, beauty, hoteluri/pensiuni, chirii auto, fitness, medical, retail) și se integrează rapid cu 1C, plăți și hardware-ul existent.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Accordion
              type="single"
              collapsible
              value={openFaqAccordion}
              onValueChange={setOpenFaqAccordion}
              className="w-full"
            >
              {faqItems.slice(0, 7).map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-[#3f4e5b]"
                >
                  <AccordionTrigger className="px-0 py-5 hover:no-underline">
                    <span className={`text-left text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal tracking-[-0.36px] transition-colors ${
                      openFaqAccordion === `faq-${index}` ? 'text-white' : 'text-[#999999]'
                    }`}>
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

          <div className="col-span-12 lg:col-span-4">
            <Accordion
              type="single"
              collapsible
              value={openFaqAccordion}
              onValueChange={setOpenFaqAccordion}
              className="w-full"
            >
              {faqItems.slice(7).map((item, index) => (
                <AccordionItem
                  key={index + 7}
                  value={`faq-${index + 7}`}
                  className="border-b border-[#3f4e5b]"
                >
                  <AccordionTrigger className="px-0 py-5 hover:no-underline">
                    <span className={`text-left text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal tracking-[-0.36px] transition-colors ${
                      openFaqAccordion === `faq-${index + 7}` ? 'text-white' : 'text-[#999999]'
                    }`}>
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
              Aplicația mobilă EasyReserv
            </h2>

            <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
              Ia operațiunile cu tine, în teren sau în sală. Procesezi rezervări, emiți bonuri, urmărești comenzi și inventar, iar dashboard-urile îți arată vânzările și KPI-urile în timp real. Notificările te anunță când sunt întârzieri, comenzi gata sau stocuri pe cale să se termine. Funcționează pe iOS și Android, cu permisiuni pe roluri pentru ospătari, casieri, manageri sau tehnicieni.
            </p>

            <div className="flex flex-col gap-4">
              <div className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0]">
                Disponibil pe
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
                  Optimizează-ți afacerea chiar azi!
                </h2>

                <Link href="/pricing" className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    Începe călătoria ta
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
