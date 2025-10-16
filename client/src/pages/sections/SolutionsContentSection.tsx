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
    hoteluri: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Planifici turele pentru recepție, housekeeping, restaurant/bar și mentenanță. Pontaj, roluri & permisiuni, task-uri zilnice și urmărirea performanței.",
        },
        {
          title: "Management financiar precis",
          description: "Închidere de zi, evidență încasări/plăți, taxe locale, rapoarte pe centre de profit (camere, mic dejun, SPA, bar/restaurant). Control pe solduri, avansuri și garanții.",
        },
        {
          title: "Profiluri complete de oaspeți",
          description: "Istoric sejururi, preferințe (tip pat, etaj, alergeni), observații speciale, motive de călătorie. Personalizare la check-in și oferte relevante la următoarea vizită.",
        },
        {
          title: "Configurare flexibilă a proprietății",
          description: "Tipuri de camere, tarife, politici (min-stay, late checkout), pachete (HB/FB), roluri & permisiuni pe echipă. Suport pentru multiple spații: camere, apartamente, săli, SPA.",
        },
        {
          title: "Documente & contracte",
          description: "Generare/stocare contracte corporate, facturi proforme, acorduri GDPR, fișe de cazare, declarații taxe — totul organizat și ușor de găsit.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Ocupare, ADR, RevPAR, venit/cameră, mix tarife, cheltuieli operaționale, performanță pe canale interne, segmentări (corporate, leisure, grupuri). Decizii zilnice pe date reale.",
        },
        {
          title: "Flux comenzi/servicii fluent",
          description: "De la rezervare la check-in, extra-servicii, consum minibar/restaurant, până la check-out și facturare — flux cap-coadă fără blocaje.",
        },
      ],
      inventoryManagement: [
        {
          title: "Consumabile & minibar",
          description: "Stocuri pe cameră și pe punct de lucru (housekeeping, bar, bucătărie). Rețetar/consum pe produs, alerte 'low stock', transferuri între puncte, inventare ghidate.",
        },
        {
          title: "Furnizori & achiziții",
          description: "Liste de prețuri, comenzi, recepții, trasabilitate — ai consumabilele și produsele la timp, cu costuri ținute sub control.",
        },
        {
          title: "Mentenanță & intervenții",
          description: "Ticketing pentru defecțiuni, planări de revizii, istoric intervenții pe cameră/echipament. Timpul de remediere scade, experiența oaspeților crește.",
        },
      ],
      customerEngagement: [
        {
          title: "Rezervări & confirmări",
          description: "Booking online direct, e-mailuri/SMS de confirmare și remindere, informări înainte de sosire (ore check-in, parcare, acces). No-show redus, oaspeți informați.",
        },
        {
          title: "Pachete & upsell",
          description: "Mic dejun, SPA, transfer, late checkout, decor aniversar — ca extra-servicii adăugate pe notă. Venitul pe cameră crește fără fricțiune.",
        },
        {
          title: "Marketing țintit",
          description: "Campanii pe segmente (corporate, cupluri, familii), voucher cadou, follow-up după plecare pentru review. Recurență și recomandări naturale.",
        },
      ],
    },
    'chirii-auto': {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Planifici ture pentru agenți, operatori parcare și șoferi (delivery/pick-up), cu pontaj, roluri & permisiuni și targeturi pe locație.",
        },
        {
          title: "Management financiar precis",
          description: "Închideri de zi corecte, avansuri și depozite gestionate clar, facturi și chitanțe, reconciliere plăți și rapoarte pe centre de profit (închirieri, extra-servicii, penalități).",
        },
        {
          title: "Profiluri complete de clienți",
          description: "KYC, date permis/pașaport, istoricul închirierilor, preferințe, incidente/penalități. Verificări rapide și sigure.",
        },
        {
          title: "Configurare flexibilă a afacerii",
          description: "Locații multiple, clase auto, politici (vârstă minimă, perioadă, franchise), tarife sezoniere/dinamice, roluri & permisiuni.",
        },
        {
          title: "Documente & contracte",
          description: "Contracte de închiriere, proces-verbal predare/primire, împuterniciri, polițe — generate, semnate electronic și stocate în siguranță.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Grad de utilizare pe vehicul/clasă, venit/km, cost/km, downtime, top extra-servicii, canale de rezervare, pierderi & debite. Decizii pe date, nu pe intuiție.",
        },
        {
          title: "Flux comenzi fluent",
          description: "Rezervare → preautorizare/depozit → predare (check-out) → monitorizare → return (check-in) → facturare/închidere. Mai puține blocaje, timp de operare mai mic.",
        },
      ],
      inventoryManagement: [
        {
          title: "Rezervări pe interval & tarifare dinamică",
          description: "Disponibilitate în timp real, tarife pe sezon/zi/ore, kilometraj inclus, livrare/colecție, taxe de locație. Calendar clar de ocupare.",
        },
        {
          title: "Mentenanță & daune",
          description: "Planuri de revizie/ITP, alerte service, evidență piese/consumabile; dosare de daună cu poze/video, constatări și costuri. Cost/km sub control.",
        },
        {
          title: "Consumabile & accesorii",
          description: "Scaun copil, lanțuri, GPS, Wi-Fi — stocuri/transferuri, tarif pe zi și pe rezervare, inventar la predare și la return.",
        },
        {
          title: "Telemetrie (opțional)",
          description: "Integrare GPS pentru poziție, kilometraj, viteză/alerte; datele intră în fișa rezervării.",
        },
      ],
      customerEngagement: [
        {
          title: "Rezervări & confirmări",
          description: "Booking online cu selecție de perioadă, clasă, asigurări și extra-opțiuni. Confirmări/remindere prin SMS/Email/Push, instrucțiuni de preluare.",
        },
        {
          title: "Up-sell & cross-sell",
          description: "Asigurări (CDW/LDW/Super), șofer adițional, roaming, livrare la adresă, fuel/full-to-full — adăugate simplu, pe notă.",
        },
        {
          title: "Marketing țintit",
          description: "Campanii pe segmente (corporate, turiști, local), cupoane și oferte sezoniere; follow-up pentru review și reînchiriere.",
        },
      ],
    },
    fitness: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Gestionezi antrenorii, instructorii, recepționerii și terapeuții. Creezi ture, stabilești comisioane, urmărești participarea și performanța individuală.",
        },
        {
          title: "Management financiar precis",
          description: "Controlezi toate încasările: abonamente, servicii unice, extra-uri și vânzări retail (suplimente, echipamente). Rapoarte zilnice și închideri automate pe POS.",
        },
        {
          title: "Profiluri complete de clienți",
          description: "Vizualizezi istoricul antrenamentelor, abonamentele active, tipurile de clase preferate, obiectivele și progresul fiecărui client. Personalizarea devine simplă.",
        },
        {
          title: "Configurare flexibilă a afacerii",
          description: "Definire locații, săli, tipuri de clase, antrenori, servicii, abonamente, tarife și reguli de acces. Platforma se adaptează tipului tău de business: sală de fitness, wellness studio sau centru sportiv complet.",
        },
        {
          title: "Documente și contracte",
          description: "Contracte de membru, acorduri medicale și consimțăminte — generate automat și stocate electronic, accesibile instant.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Vezi în timp real vânzările, abonamentele expirate, frecvența vizitelor și ratele de retenție. Rapoartele te ajută să ajustezi programul, tarifele și campaniile.",
        },
        {
          title: "Flux operațional fluent",
          description: "De la prima înscriere până la reînnoirea abonamentului, totul se face digital: contract, plată, acces, raport. Timpul de procesare scade, satisfacția crește.",
        },
      ],
      inventoryManagement: [
        {
          title: "Stocuri și produse retail",
          description: "Gestionezi vânzarea de suplimente, echipamente, accesorii și băuturi. Ai vizibilitate pe stocuri, alerte 'low stock' și inventare rapide.",
        },
        {
          title: "Furnizori & achiziții",
          description: "Ții evidența comenzilor și recepțiilor pentru consumabile (prosoape, soluții curățare, echipamente). Costuri predictibile și aprovizionare fără întreruperi.",
        },
        {
          title: "Întreținerea echipamentelor",
          description: "Planifici mentenanța și reviziile pe aparate, monitorizezi durata de utilizare și intervențiile efectuate.",
        },
      ],
      customerEngagement: [
        {
          title: "Programări & rezervări automate",
          description: "Clienții rezervă locul la clase sau antrenamente 1:1 direct din aplicație. Confirmări și remindere automate — sălile se umplu, anulările scad.",
        },
        {
          title: "Abonamente & freeze flexibil",
          description: "Creezi abonamente adaptate: lunar, zilnic, pachet ședințe, acces full sau pe ore. Opțiune 'pauză' (freeze) și reactivare automată.",
        },
        {
          title: "Loyalty & campanii de retenție",
          description: "Recompense pentru participare constantă, puncte convertibile, oferte de reînnoire. Campanii de 'win-back' pentru membrii inactivi.",
        },
        {
          title: "Marketing țintit",
          description: "Campanii pe segmente: începători, avansați, femei, familii, wellness. Notificări push sau e-mail cu oferte personalizate și noutăți.",
        },
      ],
    },
    medical: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Gestionezi programul medicilor, asistenților și personalului administrativ. Planifici ture, stabilești comisioane, vizibilitate completă pe ocupare și performanță.",
        },
        {
          title: "Management financiar precis",
          description: "Închideri de zi, evidență încasări/plăți, plăți parțiale, restanțe și reconciliere pe servicii, medici sau departamente. Integrare directă cu 1C pentru contabilitate fiscală.",
        },
        {
          title: "Profiluri complete de pacienți",
          description: "Fișe medicale digitale, istoric consultații, tratamente, rezultate de laborator, prescripții și observații. Totul centralizat într-un singur loc, cu acces controlat pe roluri.",
        },
        {
          title: "Configurare flexibilă a clinicii",
          description: "Definești cabinete, specializări, servicii medicale, durate și resurse (ecograf, laborator, echipă). Roluri și permisiuni personalizate pentru medici, recepție, laborator și contabilitate.",
        },
        {
          title: "Documente și consimțăminte",
          description: "Contracte, fișe de consimțământ, acorduri GDPR, trimiteri și rapoarte medicale — generate și stocate automat.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Accesezi rapoarte în timp real: număr consultații, venituri pe medic, grad de ocupare, servicii profitabile, frecvență pacienți și timp mediu de vizită.",
        },
        {
          title: "Flux pacienți optimizat",
          description: "De la programare online la confirmare, consultație, plată și emiterea documentelor medicale. Fără suprapuneri, fără întârzieri, fără fișe pierdute.",
        },
      ],
      inventoryManagement: [
        {
          title: "Evidență consum medical",
          description: "Monitorizezi consumabilele pe serviciu, scădere automată la utilizare (seringi, mănuși, reactivi). Inventar ghidat și alerte 'low stock'.",
        },
        {
          title: "Management furnizori și achiziții",
          description: "Comenzi, recepții, facturi și trasabilitate completă pe produse medicale, cu respectarea normelor sanitare.",
        },
        {
          title: "Trasabilitate & siguranță",
          description: "Serii, loturi și date de expirare vizibile în sistem — conformitate totală la inspecții.",
        },
      ],
      customerEngagement: [
        {
          title: "Programări & notificări automate",
          description: "Pacienții se programează online, aleg medicul, ora și serviciul. Confirmări și remindere automate prin SMS, e-mail sau notificări push.",
        },
        {
          title: "Formulare & fișe digitale",
          description: "Formulare de anamneză, chestionare de sănătate și fișe digitale completate înainte de consultație — reduc timpul petrecut la recepție.",
        },
        {
          title: "Abonamente medicale & pachete",
          description: "Crează pachete corporate, abonamente recurente sau pachete de analize — cu raportare automată și reînnoiri programate.",
        },
        {
          title: "Campanii personalizate",
          description: "Mesaje și notificări pentru controale periodice, vaccinări, analize preventive sau servicii noi. Crește retenția pacienților și gradul de revenire.",
        },
      ],
    },
    retail: {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Gestionezi casierii, vânzătorii și responsabilii de stoc. Creezi ture, pontaje și accese personalizate, cu vizibilitate completă pe vânzări per angajat și productivitate.",
        },
        {
          title: "Management financiar precis",
          description: "Control total asupra încasărilor, retururilor și discounturilor. Închidere de zi automată, evidență clară pentru numerar și plăți digitale, reconciliere integrată cu contabilitatea.",
        },
        {
          title: "Profiluri de clienți și fidelizare",
          description: "Creezi fișe de client cu istoric cumpărături, preferințe și cupoane active. Poți aplica reduceri personalizate, puncte de loialitate și campanii automate.",
        },
        {
          title: "Configurare flexibilă a afacerii",
          description: "Magazine single sau multi-locație, vânzare pe categorii, liste de prețuri și promoții dinamice. Setezi roluri, permisiuni și acces la nivel de echipă și produs.",
        },
        {
          title: "Documente și facturare",
          description: "Facturi, chitanțe, note de transfer, avize și NIR-uri — toate generate automat, fiscalizate și stocate în siguranță.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Vânzări pe produs, categorie, perioadă, marjă și adaos comercial. Rapoarte în timp real pe profit, pierderi, costuri de achiziție și rotația stocurilor.",
        },
        {
          title: "Analitică avansată & predicție vânzări",
          description: "Vizualizezi tendințele zilnice sau sezoniere, estimezi cererea și optimizezi achizițiile. Reduceri planificate strategic, nu instinctiv.",
        },
      ],
      inventoryManagement: [
        {
          title: "Inventar & stocuri în timp real",
          description: "Monitorizare automată la vânzare și aprovizionare. Alerte 'low stock', transferuri între puncte și inventare rapide cu scanner.",
        },
        {
          title: "Furnizori & achiziții",
          description: "Gestionare completă a relațiilor cu furnizorii — comenzi, recepții, facturi și termene de plată. Ai vizibilitate totală pe costuri și livrări.",
        },
        {
          title: "Traseabilitate completă",
          description: "Serii, loturi, date de expirare și trasabilitate pe produs — ideal pentru retail alimentar, farmacii sau cosmetice.",
        },
      ],
      customerEngagement: [
        {
          title: "Campanii promoționale & oferte dinamice",
          description: "Creezi promoții automate: 2+1, bundle-uri, discounturi sezoniere, happy hour sau reduceri pe stocuri care expiră.",
        },
        {
          title: "Loyalty & puncte de recompensă",
          description: "Sistem de fidelitate integrat — puncte, cupoane, carduri de membru. Clienții revin, tu crești valoarea medie a coșului.",
        },
        {
          title: "Notificări și comunicare directă",
          description: "SMS, e-mail sau push pentru oferte, produse noi și re-stocări. Automatizări care cresc revenirea în magazin.",
        },
        {
          title: "Programări & click & collect",
          description: "Pentru magazinele cu produse personalizate sau service: rezervare produs, ridicare la oră stabilită, flux integrat de comandă.",
        },
      ],
    },
    'spalatorii-auto': {
      employeeManagement: [
        {
          title: "Management eficient al personalului",
          description: "Gestionezi ușor echipa — spălători, operatori, casieri, manageri. Planifici ture, urmărești productivitatea și bonurile pe angajat. Pontaj automat și raport de performanță per schimb.",
        },
        {
          title: "Management financiar precis",
          description: "Controlezi încasările zilnice, plățile cash sau card, serviciile gratuite/promo și costurile consumabilelor. Închidere de zi automată, raport fiscal și integrare cu 1C.",
        },
        {
          title: "Profiluri clienți și flote corporate",
          description: "Istoric comenzi, tipuri de servicii, vehicule, preferințe, frecvență. Pentru partenerii corporate — facturare lunară automată și rapoarte de utilizare pe flotă.",
        },
        {
          title: "Configurare flexibilă a locației",
          description: "Definire linii de spălare, tipuri de servicii (interior, exterior, complet, detailing), pachete și durate. Suport pentru abonamente, carduri preplătite și puncte de fidelitate.",
        },
        {
          title: "Documente & contracte",
          description: "Contracte corporate, procese-verbale, fișe de inspecție, rapoarte de lucru — generate și stocate digital.",
        },
      ],
      businessInsights: [
        {
          title: "Insights bazate pe date",
          description: "Rapoarte zilnice, săptămânale sau lunare: număr de comenzi, venituri, costuri de consumabile, profit/linie, timpul mediu per mașină, reveniri și clienți noi.",
        },
        {
          title: "Optimizarea fluxului operațional",
          description: "Vizibilitate în timp real asupra stării fiecărei linii (liberă, ocupată, în așteptare). Reducere timpi morți, coordonare eficientă între recepție și echipă.",
        },
      ],
      inventoryManagement: [
        {
          title: "Consumabile & stocuri",
          description: "Monitorizezi automat consumul de soluții, detergenți, lavete și accesorii. Alerte 'low stock', inventar ghidat, raport de pierderi și trasabilitate completă.",
        },
        {
          title: "Furnizori & achiziții",
          description: "Comenzi automate către furnizori pe baza consumului mediu. Urmărești prețuri, termene și facturi într-un singur loc.",
        },
        {
          title: "Întreținerea echipamentelor",
          description: "Programare revizii, inspecții tehnice, filtre, pompe, perii — sistem de mentenanță preventivă cu notificări automate.",
        },
      ],
      customerEngagement: [
        {
          title: "Rezervări online & programări rapide",
          description: "Clienții aleg data, ora și tipul serviciului direct din aplicație sau website. Confirmări automate, remindere și notificări la finalizarea serviciului.",
        },
        {
          title: "Abonamente & carduri preplătite",
          description: "Vânzare de abonamente flexibile (5, 10 sau 20 spălări) cu evidență automată a utilizărilor și discounturi de fidelitate.",
        },
        {
          title: "Marketing & oferte dinamice",
          description: "Campanii automate în orele mai libere (happy hour), oferte sezoniere (toamnă/iarna) și mesaje personalizate pentru clienți inactivi.",
        },
        {
          title: "Feedback & recenzii",
          description: "Formular de feedback direct în aplicație sau pe bonul fiscal. Rapoarte pe ratinguri și timpi de reacție.",
        },
      ],
    },
  };

  return featuresByIndustry[industry] || featuresByIndustry.restaurante;
};

const howItWorksSteps = [
  {
    icon: "/figmaAssets/frame-1894.svg",
    number: "1",
    title: "Selectează tipul afacerii tale",
    description: "Alege industria în care activezi: restaurant, salon, fitness, hotel sau altele",
  },
  {
    icon: "/figmaAssets/frame-2147223393.svg",
    number: "2",
    title: "Alege modulul de abonament",
    description: "Configurează pachetul potrivit pentru nevoile tale: Basic, Professional sau Enterprise",
  },
  {
    icon: "/figmaAssets/frame-2147223396.svg",
    number: "3",
    title: "Configurare simplificată",
    description: "Setup rapid în câțiva pași: locații, servicii, personal și prețuri",
  },
  {
    icon: "/figmaAssets/frame-2147223394.svg",
    number: "4",
    title: "Activează rezervările online",
    description: "Pornește sistemul de rezervări pentru clienții tăi prin web și aplicație mobilă",
  },
  {
    icon: "/figmaAssets/frame-2147223395.svg",
    number: "5",
    title: "Gestionează echipa",
    description: "Adaugă angajați, setează roluri și urmărește performanța în timp real",
  },
];

const businessTypes = [
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "IT Company",
    decorativeIcon: "/figmaAssets/frame-6.svg",
    pricingIndustry: "Retail",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Beauty Clinic",
    decorativeIcon: "/figmaAssets/frame-1.svg",
    pricingIndustry: "Saloane de frumusețe",
  },
  {
    icon: "/figmaAssets/frame.svg",
    name: "Medical Clinic",
    decorativeIcon: "/figmaAssets/frame.svg",
    pricingIndustry: "Medical",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Restaurant",
    decorativeIcon: "/figmaAssets/frame-7.svg",
    pricingIndustry: "Restaurante",
  },
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "Catering",
    decorativeIcon: "/figmaAssets/frame-6.svg",
    pricingIndustry: "Restaurante",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Entertainment",
    decorativeIcon: "/figmaAssets/frame-1.svg",
    pricingIndustry: "Tenis/Padel/Fotbal",
  },
  {
    icon: "/figmaAssets/frame.svg",
    name: "Beauty Salon",
    decorativeIcon: "/figmaAssets/frame.svg",
    pricingIndustry: "Saloane de frumusețe",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Dental Clinic",
    decorativeIcon: "/figmaAssets/frame-7.svg",
    pricingIndustry: "Medical",
  },
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "Barbershop",
    decorativeIcon: "/figmaAssets/frame-6.svg",
    pricingIndustry: "Barbershopuri",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Co-Working Space Rent",
    decorativeIcon: "/figmaAssets/frame-1.svg",
    pricingIndustry: "Retail",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Accounting Firm",
    decorativeIcon: "/figmaAssets/frame-7.svg",
    pricingIndustry: "Retail",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Hotel",
    decorativeIcon: "/figmaAssets/frame-7.svg",
    pricingIndustry: "Hotele & Pensiuni",
  },
  {
    icon: "/figmaAssets/frame-12.svg",
    name: "Pet Grooming Service",
    decorativeIcon: "/figmaAssets/frame-6.svg",
    pricingIndustry: "Saloane de frumusețe",
  },
  {
    icon: "/figmaAssets/frame-2.svg",
    name: "Conference Hall Rent",
    decorativeIcon: "/figmaAssets/frame-1.svg",
    pricingIndustry: "Retail",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Fitness Center",
    decorativeIcon: "/figmaAssets/frame-7.svg",
    pricingIndustry: "Fitness",
  },
  {
    icon: "/figmaAssets/frame-4.svg",
    name: "Wellness Center",
    decorativeIcon: "/figmaAssets/frame-7.svg",
    pricingIndustry: "Fitness",
  },
];

const benefitsRow1 = [
  {
    icon: "/figmaAssets/icon.svg",
    title: "Eficiență în timp",
    description:
      "Cu rezervări mobile și management automat al angajaților, afacerea ta economisește ore întregi de muncă administrativă, permițând echipei să se concentreze pe oferirea unei experiențe excelente clienților.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Creștere a veniturilor",
    description:
      "Datele și analizele din platformă te ajută să identifici noi oportunități de profit — de la optimizarea strategiilor de preț până la îmbunătățirea experienței clienților pentru a stimula revenirea acestora.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Experiență îmbunătățită pentru clienți",
    description:
      "Prin aplicația mobilă intuitivă pentru rezervări și plăți, le oferi clienților tăi mai mult confort și satisfacție. Serviciile personalizate prin CRM consolidează relațiile și loialitatea.",
  },
];

const benefitsRow2 = [
  {
    icon: "/figmaAssets/icon.svg",
    title: "Managementul stocurilor",
    description:
      "Urmărește nivelul stocurilor în timp real, gestionează comenzile de aprovizionare și reducerea pierderilor, pentru a menține costurile sub control.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Acces multiplatformă",
    description:
      "Accesează sistemul tău ERP atât din versiunea web, cât și din aplicația mobilă — flexibilitate completă pentru tine și pentru clienții tăi.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Plăți online integrate",
    description:
      "Simplifică tranzacțiile prin opțiuni de plată online direct din aplicație, oferind clienților o metodă rapidă și sigură de a achita serviciile.",
  },
];

export const SolutionsContentSection = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = React.useState("restaurante");

  const industries = [
    { value: "restaurante", label: "Restaurante" },
    { value: "cafenele", label: "Cafenele" },
    { value: "saloane", label: "Saloane de frumusețe" },
    { value: "barbershop", label: "Barbershopuri" },
    { value: "hoteluri", label: "Hotele & Pensiuni" },
    { value: "chirii-auto", label: "Chirii auto" },
    { value: "fitness", label: "Fitness" },
    { value: "medical", label: "Medical" },
    { value: "retail", label: "Retail" },
    { value: "spalatorii-auto", label: "Spălătorii auto" },
  ];

  const currentFeatures = getFeaturesByIndustry(selectedIndustry);
  const employeeManagementFeatures = currentFeatures.employeeManagement;
  const businessInsightsFeatures = currentFeatures.businessInsights;
  const inventoryManagementFeatures = currentFeatures.inventoryManagement;
  const customerEngagementFeatures = currentFeatures.customerEngagement;

  return (
    <section className="relative z-10 flex flex-col w-full items-center">
      <Container className="py-8 md:py-[50px]">
        <div className="relative z-20 col-span-12 md:col-span-6 flex flex-col items-start justify-center gap-5">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-3xl md:text-5xl tracking-[0] leading-tight md:leading-[normal]">
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

        <div className="col-span-12 md:col-span-6 flex flex-col md:flex-row items-start gap-5">
          <div className="flex flex-col items-start gap-5 w-full md:w-auto">
            {heroFeatures.slice(0, 2).map((feature, index) => (
              <Card
                key={index}
                className={`w-full md:w-[255px] ${feature.height} bg-[#2d2c651a] rounded-[20px] border-[#2d2c65]`}
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

          <Card className="w-full md:w-[255px] bg-[#2d2c651a] rounded-[20px] border-[#2d2c65]">
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

      <Container className="py-8 md:py-[50px]">
        <div className="col-span-12 flex flex-col items-center justify-center gap-4 md:gap-6 mb-8">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl md:text-5xl text-center tracking-[0] leading-tight md:leading-[normal]">
            Descoperă funcționalitățile care ne diferențiază pentru
          </h2>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833] [font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-lg md:text-2xl cursor-pointer appearance-none bg-no-repeat bg-right pr-12 w-full md:w-auto"
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
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
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
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
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
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
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
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
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
              Cum funcționează
            </h2>
          </div>

          <div className="col-span-12 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4 w-full relative">
              <div className="absolute top-[40px] left-[40px] right-[40px] h-2 bg-[#2d2c65] hidden lg:block" />

              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 flex-1 max-w-full lg:max-w-[200px]"
                >
                  <img
                    className="relative w-20 h-20 z-10"
                    alt="Frame"
                    src={step.icon}
                  />
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#282828] text-lg md:text-xl text-center tracking-[0] leading-tight md:leading-[26px]">
                    {step.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#282828] text-sm md:text-base text-center tracking-[0] leading-relaxed opacity-70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
            Ce tip de afacere ai?
          </h2>
        </div>

        {businessTypes.map((business, index) => (
          <Link 
            key={index} 
            href={`/pricing?industry=${encodeURIComponent(business.pricingIndustry)}`}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <Card className="w-full bg-white rounded-[20px] border-[#8aa2a980] shadow-[0px_13px_24px_#0000000d] overflow-hidden relative hover:shadow-[0px_13px_24px_#0000001a] transition-shadow cursor-pointer">
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
          </Link>
        ))}
      </Container>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[72px]">
            Simplifică-ți operațiunile,
            <br />
            Amplifică-ți succesul
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

      <Container className="py-[50px]">
        <div className="col-span-12">
          <div className="flex flex-col items-start justify-center gap-8 p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
            <div className="flex flex-col items-start gap-4 w-full relative z-10">
              <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
                Începe să-ți optimizezi afacerea astăzi!
              </h2>
            </div>

            <Button className="h-auto bg-white rounded-xl p-4 hover:bg-white/90 relative z-10">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-base tracking-[0] leading-4">
                Devino partener
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
