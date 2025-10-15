import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

const navigationItems = [
  { label: "About Us", hasDropdown: false },
  { label: "Solutions", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Contact", hasDropdown: false },
  { label: "Contact us", hasDropdown: false },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="w-full py-5 bg-white">
      <Container grid={false}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-[11px]">
            <img
              className="w-[47px] h-[46px]"
              alt="Logo icon"
              src="/figmaAssets/logo-icon.svg"
            />
            <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-semibold text-[#282828] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
              EasyReserv.io
            </div>
          </div>

          {/* Navigation + Actions */}
          <div className="flex items-center gap-6">
            {/* Navigation Items */}
            <div className="flex items-center gap-6">
              {navigationItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1 cursor-pointer">
                  <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                    {item.label}
                  </div>
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-[18px] h-[18px] text-[#282828]" />
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button className="h-auto px-6 py-4 bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px]">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
                  Sign up
                </span>
              </Button>

              <div className="flex items-center gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#28282880] cursor-pointer hover:bg-gray-50 transition-colors">
                <img className="w-4 h-4" alt="Us" src="/figmaAssets/us.svg" />
                <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[22.4px] whitespace-nowrap">
                  EN
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
