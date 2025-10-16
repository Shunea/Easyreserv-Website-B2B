import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";

export const WhatIsEasyReservSection = (): JSX.Element => {
  return (
    <div className="w-full py-16 bg-[#282828]">
      <Container>
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-8">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
            Ce este EasyReserv?
          </h2>

          <p className="[font-family:'Onest',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[27px]">
            EasyReserv este o soluție completă pentru gestionarea și optimizarea afacerii tale. Rezervări mobile, management angajați, rapoarte business, management inventar și multe alte funcționalități sunt disponibile. Poți economisi timp, crește vânzările, îmbunătăți experiența clienților, reduce costurile și crește productivitatea folosind platforma noastră.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-[#3f4e5b]"
            >
              <AccordionTrigger className="text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px] hover:no-underline px-0 py-5">
                Pot accesa EasyReserv atât pe web cât și pe dispozitive mobile?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0] px-0 pb-5">
                Da, EasyReserv este disponibil atât ca aplicație web (desktop și tabletă) cât și ca aplicație mobilă nativă pentru iOS și Android. Poți accesa toate funcționalitățile platformei de pe orice dispozitiv, cu sincronizare în timp real între toate device-urile tale.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-[#3f4e5b]"
            >
              <AccordionTrigger className="text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px] hover:no-underline px-0 py-5">
                Cât durează implementarea platformei EasyReserv?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0] px-0 pb-5">
                Implementarea EasyReserv durează între 2-5 zile în funcție de complexitatea afacerii tale. Echipa noastră te asistă la fiecare pas: configurare inițială, import date, training echipă și go-live. Nu trebuie să schimbi hardware-ul existent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-[#3f4e5b]"
            >
              <AccordionTrigger className="text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px] hover:no-underline px-0 py-5">
                Se integrează EasyReserv cu sistemul meu de contabilitate?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0] px-0 pb-5">
                Da, EasyReserv se integrează nativ cu principalele sisteme de contabilitate precum 1C, SAP și alte soluții populare. Exportul de facturi, vânzări și rapoarte financiare se face automat, eliminând introducerea manuală a datelor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-[#3f4e5b]"
            >
              <AccordionTrigger className="text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px] hover:no-underline px-0 py-5">
                Oferă EasyReserv suport tehnic și training pentru echipa mea?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0] px-0 pb-5">
                Absolut! Oferim suport tehnic 24/7 prin chat, email și telefon. La implementare, includem sesiuni de training pentru întreaga echipă: manageri, casieri, ospătari și bucătari. Plus acces la baza noastră de cunoștințe și tutoriale video.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
