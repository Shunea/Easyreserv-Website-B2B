import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";

const faqItems = [
  {
    question: "Pot accesa EasyReserv atât pe web cât și pe dispozitive mobile?",
    answer: "Da, EasyReserv este disponibil atât ca aplicație web (desktop și tabletă) cât și ca aplicație mobilă nativă pentru iOS și Android. Poți accesa toate funcționalitățile platformei de pe orice dispozitiv, cu sincronizare în timp real între toate device-urile tale.",
  },
  {
    question: "Cât durează implementarea platformei EasyReserv?",
    answer: "Implementarea EasyReserv durează între 2-5 zile în funcție de complexitatea afacerii tale. Echipa noastră te asistă la fiecare pas: configurare inițială, import date, training echipă și go-live. Nu trebuie să schimbi hardware-ul existent.",
  },
  {
    question: "Se integrează EasyReserv cu sistemul meu de contabilitate?",
    answer: "Da, EasyReserv se integrează nativ cu principalele sisteme de contabilitate precum 1C, SAP și alte soluții populare. Exportul de facturi, vânzări și rapoarte financiare se face automat, eliminând introducerea manuală a datelor.",
  },
  {
    question: "Oferă EasyReserv suport tehnic și training pentru echipa mea?",
    answer: "Absolut! Oferim suport tehnic 24/7 prin chat, email și telefon. La implementare, includem sesiuni de training pentru întreaga echipă: manageri, casieri, ospătari și bucătari. Plus acces la baza noastră de cunoștințe și tutoriale video.",
  },
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

export const FAQSection = (): JSX.Element => {
  const [openFaqAccordion, setOpenFaqAccordion] = React.useState("faq-0");

  return (
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
            {faqItems.slice(0, 9).map((item, index) => (
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
            {faqItems.slice(9).map((item, index) => (
              <AccordionItem
                key={index + 9}
                value={`faq-${index + 9}`}
                className="border-b border-[#3f4e5b]"
              >
                <AccordionTrigger className="px-0 py-5 hover:no-underline">
                  <span className={`text-left text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal tracking-[-0.36px] transition-colors ${
                    openFaqAccordion === `faq-${index + 9}` ? 'text-white' : 'text-[#999999]'
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
  );
};
