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

const industryPricing: Record<string, { basic: number; standard: number; pro: number }> = {
  "Restaurante": { basic: 50, standard: 125, pro: 200 },
  "Cafenele": { basic: 49, standard: 99, pro: 149 },
  "Saloane de frumusețe": { basic: 49, standard: 99, pro: 149 },
  "Barbershopuri": { basic: 49, standard: 99, pro: 149 },
  "Hotele & Pensiuni": { basic: 50, standard: 125, pro: 200 },
  "Chirii auto": { basic: 50, standard: 125, pro: 200 },
  "Fitness": { basic: 49, standard: 99, pro: 149 },
  "Medical": { basic: 49, standard: 99, pro: 149 },
  "Retail": { basic: 49, standard: 99, pro: 149 },
  "Spălătorii auto": { basic: 49, standard: 99, pro: 149 },
};

const getPricingPlans = (industry: string) => [
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

const comparisonCategories = [
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

export const ContentWrapperSection = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isAnnual, setIsAnnual] = React.useState(false);
  const [selectedBusiness, setSelectedBusiness] = React.useState("Restaurante");

  const pricingPlans = getPricingPlans(selectedBusiness);

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
                  <div className="flex flex-col items-start gap-1 w-full min-h-[60px]">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 w-full">
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
      <div className="w-full max-w-7xl mx-auto px-4 mt-8">
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
                  <div className="flex flex-col items-start gap-1 w-full min-h-[65px]">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 w-full min-h-[40px]">
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
      )}
    </section>
  );
};
