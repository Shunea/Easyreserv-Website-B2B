import {
  CheckIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industryPricing: Record<string, { basic: number; standard: number; pro: number }> = {
  "Restaurante": { basic: 50, standard: 125, pro: 200 },
  "Cafenele": { basic: 50, standard: 125, pro: 200 },
  "Saloane de frumusețe": { basic: 40, standard: 85, pro: 140 },
  "Barbershopuri": { basic: 40, standard: 85, pro: 140 },
  "Hotele & Pensiuni": { basic: 79, standard: 149, pro: 249 },
  "Chirii auto": { basic: 59, standard: 119, pro: 199 },
  "Fitness": { basic: 49, standard: 99, pro: 149 },
  "Medical": { basic: 49, standard: 99, pro: 199 },
  "Retail": { basic: 49, standard: 99, pro: 159 },
  "Spălătorii auto": { basic: 35, standard: 75, pro: 125 },
  "Tenis/Padel/Fotbal": { basic: 39, standard: 79, pro: 129 },
};

const getPricingPlans = (industry: string) => {
  if (industry === "Cafenele") {
    return [
      {
        name: "Basic",
        description: "Ideal pentru cafenele mici & simple",
        monthlyPrice: 50,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "2 utilizatori incluși",
          "POS Basic configurabil",
          "Management încasări simplificat",
          "Meniu digital static",
          "Analiză & KPI simplu",
        ],
      },
      {
        name: "Standard",
        description: "Angajați multipli, planificare ture, analize",
        monthlyPrice: 125,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "Utilizatori suplimentari (5€/user)",
          "Management angajați & pontaj",
          "POS layout personalizat",
          "Meniu dinamic & variabile produse",
          "Profiluri clienți & istoric comenzi",
          "Marketing Push/SMS & Happy Hour",
        ],
      },
      {
        name: "Pro",
        description: "Control pe costuri, stocuri și automatizări",
        monthlyPrice: 200,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "Management stocuri & rețetar",
          "Scădere automată stoc",
          "Alerte low stock & inventare",
          "Rețetar băuturi & cost/porție",
          "Segmentare avansată & cupoane",
          "Rapoarte PDF & exporturi",
        ],
      },
      {
        name: "Enterprise",
        description: "Multi-locație, integrare fiscală, automatizări AI",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "2 utilizatori scalabili",
          "Multi-locație & flotă curieri",
          "Integrare 1C fiscalizat",
          "Automatizări AI marketing",
          "Backup extern & stocare extinsă",
        ],
      },
    ];
  }
  
  if (industry === "Spălătorii auto") {
    return [
      {
        name: "Basic",
        description: "Pentru spălătorii auto mici",
        monthlyPrice: 35,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "1 utilizator inclus",
          "Rezervări online & walk-in Basic",
          "Servicii configurabile statice",
          "Management financiar simplificat",
          "Rapoarte simple",
        ],
      },
      {
        name: "Standard",
        description: "Management echipe & clienți",
        monthlyPrice: 75,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "2 utilizatori + 5€/user suplimentar",
          "Management angajați & pontaj",
          "Rezervări cu calendar",
          "Prețuri pe caroserie/lucrări",
          "CRM clienți & istoric mașină",
          "SMS promoționale & Reminder",
        ],
      },
      {
        name: "Pro",
        description: "Stocuri, comenzi mobile & automatizări",
        monthlyPrice: 125,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "3 utilizatori incluși",
          "Rezervări cu prioritizare",
          "Pachete promoționale & upsell",
          "Comenzi Pickup/mobil cu geolocalizare",
          "Stocuri consumabile & alerte",
          "Push, Reminder & segmentare",
        ],
      },
      {
        name: "Enterprise",
        description: "Flotă mobilă, integrare fiscală, AI",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "3+ utilizatori scalabili",
          "Auto-redistribuire rezervări",
          "Gestionare flotă mobilă & rute",
          "AI Suggest prețuri",
          "Integrare 1C & PowerBI",
          "Campanii cu trigger & loyalty",
        ],
      },
    ];
  }
  
  if (industry === "Hotele & Pensiuni") {
    return [
      {
        name: "Basic",
        description: "Pensiuni/Boutique ≤ 20 camere",
        monthlyPrice: 79,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "3 utilizatori incluși",
          "Calendar disponibilitate & room matrix",
          "Check-in/Check-out cu folio",
          "Tipuri camere & tarife de bază",
          "Housekeeping: status cameră & taskuri",
          "POS front desk & facturare",
        ],
      },
      {
        name: "Standard",
        description: "Hotel mic-mediu 21-60 camere",
        monthlyPrice: 149,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "6 utilizatori + 5€/user suplimentar",
          "Split/merge rezervări & room move",
          "Pachete (cazare + servicii)",
          "App mobil Housekeeping",
          "CRM & marketing email/SMS",
          "ADR, RevPAR & rapoarte avansate",
        ],
      },
      {
        name: "Pro",
        description: "Hotel 61-150 camere",
        monthlyPrice: 249,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "10 utilizatori incluși",
          "Booking Engine pe site",
          "Ticketing mentenanță cu SLA",
          "Garanții pe card/preautorizări",
          "Pick-up, pace & forecast",
          "Segmentare & campanii automate",
        ],
      },
      {
        name: "Enterprise",
        description: "150+ camere sau Multi-property",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "Utilizatori nelimitat",
          "Channel Manager (OTA integrat)",
          "AI-assist recomandări dinamice",
          "Dashboard multi-property",
          "SSO, audit avansat & API webhooks",
          "Control chei & self check-in kiosk",
        ],
      },
    ];
  }
  
  if (industry === "Chirii auto") {
    return [
      {
        name: "Basic",
        description: "Micro/local ≤ 25 auto",
        monthlyPrice: 59,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "2 utilizatori incluși",
          "Rezervări web/telefon & calendar",
          "Contracte cu e-semnătură",
          "Tarife sezoniere simple",
          "Catalog vehicule & status",
          "Facturi & chitanțe",
        ],
      },
      {
        name: "Standard",
        description: "26-80 auto",
        monthlyPrice: 119,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "5 utilizatori + 5€/user suplimentar",
          "Depozite & pre-autorizări card",
          "Service & mentenanță programată",
          "Check-in/out cu poze & checklist",
          "Booking Engine pe site",
          "CRM & e-mail/SMS reminder",
        ],
      },
      {
        name: "Pro",
        description: "81-250 auto",
        monthlyPrice: 199,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "10 utilizatori incluși",
          "Dynamic pricing & forecast",
          "Paritate tarife & allotment",
          "Telematică/GPS tracking (add-on)",
          "Campanii segmentate B2B/B2C",
          "Rapoarte yield per class",
        ],
      },
      {
        name: "Enterprise",
        description: "250+ auto/multi-sediu",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "Utilizatori nelimitat",
          "Channel Manager OTA integrat",
          "AI-assist dynamic pricing",
          "Telematică/GPS inclus",
          "Dashboard multi-sediu/țară",
          "API/Integrations & ERP",
        ],
      },
    ];
  }
  
  if (industry === "Fitness") {
    return [
      {
        name: "Basic",
        description: "Studio mic până la ~100 membri",
        monthlyPrice: 49,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "2 utilizatori incluși",
          "Programări clase & PT",
          "Check-in membru (cod/QR)",
          "Abonamente & carduri",
          "Profil membru & istoric",
          "POS recepție & facturare",
        ],
      },
      {
        name: "Standard",
        description: "100-250 membri activi",
        monthlyPrice: 99,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "5 utilizatori + 5€/user suplimentar",
          "Orar antrenori & pontaj",
          "Reamintiri SMS & segmente membri",
          "Recurență card auto-renew",
          "Stoc produse & alerte",
          "Rapoarte MRR/ARR & performanță",
        ],
      },
      {
        name: "Pro",
        description: "250-500 membri activi",
        monthlyPrice: 149,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "10 utilizatori incluși",
          "Liste așteptare & anti-fraud",
          "Calcul comisioane PT/clasă",
          "Dunning automat & retry plăți",
          "App membru cu branding",
          "Rapoarte churn & cohortă",
        ],
      },
      {
        name: "Enterprise",
        description: "500+ membri/multi-locație",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "Utilizatori nelimitat",
          "Multi-locație & SSO",
          "App white-label (brandul sălii)",
          "AI scoring risc churn",
          "Dashboard multi-locație/țară",
          "API prioritar & DRM video",
        ],
      },
    ];
  }
  
  if (industry === "Tenis/Padel/Fotbal") {
    return [
      {
        name: "Basic",
        description: "1-2 terenuri/sală mică",
        monthlyPrice: 39,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "2 utilizatori incluși",
          "Rezervare pe sloturi flexibile",
          "Configurări sport-specific",
          "Profil membru & istoric",
          "Plăți online & facturare",
          "Widget rezervare pe site",
        ],
      },
      {
        name: "Standard",
        description: "3-6 terenuri",
        monthlyPrice: 79,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "5 utilizatori + 5€/user suplimentar",
          "Prețuri peak/off-peak",
          "Rezervări recurente & abonamente",
          "Închiriere echipament",
          "Programări antrenor & comisioane",
          "Calendar mentenanță teren",
        ],
      },
      {
        name: "Pro",
        description: "7-12 terenuri/multi-sport",
        monthlyPrice: 129,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "10 utilizatori incluși",
          "Liste așteptare & auto-umplere",
          "Re-programare meteo automată",
          "Matching partener & pachete multi-sport",
          "Organizare turnee & ligi",
          "App jucători cu branding",
        ],
      },
      {
        name: "Enterprise",
        description: "12+ terenuri/multi-locație",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "Utilizatori nelimitat",
          "Control acces & lumini IoT",
          "App white-label (brand club)",
          "Rapoarte heatmap multi-site",
          "Integrare fiscală & ERP",
          "API prioritar & webhooks",
        ],
      },
    ];
  }
  
  if (industry === "Medical") {
    return [
      {
        name: "Starter",
        description: "Cabinet individual/micro-clinică (1-3 medici)",
        monthlyPrice: 49,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "3 utilizatori incluși",
          "Programări online/telefon",
          "Calendar multi-medic",
          "Fișă pacient & anamneză",
          "POS recepție & facturare",
          "Confirmări email",
        ],
      },
      {
        name: "Standard",
        description: "Clinică mică (4-10 medici)",
        monthlyPrice: 99,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Starter",
          "6 utilizatori + 5€/user suplimentar",
          "Template-uri per specialitate",
          "Rețete & bilete trimitere",
          "Check-in cabinet & remindere SMS",
          "CRM pacienți & campanii recall",
          "Solicitări analize & rezultate",
        ],
      },
      {
        name: "Business",
        description: "Clinică medie (11-30 medici)",
        monthlyPrice: 199,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "12 utilizatori incluși",
          "Decontări corporate/asiguratori",
          "Pontaj ture & comisioane",
          "Dunning automat & pachete medicale",
          "Portal rezultate pacient",
          "Ecrane sală așteptare",
        ],
      },
      {
        name: "Enterprise",
        description: "Rețea/Spital privat (31+ medici)",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Business",
          "Utilizatori nelimitat",
          "Integrare LIS (HL7) & PACS (DICOM)",
          "e-Prescripție & SIUI/CNAS",
          "App pacient white-label",
          "SSO, backup extern & audit avansat",
          "API prioritar & webhooks",
        ],
      },
    ];
  }
  
  if (industry === "Saloane de frumusețe" || industry === "Barbershopuri") {
    return [
      {
        name: "Basic",
        description: "1 specialist, salon mic",
        monthlyPrice: 40,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "1 specialist inclus",
          "Programări online & walk-in manual",
          "Gestionare servicii simplu",
          "CRM clienți basic",
          "Plăți manuale",
          "Rapoarte simple",
        ],
      },
      {
        name: "Standard",
        description: "2 specialiști, automatizări basic",
        monthlyPrice: 85,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "2 utilizatori + 5€/user suplimentar",
          "Calendar cu confirmare SMS",
          "Pachete promoționale & abonamente",
          "Gestionare personal & ture",
          "Vânzare produse & inventar",
          "POS & bon fiscal",
        ],
      },
      {
        name: "Pro",
        description: "4 specialiști, fidelizare avansată",
        monthlyPrice: 140,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "4 utilizatori incluși",
          "Alocare automată & Push notifications",
          "Upsell & pachete personalizate",
          "Bonusuri & card fidelizare",
          "Stocuri per cabină",
          "Marketing segmentat & cupoane",
        ],
      },
      {
        name: "Enterprise",
        description: "5+ specialiști, multi-locație",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "5+ utilizatori scalabili",
          "Integrare Google/Apple Calendar",
          "AI suggestion servicii & recomandări",
          "Rezervare din social media & QR",
          "Export PowerBI/1C & rețea POS",
          "Segmente dinamice omnichannel",
        ],
      },
    ];
  }
  
  if (industry === "Retail") {
    return [
      {
        name: "Basic",
        description: "Boutique/shop unic (până la 1 POS)",
        monthlyPrice: 49,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
        features: [
          "2 utilizatori (Admin, Casier)",
          "POS vânzare & bon fiscal",
          "Retururi, schimburi, storno",
          "Reduceri simple",
          "Catalog produse (SKU, variante)",
          "Profil client & istoric cumpărări",
        ],
      },
      {
        name: "Standard",
        description: "Magazin mic-mediu (1-3 POS)",
        monthlyPrice: 99,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Basic",
          "5 utilizatori + 5€/user suplimentar",
          "Multi-POS (max 3) & mod offline",
          "Recepții marfă & comenzi furnizori",
          "Transfer între locații & inventar",
          "Card fidelitate & campanii SMS/Email",
          "Top SKU, marje, coș mediu",
        ],
      },
      {
        name: "Pro",
        description: "Magazin mare/multi-POS (4-8 POS)",
        monthlyPrice: 159,
        isPopular: true,
        buttonVariant: "default" as const,
        planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
        features: [
          "Tot din Standard",
          "10 utilizatori incluși",
          "Multi-POS (max 8) & FIFO/LOT",
          "Click & Collect, stoc unificat",
          "Segmente RFM & cupoane personalizate",
          "Pontaj, ture, targeturi vânzare",
          "Forecast cerere & dashboard avansat",
        ],
      },
      {
        name: "Enterprise",
        description: "Rețea multi-magazin/omnichannel",
        monthlyPrice: null,
        isPopular: false,
        buttonVariant: "outline" as const,
        planId: null,
        features: [
          "Tot din Pro",
          "Utilizatori nelimitat",
          "POS nelimitat & WMS light",
          "Marketplaces (eMAG, Amazon)",
          "Integrare curieri & AWB centralizat",
          "SSO, audit avansat & API prioritar",
          "Dashboard multi-magazin & 1C/ERP",
        ],
      },
    ];
  }
  
  return [
    {
      name: "Basic",
      description: "Ideal pentru locații mici & simple",
      monthlyPrice: industryPricing[industry]?.basic || 49,
      isPopular: false,
      buttonVariant: "outline" as const,
      planId: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
      features: [
        "1 Admin, 1 Hostess",
        "Accept/Reject rezervări",
        "Create New/Modify rezervări",
        "CRUD Employee",
        "1 articol marketing/lună",
        "Targeting Push/SMS",
      ],
    },
    {
      name: "Standard",
      description: "Angajați multipli, dashboarduri, planificare ture, analize simple",
      monthlyPrice: industryPricing[industry]?.standard || 99,
      isPopular: false,
      buttonVariant: "outline" as const,
      planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
      features: [
        "Tot din Basic",
        "2 Waiters",
        "Calendar Access rezervări",
        "Management mese + zone",
        "QR Menu interactiv",
      ],
    },
    {
      name: "Pro",
      description: "Control pe costuri, productivitate și campanii",
      monthlyPrice: industryPricing[industry]?.pro || 149,
      isPopular: true,
      buttonVariant: "default" as const,
      planId: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
      features: [
        "Tot din Standard",
        "5 Waiters + 3 Cooks",
        "Pre-order",
        "Rețetar & scădere automată stocuri",
        "Rapoarte vânzări & KPI angajați",
        "Ture/vacanțe/pontaj & Intrare/Ieșire",
        "2 articole marketing/lună",
        "Segmentare avansată",
      ],
    },
    {
      name: "Enterprise",
      description: "Pentru francize, cu module fiscale, multi-locație, transport, rute",
      monthlyPrice: null,
      isPopular: false,
      buttonVariant: "outline" as const,
      planId: null,
      features: [
        "Tot din Pro",
        "Utilizatori nelimitați (Admin, Hostess, Waiter, Cook, Curier)",
        "Multi-locații într-un singur cont",
        "Comenzi livrare + Curier App",
        "Rute & alocare curieri",
        "Integrare completă sistem fiscal",
        "2+ articole marketing/lună",
      ],
    },
  ];
};

const getComparisonCategories = (industry: string) => {
  if (industry === "Retail") {
    return [
      {
        title: "Vânzare & POS",
        features: [
          {
            name: "POS vânzare (cash/card), bon fiscal",
            values: [true, true, true, true],
          },
          {
            name: "Retururi, schimburi, storno",
            values: [true, true, true, true],
          },
          {
            name: "Reduceri, cupoane, vouchere",
            values: ["Simplu", "Cu reguli", "Avansat", "Omnichannel"],
            muted: [false, false, false, false],
          },
          {
            name: "Prețuri promo (per perioadă/ore)",
            values: [false, true, true, true],
          },
          {
            name: "Multi-POS pe locație",
            values: ["-", "Max 3", "Max 8", "Nelimitat"],
            muted: [true, false, false, false],
          },
          {
            name: "Mod offline (buffer vânzări)",
            values: [false, true, true, true],
          },
          {
            name: "Etichete preț/coduri de bare",
            values: [true, true, "Auto-lot", "Centralizat"],
          },
        ],
      },
      {
        title: "Stocuri, Achiziții & Furnizori",
        features: [
          {
            name: "Catalog produse (SKU, variante, lot)",
            values: [true, true, true, true],
          },
          {
            name: "Recepții marfă, NIR",
            values: [false, true, true, true],
          },
          {
            name: "Comenzi către furnizori (PO)",
            values: [false, true, true, true],
          },
          {
            name: "Transfer între locații",
            values: [false, true, true, true],
          },
          {
            name: "Inventar periodic/ghidat",
            values: [false, true, true, true],
          },
          {
            name: "Alerte low-stock/rupturi stoc",
            values: [false, true, true, true],
          },
          {
            name: "Cost achiziție, marjă, markup",
            values: [false, true, true, true],
          },
          {
            name: "FIFO/LOT/expirabil",
            values: [false, false, true, true],
          },
          {
            name: "WMS light (recepție cu scanner)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Omnichannel & E-commerce",
        features: [
          {
            name: "Catalog online (widget/mini-shop)",
            values: ["-", "Add-on", true, true],
            muted: [true, false, false, false],
          },
          {
            name: "Click & Collect/Reserve & Pickup",
            values: [false, false, true, true],
          },
          {
            name: "Stoc unificat online+offline",
            values: [false, false, true, true],
          },
          {
            name: "Marketplaces (eMAG, Amazon)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Integrare curieri/AWB",
            values: [false, false, "Add-on", "Centralizat"],
          },
        ],
      },
      {
        title: "CRM, Loialitate & Marketing",
        features: [
          {
            name: "Profil client, istoric cumpărări",
            values: [true, true, true, true],
          },
          {
            name: "Card fidelitate/puncte",
            values: [false, true, true, true],
          },
          {
            name: "Segmente (RFM: recență/frecvență)",
            values: [false, false, true, true],
          },
          {
            name: "Campanii SMS/Email/Push",
            values: [false, true, "Avansat", "Multi-brand"],
          },
          {
            name: "Cupoane personalizate per segment",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Plăți, Fiscal & Contabilitate",
        features: [
          {
            name: "POS card (gateway plăți)",
            values: [true, true, true, true],
          },
          {
            name: "Facturi, proforme, chitanțe",
            values: [true, true, true, true],
          },
          {
            name: "Case de marcat/1C/ERP",
            values: ["Add-on", "Add-on", "Add-on", true],
          },
          {
            name: "Multivalută/taxe locale",
            values: [false, false, true, true],
          },
          {
            name: "Dunning (comenzi online neplătite)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Personal, Ture & Permisiuni",
        features: [
          {
            name: "Roluri: Admin, Casier, Manager",
            values: [true, true, true, true],
          },
          {
            name: "Depozitier, Contabil, E-commerce",
            values: [false, true, true, true],
          },
          {
            name: "Pontaj, ture, targeturi vânzare",
            values: [false, true, true, true],
          },
          {
            name: "Audit acțiuni (log per utilizator)",
            values: [false, true, true, true],
          },
          {
            name: "SSO/IP allowlist",
            values: [false, false, "Add-on", true],
          },
        ],
      },
      {
        title: "Rapoarte & Analytics",
        features: [
          {
            name: "Vânzări pe zi/POS/produs",
            values: [true, true, true, true],
          },
          {
            name: "Top SKU, marje, coș mediu",
            values: [false, true, true, true],
          },
          {
            name: "Rupturi stoc, rotație, pierderi",
            values: [false, true, true, true],
          },
          {
            name: "Forecast cerere/promo impact",
            values: [false, false, true, true],
          },
          {
            name: "Dashboard multi-magazin",
            values: [false, false, false, true],
          },
          {
            name: "Export CSV/PDF, 1C bridge",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Integrări & API",
        features: [
          {
            name: "Procesatori plăți",
            values: [true, true, true, true],
          },
          {
            name: "Contabilitate/1C/ERP",
            values: ["Add-on", "Add-on", "Add-on", true],
          },
          {
            name: "Curieri (ShipX, Fan, DHL)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Marketplaces",
            values: [false, false, "Add-on", true],
          },
          {
            name: "API extern & Webhooks",
            values: [false, false, "Add-on", "Prioritar"],
          },
        ],
      },
    ];
  }
  
  if (industry === "Saloane de frumusețe" || industry === "Barbershopuri") {
    return [
      {
        title: "Utilizatori & Personal",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["1 specialist", "2", "4", "5+ (scalabil)"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["-", "5€/user", "5€/user", "La cerere"],
            muted: [true, false, false, false],
          },
          {
            name: "Gestionare personal & ture",
            values: [false, true, true, true],
          },
          {
            name: "Ture, pauze, targeturi zilnice",
            values: [false, true, true, true],
          },
          {
            name: "Evaluare productivitate per angajat",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Programări & Rezervări",
        features: [
          {
            name: "Programări online & walk-in",
            values: ["Manual", "Cu calendar", "Alocare automată", "Integrare Google/Apple"],
            muted: [false, false, false, false],
          },
          {
            name: "Confirmare & notificări",
            values: ["-", "SMS", "Push & Email", "Omnichannel"],
            muted: [true, false, false, false],
          },
          {
            name: "Politici anulare & rescheduling",
            values: [false, true, true, true],
          },
          {
            name: "Programări recurente",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Servicii & Pachete",
        features: [
          {
            name: "Gestionare servicii & durate",
            values: ["Simplu", "Avansat (per specialist)", "Pachete & upsell", "AI suggestion"],
            muted: [false, false, false, false],
          },
          {
            name: "Categorii servicii (tuns, vopsit, etc.)",
            values: [true, true, true, true],
          },
          {
            name: "Pachete promoționale/abonamente",
            values: [false, true, true, true],
          },
          {
            name: "Upsell (tratamente extra)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "CRM & Fidelizare",
        features: [
          {
            name: "CRM clienți & profil",
            values: ["Basic", "Complet", "Cu istoric", "Card fidelizare"],
            muted: [false, false, false, false],
          },
          {
            name: "Istoric servicii, preferințe, alergii",
            values: [false, true, true, true],
          },
          {
            name: "Reamintiri automate programări",
            values: [false, true, true, true],
          },
          {
            name: "Bonusuri & recompense loialitate",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Vânzare Produse & Stocuri",
        features: [
          {
            name: "Vânzare produse (șampon, ser, etc.)",
            values: ["-", true, "Cu stocuri", "Recomandări AI"],
            muted: [true, false, false, false],
          },
          {
            name: "Inventar & alerte low stock",
            values: [false, true, true, true],
          },
          {
            name: "Stocuri comune/per cabină",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Rapoarte & Analitice",
        features: [
          {
            name: "Rapoarte & analitice",
            values: ["Simplu", "Cu segmente", "Customizabil", "PowerBI/1C export"],
            muted: [false, false, false, false],
          },
          {
            name: "Programări per zi/specialist",
            values: [true, true, true, true],
          },
          {
            name: "Top servicii/vânzări/produse",
            values: [false, true, true, true],
          },
          {
            name: "Export PDF, CSV, XML",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Marketing & Promoții",
        features: [
          {
            name: "Marketing & fidelizare",
            values: ["-", "SMS promoționale", "Push & Email", "Segmente dinamice"],
            muted: [true, false, false, false],
          },
          {
            name: "Campanii per segment (tunsori, masaj)",
            values: [false, false, true, true],
          },
          {
            name: "Cupoane & carduri cadou",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Plăți & Integrări Fiscale",
        features: [
          {
            name: "Plăți & integrări fiscale",
            values: ["Manuale", "Cu POS", "Integrat fiscal", "POS rețea + 1C"],
            muted: [false, false, false, false],
          },
          {
            name: "Emitere bon fiscal/factură",
            values: [false, true, true, true],
          },
          {
            name: "POS mobil/desktop",
            values: [false, true, true, "Compatibil rețea"],
          },
        ],
      },
      {
        title: "Canale Extra Rezervare",
        features: [
          {
            name: "Canale extra rezervare",
            values: ["-", "Link WhatsApp", "QR rezervare", "Social/Google"],
            muted: [true, false, false, false],
          },
        ],
      },
    ];
  }
  
  if (industry === "Medical") {
    return [
      {
        title: "Utilizatori & Acces",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["3", "6", "12", "Nelimitat"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["5€/user", "5€/user", "5€/user", "Inclus"],
            muted: [false, false, false, false],
          },
          {
            name: "Roluri acoperite",
            values: ["Admin, Recepție, Medic", "+ Asistent, Contabil", "+ Manager Clinică, Laborant", "Toate + Integrări avansate"],
            muted: [false, false, false, false],
          },
        ],
      },
      {
        title: "Programări & Flux Pacienți",
        features: [
          {
            name: "Programări online/call center",
            values: [true, true, true, true],
          },
          {
            name: "Calendar multi-medic/specialitate",
            values: [true, true, true, true],
          },
          {
            name: "Politici anulare/no-show",
            values: [false, true, true, true],
          },
          {
            name: "Liste așteptare/overbooking",
            values: [false, true, true, true],
          },
          {
            name: "Confirmări & remindere",
            values: ["Email", "Email+SMS", "Email+SMS+Push", "Omni-channel"],
            muted: [false, false, false, false],
          },
          {
            name: "Flow check-in & chemare cabinet",
            values: [false, true, true, true],
          },
          {
            name: "Ecrane sală așteptare",
            values: [false, false, "Add-on", true],
          },
        ],
      },
      {
        title: "EMR / Dossier Pacient",
        features: [
          {
            name: "Fișă pacient, anamneză, alergii",
            values: [true, true, true, true],
          },
          {
            name: "Template-uri per specialitate",
            values: [false, true, true, true],
          },
          {
            name: "Plan tratament & atașamente",
            values: [true, true, true, true],
          },
          {
            name: "Rețete/recomandări/bilete",
            values: [false, true, true, true],
          },
          {
            name: "Consimțăminte digitale",
            values: [false, true, true, true],
          },
          {
            name: "Istoric vizite & scheme",
            values: [true, true, true, true],
          },
          {
            name: "Restricții rol (confidențialitate)",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Plăți & Facturare",
        features: [
          {
            name: "Facturi, chitanțe, proforme",
            values: [true, true, true, true],
          },
          {
            name: "POS recepție/plăți online",
            values: [true, true, true, true],
          },
          {
            name: "Pachete/abonamente medicale",
            values: [false, true, true, true],
          },
          {
            name: "Devize stomatologice",
            values: [false, true, true, true],
          },
          {
            name: "Decontări corporate/asiguratori",
            values: [false, false, true, true],
          },
          {
            name: "Integrare casă marcat/1C/ERP",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "Dunning (eșec plată)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Laborator & Imagistică",
        features: [
          {
            name: "Solicitări analize & rezultate",
            values: [false, true, true, true],
          },
          {
            name: "Paneluri investigații & prețuri",
            values: [false, true, true, true],
          },
          {
            name: "Integrare LIS (laborator) - HL7",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Integrare PACS/RIS (DICOM)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Link rezultat către pacient",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Personal & HR",
        features: [
          {
            name: "Pontaj/ture/concedii",
            values: [false, true, true, true],
          },
          {
            name: "Ținte per medic (programări, NPS)",
            values: [false, true, true, true],
          },
          {
            name: "Comisioane per serviciu",
            values: [false, false, true, true],
          },
          {
            name: "Evaluare performanță",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Marketing & Retenție",
        features: [
          {
            name: "CRM pacienți & segmente",
            values: [false, true, true, true],
          },
          {
            name: "Campanii SMS/Email (recall)",
            values: [false, true, true, true],
          },
          {
            name: "Recenzii post-vizită/NPS",
            values: [false, true, true, true],
          },
          {
            name: "Cupoane/pachete promo",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Securitate & GDPR",
        features: [
          {
            name: "Control acces pe rol (RBAC)",
            values: [true, true, true, true],
          },
          {
            name: "Jurnal acces fișe (audit)",
            values: [false, true, true, true],
          },
          {
            name: "Consimțăminte & retenție date",
            values: [false, true, true, true],
          },
          {
            name: "Criptare rest & in-transit",
            values: [true, true, true, true],
          },
          {
            name: "SSO/IP allowlist/backup extern",
            values: [false, false, "Add-on", true],
          },
        ],
      },
      {
        title: "Integrări & API",
        features: [
          {
            name: "Procesatori plăți",
            values: [true, true, true, true],
          },
          {
            name: "Contabilitate/1C/ERP",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "e-Prescripție/SIUI/CNAS",
            values: [false, false, "Add-on", true],
          },
          {
            name: "API extern & Webhooks",
            values: [false, false, "Add-on", "Prioritar"],
          },
          {
            name: "App pacient (programări/documente)",
            values: [false, false, "Add-on", "White-label"],
          },
        ],
      },
    ];
  }
  
  if (industry === "Tenis/Padel/Fotbal") {
    return [
      {
        title: "Utilizatori & Acces",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["2", "5", "10", "Nelimitat"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["5€/user", "5€/user", "5€/user", "Inclus"],
            muted: [false, false, false, false],
          },
          {
            name: "Roluri acoperite",
            values: ["Admin, Recepție", "+ Manager, Antrenor", "+ Organizator Comp., Groundkeeper", "Toate + Integrări avansate"],
            muted: [false, false, false, false],
          },
        ],
      },
      {
        title: "Rezervări & Sloturi",
        features: [
          {
            name: "Rezervare pe sloturi",
            values: [true, true, true, true],
          },
          {
            name: "Durate flexibile per sport",
            values: [true, true, true, true],
          },
          {
            name: "Prețuri peak/off-peak",
            values: [false, true, true, true],
          },
          {
            name: "Indoor/outdoor/nocturnă",
            values: [false, true, true, true],
          },
          {
            name: "Rezervări recurente/abonamente",
            values: [false, true, true, true],
          },
          {
            name: "Politici anulare/no-show",
            values: [false, true, true, true],
          },
          {
            name: "Liste așteptare & auto-umplere",
            values: [false, false, true, true],
          },
          {
            name: "Re-programare meteo",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Sport-Specific",
        features: [
          {
            name: "Tenis: single/dublu",
            values: [true, true, true, true],
          },
          {
            name: "Padel: 2v2, tarif per teren",
            values: [true, true, true, true],
          },
          {
            name: "Fotbal: 5v5/7v7/11v11",
            values: [true, true, true, true],
          },
          {
            name: "Tenis de masă: slot 30'/45'",
            values: [true, true, true, true],
          },
          {
            name: "Închiriere echipament",
            values: [false, true, true, true],
          },
          {
            name: "Pachete multi-sport/teren",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Membri & Antrenori",
        features: [
          {
            name: "Profil membru & istoric",
            values: [true, true, true, true],
          },
          {
            name: "Matching partener (nivel)",
            values: [false, false, true, true],
          },
          {
            name: "Gestionare echipe & roster",
            values: [false, true, true, true],
          },
          {
            name: "Programări antrenor & comisioane",
            values: [false, true, true, true],
          },
          {
            name: "Pachete lecții/vouchere",
            values: [false, true, true, true],
          },
          {
            name: "Carduri membru/abonamente",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Competiții & Turnee",
        features: [
          {
            name: "Ladder/league (tenis/padel)",
            values: [false, "Add-on", true, true],
          },
          {
            name: "Organizare turneu & tablouri",
            values: [false, "Add-on", true, true],
          },
          {
            name: "Taxe înscriere & scor live",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Operațiuni & Mentenanță",
        features: [
          {
            name: "Calendar mentenanță teren",
            values: [false, true, true, true],
          },
          {
            name: "Taskuri groundkeeping",
            values: [false, false, true, true],
          },
          {
            name: "Control iluminat/acces (IoT)",
            values: [false, "Add-on", "Add-on", "Inclus"],
          },
        ],
      },
      {
        title: "Plăți & POS",
        features: [
          {
            name: "Plăți online & facturi",
            values: [true, true, true, true],
          },
          {
            name: "Depozit/pre-autorizare card",
            values: [false, true, true, true],
          },
          {
            name: "POS bar/shop (apă, mingi)",
            values: [false, true, true, true],
          },
          {
            name: "Integrare fiscală/1C/ERP",
            values: [false, "Add-on", "Add-on", true],
          },
        ],
      },
      {
        title: "Marketing & Comunicare",
        features: [
          {
            name: "Reminder rezervare",
            values: ["Email", "Email + SMS", "Push/app", "Omni-channel"],
            muted: [false, false, false, false],
          },
          {
            name: "Campanii off-peak & bundle",
            values: [false, true, true, true],
          },
          {
            name: "Segmente (frecvenți, echipe)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Rapoarte & Analytics",
        features: [
          {
            name: "Grad ocupare teren/oră",
            values: [true, true, "Heatmap", "Multi-site"],
          },
          {
            name: "Venit pe oră/teren/sport",
            values: [false, true, true, true],
          },
          {
            name: "No-show/anulare, impact meteo",
            values: [false, false, true, true],
          },
          {
            name: "Performanță antrenori & ligi",
            values: [false, false, true, true],
          },
          {
            name: "Export CSV/PDF, 1C bridge",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Integrări & Digital",
        features: [
          {
            name: "Widget rezervare pe site",
            values: [true, true, true, true],
          },
          {
            name: "Integrare plăți/calendare",
            values: [true, true, true, true],
          },
          {
            name: "Control acces & lumini (IoT)",
            values: [false, "Add-on", "Add-on", "Inclus"],
          },
          {
            name: "API extern & Webhooks",
            values: [false, false, "Add-on", "Prioritar"],
          },
          {
            name: "App jucători (brand EasyReserv)",
            values: [false, false, true, true],
          },
          {
            name: "App white-label (brand club)",
            values: [false, false, "Add-on", "Inclus"],
          },
        ],
      },
    ];
  }
  
  if (industry === "Fitness") {
    return [
      {
        title: "Utilizatori & Acces",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["2", "5", "10", "Nelimitat"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["5€/user", "5€/user", "5€/user", "Inclus"],
            muted: [false, false, false, false],
          },
          {
            name: "Roluri acoperite",
            values: ["Admin, Recepție", "+ Antrenor, Manager", "+ Coordonator Clase, Contabil", "Toate + Integrare avansată"],
            muted: [false, false, false, false],
          },
        ],
      },
      {
        title: "Operațiuni & Programări",
        features: [
          {
            name: "Programări clase & PT",
            values: [true, true, "Cu liste așteptare", "Multi-locație"],
          },
          {
            name: "Check-in membru",
            values: ["Cod/QR", "Cod/QR", "Anti-fraud geofence", "SSO"],
          },
          {
            name: "Abonamente & carduri",
            values: [true, true, "Prorata & freeze", "Corporate"],
          },
          {
            name: "Pachete clase (5/10/20)",
            values: [true, true, true, true],
          },
          {
            name: "Politici anulare/no-show",
            values: [false, true, true, true],
          },
          {
            name: "Acces zone/lockers (turnicheți)",
            values: [false, "Add-on", "Add-on", "Inclus"],
          },
        ],
      },
      {
        title: "Membri & CRM",
        features: [
          {
            name: "Profil membru & istoric",
            values: [true, true, "Note sănătate", true],
          },
          {
            name: "Reamintiri (expirare, clasă, PT)",
            values: ["Email", "Email + SMS", "Push/app", "Omni-channel"],
            muted: [false, false, false, false],
          },
          {
            name: "Segmente (nou, inactiv, churn)",
            values: [false, true, true, "AI scoring"],
          },
          {
            name: "Loialitate & cupoane",
            values: [false, true, "Avansat", "Multi-brand"],
          },
          {
            name: "Chestionare NPS & feedback",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Instructori & Salarizare",
        features: [
          {
            name: "Orar antrenori/clase",
            values: [true, true, "Rotație automată", true],
          },
          {
            name: "Pontaj & aprobări ore",
            values: [false, true, true, true],
          },
          {
            name: "Ținte pe clasă (ocupare, rating)",
            values: [false, true, true, true],
          },
          {
            name: "Calcul comisioane PT/clasă",
            values: [false, false, true, true],
          },
          {
            name: "Evaluare performanță",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Plăți & Facturare",
        features: [
          {
            name: "POS recepție & factură",
            values: [true, true, true, true],
          },
          {
            name: "Recurență card (auto-renew)",
            values: [false, true, "Retry automat", "Reguli custom"],
          },
          {
            name: "Prorata, freeze, transfer abon.",
            values: [false, true, true, true],
          },
          {
            name: "Dunning (eșec plată)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Produse & Stoc (retail)",
        features: [
          {
            name: "Catalog produse & POS",
            values: [true, true, true, true],
          },
          {
            name: "Stoc & alerte low-stock",
            values: [false, true, true, true],
          },
          {
            name: "Rețetar & marjă (shake, bar)",
            values: [false, false, true, true],
          },
          {
            name: "Multi-depozit (locații)",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "Rapoarte & Analytics",
        features: [
          {
            name: "Attendance & ocupare clase",
            values: [true, true, true, true],
          },
          {
            name: "Vânzări, MRR/ARR, ARPU",
            values: [false, true, true, true],
          },
          {
            name: "Churn, retenție, cohortă",
            values: [false, false, true, true],
          },
          {
            name: "Performanță instructori",
            values: [false, true, true, true],
          },
          {
            name: "Dashboard multi-locație",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "Digital & Conținut",
        features: [
          {
            name: "Pagina publică clase",
            values: [true, true, true, true],
          },
          {
            name: "App membru (branding EasyReserv)",
            values: [false, false, true, true],
          },
          {
            name: "App white-label (brandul sălii)",
            values: [false, false, "Add-on", "Inclus"],
          },
          {
            name: "Bibliotecă video (on-demand/live)",
            values: [false, false, "Add-on", "Inclus + DRM"],
          },
        ],
      },
      {
        title: "Integrări & API",
        features: [
          {
            name: "Integrare procesator plăți",
            values: [true, true, true, true],
          },
          {
            name: "Integrare contabilitate/1C",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "Wearables (Apple/Google Fit)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "API extern & Webhooks",
            values: [false, false, "Add-on", "Prioritar"],
          },
        ],
      },
    ];
  }
  
  if (industry === "Chirii auto") {
    return [
      {
        title: "Utilizatori & Acces",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["2", "5", "10", "Nelimitat"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["5€/user", "5€/user", "5€/user", "Inclus"],
            muted: [false, false, false, false],
          },
          {
            name: "Roluri acoperite",
            values: ["Admin, Agent Front Desk", "+ Fleet Manager, Contabil", "+ Service/Mecanic, Claims", "Toate + Integrări avansate"],
            muted: [false, false, false, false],
          },
        ],
      },
      {
        title: "Operațiuni & Rezervări",
        features: [
          {
            name: "Rezervări web/telefon & calendar",
            values: [true, true, true, true],
          },
          {
            name: "Contracte cu e-semnătură",
            values: [true, true, true, true],
          },
          {
            name: "Depozite & pre-autorizări card",
            values: [false, true, true, true],
          },
          {
            name: "Tarife sezoniere & extraopțiuni",
            values: ["Simplu", "Avansat", "Pachete", "Multi-brand"],
            muted: [false, false, false, false],
          },
          {
            name: "Politici combustibil/kilometraj",
            values: [true, true, true, true],
          },
          {
            name: "Predare/Preluare cu orar",
            values: [false, true, true, true],
          },
          {
            name: "Check-in/out cu poze & checklist",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Flotă & Telematică",
        features: [
          {
            name: "Catalog vehicule & status",
            values: [true, true, true, true],
          },
          {
            name: "Service & mentenanță programată",
            values: [false, true, true, true],
          },
          {
            name: "Management daune & asigurare",
            values: [false, true, true, true],
          },
          {
            name: "Amenzi, rovinietă, taxe drum",
            values: [false, true, true, true],
          },
          {
            name: "Telematică/GPS tracking",
            values: [false, false, "Add-on", "Inclus"],
          },
        ],
      },
      {
        title: "Plăți & Facturare",
        features: [
          {
            name: "Facturi, proforme, chitanțe",
            values: [true, true, true, true],
          },
          {
            name: "Split plăți & multi-valută",
            values: [false, true, true, true],
          },
          {
            name: "Integrare 1C/ERP",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "Refund depozit & reconciliere",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Canale & Distribuție",
        features: [
          {
            name: "Booking Engine pe site",
            values: ["Add-on", true, true, true],
          },
          {
            name: "Channel Manager (OTA)",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "Paritate tarife & stop-sell",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Revenue & Pricing",
        features: [
          {
            name: "Sezoane & liste preț",
            values: [true, true, true, true],
          },
          {
            name: "Dynamic pricing",
            values: [false, false, true, "AI assist"],
          },
          {
            name: "Forecast & yield per class",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "CRM & Marketing B2B",
        features: [
          {
            name: "Profil client & istoric",
            values: [true, true, true, true],
          },
          {
            name: "E-mail/SMS reminder & extensii",
            values: [false, true, true, true],
          },
          {
            name: "Cupon/cod corporate & rate B2B",
            values: [false, true, true, true],
          },
          {
            name: "Campanii segmentate (RFV)",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Rapoarte & Analitice",
        features: [
          {
            name: "Utilizare flotă",
            values: [true, true, true, true],
          },
          {
            name: "Venit/auto, ADR, RevPAC",
            values: [false, true, true, true],
          },
          {
            name: "Daune & costuri service",
            values: [false, true, true, true],
          },
          {
            name: "Forecast cerere & lead time",
            values: [false, false, true, true],
          },
          {
            name: "Export CSV/PDF, 1C bridge",
            values: [false, true, true, true],
          },
          {
            name: "Dashboard multi-sediu/țară",
            values: [false, false, false, true],
          },
        ],
      },
    ];
  }
  
  if (industry === "Hotele & Pensiuni") {
    return [
      {
        title: "Utilizatori & Acces",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["3", "6", "10", "Nelimitat"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["5€/user", "5€/user", "5€/user", "Inclus"],
            muted: [false, false, false, false],
          },
          {
            name: "Roluri acoperite",
            values: ["Admin, Recepționer, Housekeeper", "+ Manager Operațiuni, Concierge", "+ Revenue Manager, F&B", "Toate + Integrări avansate"],
            muted: [false, false, false, false],
          },
        ],
      },
      {
        title: "PMS - Management Rezervări",
        features: [
          {
            name: "Calendar disponibilitate",
            values: [true, true, true, true],
          },
          {
            name: "Check-in/Check-out cu folio",
            values: [true, true, true, true],
          },
          {
            name: "Tipuri camere & tarife",
            values: [true, true, true, true],
          },
          {
            name: "Split/merge rezervări",
            values: [false, true, true, true],
          },
          {
            name: "Early check-in/late check-out",
            values: [false, true, true, true],
          },
          {
            name: "Pachete (cazare + servicii)",
            values: [false, true, true, true],
          },
          {
            name: "Inventar camere",
            values: [true, true, true, true],
          },
          {
            name: "City tax & valute multiple",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Housekeeping & Mentenanță",
        features: [
          {
            name: "Status cameră (Clean/Dirty)",
            values: [true, true, true, true],
          },
          {
            name: "Listă taskuri menaj",
            values: [true, true, true, true],
          },
          {
            name: "App mobil Housekeeping",
            values: [false, true, true, true],
          },
          {
            name: "Turndown/Lost & Found",
            values: [false, true, true, true],
          },
          {
            name: "Ticketing mentenanță cu SLA",
            values: [false, false, true, true],
          },
          {
            name: "Raport productivitate",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Plăți & Facturare",
        features: [
          {
            name: "POS front desk & folio",
            values: [true, true, true, true],
          },
          {
            name: "Facturi & proforme",
            values: [true, true, true, true],
          },
          {
            name: "Semnături digitale/PDF",
            values: [true, true, true, true],
          },
          {
            name: "Integrare 1C fiscalizat",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "Garanții card/preautorizări",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Vânzare Directă & Canale",
        features: [
          {
            name: "Booking Engine pe site",
            values: ["Add-on", "Add-on", true, true],
          },
          {
            name: "Coduri promo/corporate rates",
            values: [false, true, true, true],
          },
          {
            name: "Vouchere cadou",
            values: [false, true, true, true],
          },
          {
            name: "Channel Manager (OTA)",
            values: [false, "Add-on", "Add-on", true],
          },
          {
            name: "Paritate tarife/stop-sell",
            values: [false, "Add-on", "Add-on", true],
          },
        ],
      },
      {
        title: "Revenue & Rate Management",
        features: [
          {
            name: "Sezoane & rate plans",
            values: [true, true, true, true],
          },
          {
            name: "Restricții (CTA, CTD, LOS)",
            values: [false, true, true, true],
          },
          {
            name: "Calendar tarife & bulk update",
            values: [false, true, true, true],
          },
          {
            name: "Pick-up, pace, forecast",
            values: [false, false, true, true],
          },
          {
            name: "Recomandări dinamice (AI)",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "F&B & Upsell",
        features: [
          {
            name: "Room service (bridge Restaurant)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Mini-bar: stoc & folio",
            values: [false, true, true, true],
          },
          {
            name: "Mese/Evenimente (săli)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Spa/Wellness programări",
            values: [false, "Add-on", "Add-on", true],
          },
        ],
      },
      {
        title: "CRM & Marketing",
        features: [
          {
            name: "Profil client & istoric",
            values: [true, true, true, true],
          },
          {
            name: "Email/SMS pre/post-stay",
            values: [false, true, true, true],
          },
          {
            name: "Upsell (upgrade, late checkout)",
            values: [false, true, true, true],
          },
          {
            name: "Segmente (corporate, OTA)",
            values: [false, false, true, true],
          },
          {
            name: "Campanii automate & cupoane",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Rapoarte & Analitice",
        features: [
          {
            name: "Arrivals/Departures, Occupancy",
            values: [true, true, true, true],
          },
          {
            name: "ADR, RevPAR, Segmentation",
            values: [false, true, true, true],
          },
          {
            name: "Forecast & Pace",
            values: [false, false, true, true],
          },
          {
            name: "Export CSV/PDF, 1C bridge",
            values: [false, true, true, true],
          },
          {
            name: "Dashboard multi-property",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "Integrări & Control Avansat",
        features: [
          {
            name: "Control chei (card/keycode)",
            values: [false, false, "Add-on", true],
          },
          {
            name: "Self check-in kiosk",
            values: [false, false, "Add-on", true],
          },
          {
            name: "API extern/Webhooks",
            values: [false, false, "Add-on", true],
          },
          {
            name: "SSO & audit avansat",
            values: [false, false, false, true],
          },
        ],
      },
    ];
  }
  
  if (industry === "Spălătorii auto") {
    return [
      {
        title: "Utilizatori & Personal",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["1", "2", "3", "3+ (scalabil)"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["-", "5€/user", "5€/user", "La cerere"],
            muted: [true, false, false, false],
          },
          {
            name: "Management angajați & pontaj",
            values: [false, true, true, true],
          },
          {
            name: "Planificare ture/echipe",
            values: [false, true, true, true],
          },
          {
            name: "Targetare timpi/tipuri lucrări",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Rezervări & Programări",
        features: [
          {
            name: "Rezervări online & walk-in",
            values: ["Basic", "Cu calendar", "Cu prioritizare", "Auto-redistribuire"],
            muted: [false, false, false, false],
          },
          {
            name: "Formulare personalizabile",
            values: [false, true, true, true],
          },
          {
            name: "Confirmare automată/manuală",
            values: ["Manuală", true, true, true],
          },
        ],
      },
      {
        title: "Servicii & Prețuri",
        features: [
          {
            name: "Prețuri pe caroserie/lucrări",
            values: ["-", true, "Avansat", "AI Suggest"],
            muted: [true, false, false, false],
          },
          {
            name: "Servicii configurabile",
            values: ["Static", "Cu variații", "Pachete & upsell", "Bundle dinamic"],
            muted: [false, false, false, false],
          },
          {
            name: "Lucrări extra (ceară, motor)",
            values: [false, true, true, true],
          },
          {
            name: "Pachete promoționale",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Management Financiar",
        features: [
          {
            name: "Închidere de zi",
            values: ["Simplificat", true, "Avansat", "Integrabil 1C"],
          },
          {
            name: "Istoric plăți & reconciliere",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "CRM & Clienți",
        features: [
          {
            name: "CRM clienți",
            values: [false, true, true, "Integrat loyalty"],
          },
          {
            name: "Istoric mașină/preferințe",
            values: [false, true, true, true],
          },
          {
            name: "Alerte revizii/spălare periodică",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Comenzi Mobile & Flotă",
        features: [
          {
            name: "Comenzi Pickup/mobil",
            values: [false, false, true, "Cu geolocalizare"],
          },
          {
            name: "Gestionare flotă mobilă/rute",
            values: [false, false, false, true],
          },
        ],
      },
      {
        title: "Stocuri & Consumabile",
        features: [
          {
            name: "Stocuri consumabile",
            values: [false, false, true, true],
          },
          {
            name: "Alerte low stock/inventar",
            values: [false, false, true, true],
          },
          {
            name: "Costuri materiale/marjă",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Marketing & Campanii",
        features: [
          {
            name: "Campanii marketing",
            values: ["-", "SMS promoționale", "Push, Reminder", "Segmente & trigger"],
            muted: [true, false, false, false],
          },
          {
            name: "Reminder spălare/alertă vreme",
            values: [false, true, true, true],
          },
          {
            name: "Promoții happy hour",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Rapoarte & Analiză",
        features: [
          {
            name: "Rapoarte & analitice",
            values: ["Simplu", "Avansat", "Customizabil", "PowerBI"],
            muted: [false, false, false, false],
          },
          {
            name: "Venituri/orar/tip mașină",
            values: [true, true, true, true],
          },
          {
            name: "Vânzări pe lucrări/echipe",
            values: [false, true, true, true],
          },
          {
            name: "Export PDF, CSV, 1C",
            values: [false, true, true, true],
          },
        ],
      },
    ];
  }
  
  if (industry === "Cafenele") {
    return [
      {
        title: "Utilizatori & Personal",
        features: [
          {
            name: "Utilizatori incluși",
            values: ["2", "2", "2", "2 (scalabil)"],
            muted: [false, false, false, false],
          },
          {
            name: "Utilizatori suplimentari",
            values: ["-", "5€/user", "5€/user", "La cerere"],
            muted: [true, false, false, false],
          },
          {
            name: "Management angajați & pontaj",
            values: [false, true, true, true],
          },
          {
            name: "Planificare ture",
            values: [false, true, true, true],
          },
          {
            name: "Urmărire productivitate",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "POS & Încasări",
        features: [
          {
            name: "Management încasări",
            values: ["Simplificat", "Standard", "Avansat", "Integrabil 1C"],
            muted: [false, false, false, false],
          },
          {
            name: "Istoric plăți / Reconcilieri",
            values: ["Parțial", true, true, true],
          },
          {
            name: "POS configurabil",
            values: ["Basic", "Layout personalizat", "Preseturi rapide", "Fiscalizat"],
            muted: [false, false, false, false],
          },
          {
            name: "Roluri & permisiuni",
            values: [false, true, true, true],
          },
          {
            name: "Shortcut-uri vânzare rapidă",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Meniu & Produse",
        features: [
          {
            name: "Meniu digital",
            values: ["Static", "Dinamic", "Pe momente zi", "Multi-locație"],
            muted: [false, false, false, false],
          },
          {
            name: "Variabile produse (mărime, sirop)",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Clienți & Comenzi",
        features: [
          {
            name: "Profiluri clienți (CRM)",
            values: [false, true, true, "Avansat"],
          },
          {
            name: "Istoric comenzi / preferințe",
            values: [false, true, true, true],
          },
          {
            name: "Comenzi rapide (pickup)",
            values: [false, true, true, "Cu orar programabil"],
          },
          {
            name: "Confirmare ready for pickup",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Stocuri & Rețetar",
        features: [
          {
            name: "Management stocuri",
            values: [false, false, true, true],
          },
          {
            name: "Scădere automată stoc",
            values: [false, false, true, true],
          },
          {
            name: "Alerte low stock / inventare",
            values: [false, false, true, true],
          },
          {
            name: "Rețetar băuturi & cost/porție",
            values: [false, false, true, true],
          },
        ],
      },
      {
        title: "Marketing & Retenție",
        features: [
          {
            name: "Marketing & campanii",
            values: ["-", "Push/SMS", "Segmente + Cupoane", "Automatizări AI"],
            muted: [true, false, false, false],
          },
          {
            name: "Campanii happy hour",
            values: [false, true, true, true],
          },
          {
            name: "Cupoane personalizate",
            values: [false, true, true, true],
          },
        ],
      },
      {
        title: "Analiză & Rapoarte",
        features: [
          {
            name: "Analiză & KPI",
            values: ["Simplu", "Mediu", "Avansat", "Personalizat"],
            muted: [false, false, false, false],
          },
          {
            name: "Vânzări pe oră/zi/top produse",
            values: [true, true, true, true],
          },
          {
            name: "Marjă / cost / productivitate",
            values: [false, true, true, true],
          },
          {
            name: "Exporturi / rapoarte PDF",
            values: [false, true, true, "Integrabil 1C"],
          },
          {
            name: "Stocare documente",
            values: [false, true, true, "Backup extern"],
          },
        ],
      },
      {
        title: "Multi-locație & Avansate",
        features: [
          {
            name: "Multi-locație & flotă curieri",
            values: [false, false, false, true],
          },
        ],
      },
    ];
  }

  return [
  {
    title: "Roluri Utilizatori",
    features: [
      {
        name: "Admin",
        values: ["1", "1", "1", "Nelimitat"],
        muted: [false, false, false, false],
      },
      {
        name: "Hostess",
        values: ["1", "1", "1", "Nelimitat"],
        muted: [false, false, false, false],
      },
      {
        name: "Waiter",
        values: ["-", "2", "5", "Nelimitat"],
        muted: [true, false, false, false],
      },
      {
        name: "Cook",
        values: ["-", "-", "3", "Nelimitat"],
        muted: [true, true, false, false],
      },
      {
        name: "Curier",
        values: ["-", "-", "-", "Nelimitat"],
        muted: [true, true, true, false],
      },
    ],
  },
  {
    title: "Rezervări & Mese",
    features: [
      {
        name: "Accept/Reject rezervări",
        values: [true, true, true, true],
      },
      {
        name: "Calendar Access",
        values: [false, true, true, true],
      },
      {
        name: "Create New/Modify",
        values: [true, true, true, true],
      },
      {
        name: "Pre-order",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Management Stocuri",
    features: [
      {
        name: "Rețetar/scădere automată",
        values: [false, false, true, true],
      },
      {
        name: "CRUD Supplier/Order/History",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Rapoarte",
    features: [
      {
        name: "Vânzări & rezervări",
        values: [false, false, true, true],
      },
      {
        name: "KPI angajați/productivitate",
        values: [false, false, true, true],
      },
      {
        name: "Cost/Marjă produs",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Staff Management",
    features: [
      {
        name: "CRUD Employee",
        values: [true, true, true, true],
      },
      {
        name: "Ture/vacanțe/pontaj",
        values: [false, false, true, true],
      },
      {
        name: "Intrare/Ieșire",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Livrare & Transport",
    features: [
      {
        name: "Comenzi livrare",
        values: [false, false, false, true],
      },
      {
        name: "Curier App",
        values: [false, false, false, true],
      },
      {
        name: "Rute/alocare curieri",
        values: [false, false, false, true],
      },
    ],
  },
  {
    title: "Marketing Tools",
    features: [
      {
        name: "CRUD Articole",
        values: ["1/lună", "1/lună", "2/lună", "2+/lună"],
        muted: [false, false, false, false],
      },
      {
        name: "Targeting Push/SMS",
        values: [true, true, true, true],
      },
      {
        name: "Segmentare avansată",
        values: [false, false, true, true],
      },
    ],
  },
];
};

export const ContentWrapperSection = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isAnnual, setIsAnnual] = React.useState(false);
  
  const searchParams = new URLSearchParams(window.location.search);
  const industryFromUrl = searchParams.get('industry');
  const [selectedBusiness, setSelectedBusiness] = React.useState(industryFromUrl || "Restaurante");

  const pricingPlans = getPricingPlans(selectedBusiness);
  const comparisonCategories = getComparisonCategories(selectedBusiness);

  const calculatePrice = (monthlyPrice: number | null, isAnnual: boolean) => {
    if (monthlyPrice === null) {
      return "Preț personalizat";
    }
    
    const price = isAnnual ? monthlyPrice * 0.9 : monthlyPrice;
    const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
    return `€${formattedPrice}`;
  };

  return (
    <section className="flex flex-col items-center gap-8 w-full px-4 md:px-8 py-12">
      {/* Header Section */}
      <Container>
        <div className="col-span-12 flex flex-col items-center gap-[43px]">
          <div className="flex items-center justify-center gap-6 w-full flex-wrap">
            <h1 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl text-center tracking-[0] leading-[normal]">
              Planuri de abonament pentru
            </h1>

            <select 
              value={selectedBusiness}
              onChange={(e) => setSelectedBusiness(e.target.value)}
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833] [font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-2xl md:text-[32px] tracking-[0.64px] leading-[44.8px] cursor-pointer appearance-none bg-no-repeat bg-right pr-12"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%232d2c65' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center'
              }}
            >
              <option value="Restaurante">Restaurante</option>
              <option value="Cafenele">Cafenele</option>
              <option value="Saloane de frumusețe">Saloane de frumusețe</option>
              <option value="Barbershopuri">Barbershopuri</option>
              <option value="Hotele & Pensiuni">Hotele & Pensiuni</option>
              <option value="Chirii auto">Chirii auto</option>
              <option value="Fitness">Fitness</option>
              <option value="Medical">Medical</option>
              <option value="Retail">Retail</option>
              <option value="Spălătorii auto">Spălătorii auto</option>
              <option value="Tenis/Padel/Fotbal">Tenis/Padel/Fotbal</option>
            </select>
          </div>

          <div className="inline-flex items-center justify-center gap-6 flex-wrap">
            <div className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
              Economisește cu plata anuală
            </div>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative flex items-center px-1 py-0.5 rounded-[100px] h-8 w-[52px] transition-colors ${
                isAnnual ? 'bg-[#2d2c65]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-[22px]' : 'translate-x-1'
                }`}
              />
            </button>

            <Badge className="inline-flex items-center justify-center gap-2.5 p-2.5 bg-[#282828] rounded-[10px] h-auto">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
                ECONOMISEȘTE 10%
              </span>
            </Badge>
          </div>
        </div>
      </Container>

      {/* Pricing Plans Section */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-0">
          {/* Most Popular badges row */}
          {pricingPlans.map((plan, index) => (
            <div
              key={`badge-${index}`}
              className={`col-span-12 md:col-span-3 flex h-8 items-center justify-center gap-1 px-2 py-1.5 ${
                plan.isPopular
                  ? "bg-[#2d2c65] rounded-[40px_40px_0px_0px]"
                  : "opacity-0 bg-[#2d2c65]"
              }`}
            >
              <div className="[font-family:'Onest',Helvetica] font-semibold text-white text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                Cel mai popular
              </div>
              {plan.isPopular && (
                <SparklesIcon className="w-3.5 h-3.5 text-white" />
              )}
            </div>
          ))}

          {/* Pricing Cards row */}
          {pricingPlans.map((plan, index) => (
            <div key={`plan-${index}`} className="col-span-12 md:col-span-3">
              <Card
                className={`h-full rounded-none ${
                  plan.isPopular
                    ? "border-2 border-[#2d2c65]"
                    : "border border-zinc-200"
                }`}
              >
                <CardContent className="flex flex-col items-start gap-4 p-5">
                  <div className="flex flex-col items-start gap-1 w-full h-[60px]">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 w-full h-[55px]">
                    <span className={`[font-family:'Onest',Helvetica] font-bold text-[#282828] tracking-[0] whitespace-nowrap ${
                      plan.monthlyPrice === null 
                        ? "text-2xl leading-[30px]" 
                        : "text-4xl md:text-5xl leading-[55.2px]"
                    }`}>
                      {calculatePrice(plan.monthlyPrice, isAnnual)}
                    </span>
                    {plan.monthlyPrice !== null && (
                      <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                        / lună
                      </span>
                    )}
                  </div>

                  {plan.planId ? (
                    <a
                      href={`https://app.easyreserv.io/register?planId=${plan.planId}`}
                      className={`w-full h-auto px-4 py-3 rounded-[5px] inline-flex items-center justify-center ${
                        plan.isPopular
                          ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                          : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                      }`}
                    >
                      <span className="[font-family:'Onest',Helvetica] font-bold text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Începe perioada de test gratuită
                      </span>
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className={`w-full h-auto px-4 py-3 rounded-[5px] inline-flex items-center justify-center ${
                        plan.isPopular
                          ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                          : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                      }`}
                    >
                      <span className="[font-family:'Onest',Helvetica] font-bold text-sm tracking-[0] leading-5 whitespace-nowrap">
                        Contactează-ne
                      </span>
                    </Link>
                  )}

                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="[font-family:'Onest',Helvetica] font-semibold text-[#909090] text-base tracking-[0] leading-[18.4px]">
                      Ce primești
                    </div>

                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 w-full"
                      >
                        <CheckIcon className="w-5 h-5 text-[#2d2c65] flex-shrink-0" />
                        <div className="flex-1 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm tracking-[0] leading-[17.5px]">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* See all features button */}
          <div className="col-span-12">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center gap-2 p-4 w-full bg-white border border-zinc-200 hover:bg-gray-50 transition-colors"
            >
              <span className="[font-family:'Onest',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[17.6px] whitespace-nowrap">
                {isExpanded ? 'Ascunde caracteristicile' : 'Vezi toate caracteristicile'}
              </span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      {isExpanded && (
      <>
      {/* Mobile Version - Card-uri verticale */}
      <div className="block md:hidden w-full px-4 mt-8 space-y-6">
        {pricingPlans.map((plan, planIndex) => (
          <Card key={planIndex} className={`${plan.isPopular ? 'border-2 border-[#2d2c65]' : 'border border-zinc-200'}`}>
            <CardContent className="p-6">
              {/* Plan Header */}
              <div className="flex flex-col gap-4 pb-6 border-b border-zinc-200">
                <div className="flex items-center justify-between">
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <Badge className="bg-[#2d2c65] text-white">Popular</Badge>
                  )}
                </div>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className={`[font-family:'Onest',Helvetica] font-bold text-[#282828] ${
                    plan.monthlyPrice === null ? "text-xl" : "text-3xl"
                  }`}>
                    {calculatePrice(plan.monthlyPrice, isAnnual)}
                  </span>
                  {plan.monthlyPrice !== null && (
                    <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm">
                      / lună
                    </span>
                  )}
                </div>
              </div>

              {/* Categories with Accordions */}
              <Accordion type="multiple" className="w-full mt-4">
                {comparisonCategories.map((category, categoryIndex) => (
                  <AccordionItem key={categoryIndex} value={`category-${categoryIndex}`}>
                    <AccordionTrigger className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-lg">
                      {category.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-2 flex-1">
                              <span className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-sm">
                                {feature.name}
                              </span>
                              <HelpCircleIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            </div>
                            <div className="flex items-center justify-end min-w-[80px]">
                              {typeof feature.values[planIndex] === "boolean" ? (
                                feature.values[planIndex] ? (
                                  <CheckIcon className="w-5 h-5 text-[#2d2c65]" />
                                ) : (
                                  <XIcon className="w-5 h-5 text-gray-400" />
                                )
                              ) : (
                                <span className={`[font-family:'Inter',Helvetica] font-semibold text-sm text-right ${
                                  feature.muted && feature.muted[planIndex]
                                    ? "text-gray-400"
                                    : "text-[#282828]"
                                }`}>
                                  {feature.values[planIndex]}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA Button */}
              <div className="mt-6 pt-6 border-t border-zinc-200">
                {plan.planId ? (
                  <a
                    href={`https://app.easyreserv.io/register?planId=${plan.planId}`}
                    className={`w-full h-auto px-6 py-3 rounded-[5px] inline-flex items-center justify-center text-center ${
                      plan.isPopular
                        ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                        : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                    }`}
                  >
                    <span className="[font-family:'Onest',Helvetica] font-bold text-sm">
                      Începe perioada de test gratuită
                    </span>
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className={`w-full h-auto px-6 py-3 rounded-[5px] inline-flex items-center justify-center text-center ${
                      plan.isPopular
                        ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                        : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                    }`}
                  >
                    <span className="[font-family:'Onest',Helvetica] font-bold text-sm">
                      Contactează-ne
                    </span>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Version - Tabel clasic */}
      <div className="hidden md:block w-full max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-12 gap-0">
          {/* Table Header - Plan Names */}
          <div className="col-span-4"></div>
          {pricingPlans.map((plan, index) => (
            <div
              key={`header-${index}`}
              className={`col-span-6 md:col-span-2 flex items-center justify-center py-3 border-b border-zinc-200 ${
                index === 2 ? "bg-[#2d2c6512] border-4 border-[#2d2c6566]" : ""
              }`}
            >
              <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-base tracking-[0]">
                {plan.name}
              </h4>
            </div>
          ))}

          {/* Comparison Categories */}
          {comparisonCategories.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              {/* Category Header */}
              <div className="col-span-12 px-4 py-4 bg-[#f9fbfc] border-t border-zinc-200">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                  {category.title}
                </h3>
              </div>

              {/* Category Features */}
              {category.features.map((feature, featureIndex) => (
                <React.Fragment key={featureIndex}>
                  <div className="col-span-4 flex items-center gap-2 px-4 py-4 border-b border-zinc-200 bg-white">
                    <div className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-base tracking-[0] leading-[18.4px]">
                      {feature.name}
                    </div>
                    <HelpCircleIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>

                  {feature.values.map((value, valueIndex) => (
                    <div
                      key={valueIndex}
                      className={`col-span-6 md:col-span-2 flex items-center justify-center px-2 py-4 border-b border-l border-zinc-200 ${
                        valueIndex === pricingPlans.length - 1 ? "border-r" : ""
                      } ${valueIndex === 2 ? "bg-[#2d2c6505]" : "bg-white"}`}
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckIcon className="w-6 h-6 text-[#2d2c65]" />
                        ) : (
                          <XIcon className="w-6 h-6 text-gray-400" />
                        )
                      ) : (
                        <div
                          className={`[font-family:'Inter',Helvetica] font-semibold text-base tracking-[0] leading-[18.4px] whitespace-nowrap ${
                            feature.muted && feature.muted[valueIndex]
                              ? "text-sementicscolorfgmuted"
                              : "text-[#282828]"
                          }`}
                        >
                          {value}
                        </div>
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}

          {/* Bottom CTA Cards */}
          <div className="col-span-4"></div>
          {pricingPlans.map((plan, index) => (
            <div key={`cta-${index}`} className="col-span-6 md:col-span-2">
              <Card className={`h-full rounded-none border border-zinc-200 ${index === 2 ? "bg-[#2d2c6505]" : ""}`}>
                <CardContent className="flex flex-col items-start gap-4 p-5">
                  <div className="flex flex-col items-start gap-1 w-full h-[60px]">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 w-full h-[40px]">
                    <span className={`[font-family:'Onest',Helvetica] font-bold text-[#282828] tracking-[0] whitespace-nowrap ${
                      plan.monthlyPrice === null 
                        ? "text-xl leading-[28px]" 
                        : "text-[32px] leading-[36.8px]"
                    }`}>
                      {calculatePrice(plan.monthlyPrice, isAnnual)}
                    </span>
                    {plan.monthlyPrice !== null && (
                      <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                        / lună
                      </span>
                    )}
                  </div>

                  {plan.planId ? (
                    <a
                      href={`https://app.easyreserv.io/register?planId=${plan.planId}`}
                      className={`w-full h-auto px-3 py-2.5 rounded-[5px] inline-flex items-center justify-center text-center ${
                        plan.isPopular
                          ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                          : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                      }`}
                    >
                      <span className="[font-family:'Onest',Helvetica] font-bold text-xs tracking-[0] leading-[16px]">
                        Începe perioada de test gratuită
                      </span>
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className={`w-full h-auto px-3 py-2.5 rounded-[5px] inline-flex items-center justify-center text-center ${
                        plan.isPopular
                          ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                          : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                      }`}
                    >
                      <span className="[font-family:'Onest',Helvetica] font-bold text-xs tracking-[0] leading-[16px]">
                        Contactează-ne
                      </span>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      </>
      )}
    </section>
  );
};
