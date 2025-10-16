import {
  CheckIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/Container";

const pricingPlans = [
  {
    name: "Basic",
    description: "Best for Small Businesses",
    monthlyPrice: 50,
    isPopular: false,
    buttonVariant: "outline" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
  {
    name: "Standard",
    description: "Best for Small Businesses",
    monthlyPrice: 125,
    isPopular: false,
    buttonVariant: "outline" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
  {
    name: "Pro",
    description: "Best for Small Businesses",
    monthlyPrice: 200,
    isPopular: true,
    buttonVariant: "default" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
  {
    name: "Enterprise",
    description: "Best for Small Businesses",
    monthlyPrice: null,
    isPopular: false,
    buttonVariant: "outline" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
];

const comparisonCategories = [
  {
    title: "User Types",
    features: [
      {
        name: "Admin",
        values: ["1", "1", "1", "Unlimited"],
        muted: [true, false, false, false],
      },
      {
        name: "Hostess",
        values: ["1", "1", "1", "Unlimited"],
        muted: [true, false, false, false],
      },
      {
        name: "Waiter",
        values: ["-", "2", "5", "Unlimited"],
        muted: [true, false, false, false],
      },
      {
        name: "Cook",
        values: ["-", "-", "3", "Unlimited"],
        muted: [true, false, false, false],
      },
    ],
  },
  {
    title: "Business Setup",
    features: [
      {
        name: "Working Hours Setup",
        values: [true, true, true, true],
      },
      {
        name: "Booking Duration Setup",
        values: [true, true, true, true],
      },
      {
        name: "10 Gallery Photo",
        values: [true, true, true, true],
      },
      {
        name: "Point on Map Setup",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Place Setup",
    features: [
      {
        name: "CRUD Place",
        values: [true, true, true, true],
      },
      {
        name: "CRUD Tables",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Menu",
    features: [
      {
        name: "CRUD Menu",
        values: [true, true, true, true],
      },
      {
        name: "Import Menu Items",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Reservations",
    features: [
      {
        name: "Accept / Reject",
        values: [true, true, true, true],
      },
      {
        name: "Reservation Tracking",
        values: [true, true, true, true],
      },
      {
        name: "Calendar Access",
        values: [true, true, true, true],
      },
      {
        name: "View Client Reviews",
        values: [false, false, true, true],
      },
      {
        name: "Modify Reservations",
        values: [true, true, true, true],
      },
      {
        name: "Create New Reservations",
        values: [true, true, true, true],
      },
      {
        name: "Create a Pre-Order / Order",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Order Management",
    features: [
      {
        name: "Confirm / Reject",
        values: [false, false, true, true],
      },
      {
        name: "To deliver",
        values: [false, false, true, true],
      },
      {
        name: "Notifications",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Staff Management",
    features: [
      {
        name: "CRUD Empoyee",
        values: [true, true, true, true],
      },
      {
        name: "Working Schedule Setup",
        values: [true, true, true, true],
      },
      {
        name: "Manage Vacations / Days off",
        values: [false, false, true, true],
      },
      {
        name: "Document Storage and Management",
        values: [false, false, true, true],
      },
      {
        name: "Staff Calendar Overview",
        values: [false, false, true, true],
      },
      {
        name: "CheckIcon IN/CheckIcon OUT",
        values: [false, false, true, true],
      },
      {
        name: "Employee Worked Timetable",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Clients Management",
    features: [
      {
        name: "Client List",
        values: [false, false, true, true],
      },
      {
        name: "Client Details",
        values: [false, false, true, true],
      },
      {
        name: "Reservation Details per Client",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Marketing Tools",
    features: [
      {
        name: "CRUD Article",
        values: ["1/month", "1/month", "2/month", "2/month"],
        muted: [true, true, true, true],
      },
      {
        name: "Targeting",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Reports",
    features: [
      {
        name: "Dashboard Acces",
        values: [false, false, true, true],
      },
      {
        name: "Reservation Reports",
        values: [false, false, true, true],
      },
      {
        name: "Client Reports",
        values: [false, false, true, true],
      },
      {
        name: "Business Rating Reports",
        values: [false, false, true, true],
      },
      {
        name: "Sales Reports",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Stock Management",
    features: [
      {
        name: "CRUD Supplier",
        values: [false, false, true, true],
      },
      {
        name: "CRUD Order",
        values: [false, false, true, true],
      },
      {
        name: "Order History",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Transport Park",
    features: [
      {
        name: "Transport List",
        values: [false, false, true, true],
      },
      {
        name: "Assign Transport Employee",
        values: [false, false, true, true],
      },
      {
        name: "Order History",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Task Planning",
    features: [
      {
        name: "CRUD Project",
        values: [false, false, true, true],
      },
      {
        name: "CRUD Task",
        values: [false, false, true, true],
      },
      {
        name: "Task Assignment",
        values: [false, false, true, true],
      },
      {
        name: "Progress Tracking",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Financial Management",
    features: [
      {
        name: "Debit/Credit",
        values: [false, false, false, true],
      },
    ],
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isAnnual, setIsAnnual] = React.useState(false);
  const [selectedBusiness, setSelectedBusiness] = React.useState("Restaurante");

  const calculatePrice = (monthlyPrice: number | null, isAnnual: boolean) => {
    if (monthlyPrice === null) {
      return "Contact US";
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
              Subscription plans for
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
              <option value="Hoteluri">Hoteluri</option>
              <option value="Sali de sport">Sali de sport</option>
              <option value="Saloane">Saloane</option>
            </select>
          </div>

          <div className="inline-flex items-center justify-center gap-6 flex-wrap">
            <div className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
              Save with annual billing
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
                SAVE 10%
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
              <div className="[font-family:'Onest',Helvetica] font-semibold text-sementicscolorfgon-accent text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                Most Popular
              </div>
              {plan.isPopular && (
                <SparklesIcon className="w-3.5 h-3.5 text-sementicscolorfgon-accent" />
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
                <CardContent className="flex flex-col items-start gap-6 p-5">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-[15px] w-full">
                    <div className="inline-flex items-end gap-1">
                      <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[55.2px] whitespace-nowrap">
                        {calculatePrice(plan.monthlyPrice, isAnnual)}
                      </span>
                      {plan.monthlyPrice !== null && (
                        <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                          /month
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full h-auto px-6 py-4 rounded-[5px] ${
                      plan.isPopular
                        ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                        : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                    }`}
                  >
                    <span className="[font-family:'Onest',Helvetica] font-bold text-base tracking-[0] leading-5">
                      Start Free Trial
                    </span>
                  </Button>

                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="[font-family:'Onest',Helvetica] font-semibold text-[#909090] text-base tracking-[0] leading-[18.4px]">
                      What you get
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
                {isExpanded ? 'Hide features' : 'See all features'}
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
                <CardContent className="flex flex-col items-start gap-5 p-5">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-[15px] w-full">
                    <div className="inline-flex items-end gap-1">
                      <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-[32px] tracking-[0] leading-[36.8px] whitespace-nowrap">
                        {calculatePrice(plan.monthlyPrice, isAnnual)}
                      </span>
                      {plan.monthlyPrice !== null && (
                        <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                          /month
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full h-auto px-6 py-4 rounded-[5px] ${
                      plan.isPopular
                        ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                        : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                    }`}
                  >
                    <span className="[font-family:'Onest',Helvetica] font-bold text-base tracking-[0] leading-5">
                      Start Free Trial
                    </span>
                  </Button>
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
