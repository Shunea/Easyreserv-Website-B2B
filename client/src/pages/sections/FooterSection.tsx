import React from "react";
import { Link } from "wouter";
import { Container } from "@/components/Container";

const footerLinks = {
  column1: [
    { text: "About Us", href: "/about" },
    { text: "Solutions", href: "/solutions" },
    { text: "Pricing", href: "/pricing" },
    { text: "Contact", href: "/contact" },
  ],
  column2: [
    { text: "Privacy Policy", href: "/policies#privacy-policy" },
    { text: "Cookies Policy", href: "/policies#cookies-policy" },
    { text: "Terms & Conditions", href: "/policies#terms-and-conditions" },
  ],
  column3: [
    { text: "LinkedIn", href: "https://linkedin.com" },
    { text: "Facebook", href: "https://facebook.com" },
    { text: "Instagram", href: "https://instagram.com" },
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full py-16 bg-[#191a24]">
      <Container>
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
          <Link to="/">
            <div className="inline-flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <img
                className="w-14 h-14"
                alt="Logo"
                src="/figmaAssets/logo.svg"
              />

              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[33.6px]">
                EasyReserv.io
              </div>
            </div>
          </Link>

          <p className="opacity-75 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal max-w-md">
            EasyReserv este o platformă All-in-One pentru rezervări, POS fiscal, operațiuni și rapoarte — optimizată pentru restaurante, cafenele, beauty, hoteluri & pensiuni, chirii auto, fitness, medical și retail. Conectează echipa și datele într-un singur loc, cu integrări 1C și plăți.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <nav className="flex flex-col gap-4">
              {footerLinks.column1.map((link, index) => (
                <Link key={index} to={link.href}>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline cursor-pointer">
                    {link.text}
                  </span>
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-4">
              {footerLinks.column2.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col gap-4">
              {footerLinks.column3.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0]">
                Disponibil pe
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://bit.ly/4c6yKJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity h-10"
                >
                  <img
                    className="h-full w-auto"
                    alt="Download on the App Store"
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1722556800"
                  />
                </a>
                <a
                  href="https://bit.ly/49Ce2Q1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity h-10"
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
        </div>

        <div className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-[#ffffff20]">
          <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base text-center tracking-[-0.32px] leading-7">
            © EasyReserv.io 2023. All rights reserved.
          </div>

          <div className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-base text-center">
            <span className="tracking-[-0.05px] leading-7">
              Developed by
            </span>
            <span className="font-medium tracking-[0]">
              &nbsp;
            </span>
            <span className="font-bold tracking-[-0.05px] leading-7 underline">
              iShunea Tech Solutions
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
