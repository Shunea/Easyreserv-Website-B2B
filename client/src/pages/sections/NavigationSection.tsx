import { ChevronDownIcon, Menu } from "lucide-react";
import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { label: "Despre noi", hasDropdown: false, href: "/about" },
  { label: "Soluții", hasDropdown: true, href: "/solutions" },
  { label: "Prețuri", hasDropdown: false, href: "/pricing" },
  { label: "Blog", hasDropdown: false, href: "/blog" },
  { label: "Contact", hasDropdown: false, href: "/contact" },
];

export const NavigationSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="relative z-50 w-full py-5 bg-white">
      <Container>
        {/* Logo - Left side */}
        <div className="col-span-6 md:col-span-3 flex items-center gap-[11px]">
          <Link to="/" className="flex items-center gap-[11px] cursor-pointer hover:opacity-80 transition-opacity">
            <img
              className="w-[47px] h-[46px]"
              alt="Logo"
              src="/figmaAssets/logo.svg"
            />
            <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-semibold text-[#282828] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
              EasyReserv.io
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Right side */}
        <div className="col-span-6 md:col-span-9 hidden lg:flex items-center justify-end gap-6">
          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            {navigationItems.map((item, index) => {
              if (item.href.startsWith('#')) {
                return (
                  <a key={index} href={item.href}>
                    <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                        {item.label}
                      </div>
                      {item.hasDropdown && (
                        <ChevronDownIcon className="w-[18px] h-[18px] text-[#282828]" />
                      )}
                    </div>
                  </a>
                );
              }
              return (
                <Link key={index} to={item.href}>
                  <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                      {item.label}
                    </div>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-[18px] h-[18px] text-[#282828]" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a href="https://app.easyreserv.io/login" target="_blank" rel="noopener noreferrer">
              <Button className="h-auto px-6 py-4 bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px]">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
                  Sign In
                </span>
              </Button>
            </a>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#28282880] cursor-pointer hover:bg-gray-50 transition-colors">
              <img className="w-4 h-4" alt="Ro" src="/figmaAssets/us.svg" />
              <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[22.4px] whitespace-nowrap">
                RO
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="col-span-6 md:col-span-9 flex lg:hidden items-center justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-auto p-2"
                data-testid="button-mobile-menu"
                aria-label="Deschide meniul de navigare"
              >
                <Menu className="h-6 w-6 text-[#282828]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl">
                  Meniu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {navigationItems.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity py-2">
                        <div className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg">
                          {item.label}
                        </div>
                        {item.hasDropdown && (
                          <ChevronDownIcon className="w-5 h-5 text-[#282828]" />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Sign In Button */}
                <a 
                  href="https://app.easyreserv.io/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full h-auto px-6 py-4 bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px]">
                    <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                      Sign In
                    </span>
                  </Button>
                </a>

                {/* Language Selector */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#28282880] cursor-pointer hover:bg-gray-50 transition-colors w-fit">
                  <img className="w-4 h-4" alt="Ro" src="/figmaAssets/us.svg" />
                  <div className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base">
                    RO
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};
