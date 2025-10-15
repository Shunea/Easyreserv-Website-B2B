import React from "react";
import { Link } from "wouter";
import { Container } from "@/components/Container";

const footerLinks = {
  column1: [
    { text: "About Us", href: "/about" },
    { text: "Solutions", href: "/solutions" },
    { text: "Pricing", href: "#pricing" },
    { text: "Contact", href: "#contact" },
    { text: "Terms & Conditions", href: "#terms" },
  ],
  column2: [
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
          <Link href="/">
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
            EasyReserv is a versatile online booking system that enables
            businesses across various industries to manage appointments and
            reservations seamlessly, all for free.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <nav className="flex flex-col gap-4">
              {footerLinks.column1.map((link, index) => (
                link.href.startsWith('#') ? (
                  <a
                    key={index}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link key={index} href={link.href}>
                    <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline cursor-pointer">
                      {link.text}
                    </span>
                  </Link>
                )
              ))}
            </nav>

            <nav className="flex flex-col gap-4">
              {footerLinks.column2.map((link, index) => (
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

            <div className="flex flex-col gap-2">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0]">
                Available on
              </div>

              <img
                className="w-auto h-auto"
                alt="App store badges"
                src="/figmaAssets/frame-30297.svg"
              />
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
