import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const policyItems = [
  { label: "Privacy Policy", anchor: "#privacy-policy" },
  { label: "Cookies Policy", anchor: "#cookies-policy" },
  { label: "Terms and Conditions", anchor: "#terms-and-conditions" },
];

const policies = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    intro: "At EasyReserv, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.",
    articles: [
      {
        number: "Art. 1 - Information We Collect",
        content: `We collect information that you provide directly to us, including:\n\n• Personal identification information (name, email address, phone number)\n• Business information (company name, business type, role)\n• Usage data and analytics\n• Communication preferences\n\nThis information is collected when you register for our services, fill out forms, or interact with our platform.`,
      },
      {
        number: "Art. 2 - How We Use Your Information",
        content: `We use the collected information to:\n\n• Provide and improve our reservation management services\n• Communicate with you about updates, offers, and support\n• Analyze usage patterns to enhance user experience\n• Ensure security and prevent fraud\n• Comply with legal obligations\n\nYour data is processed in accordance with GDPR and other applicable data protection regulations.`,
      },
    ],
  },
  {
    id: "cookies-policy",
    title: "Cookies Policy",
    intro: "This Cookies Policy explains how EasyReserv uses cookies and similar technologies to recognize you when you visit our platform.",
    articles: [
      {
        number: "Art. 1 - What Are Cookies",
        content: `Cookies are small text files that are stored on your device when you visit our website. They help us:\n\n• Remember your preferences and settings\n• Understand how you use our platform\n• Improve your user experience\n• Provide personalized content\n\nWe use both session cookies (temporary) and persistent cookies (stored for longer periods).`,
      },
      {
        number: "Art. 2 - Managing Cookies",
        content: `You have the right to accept or reject cookies. You can:\n\n• Configure your browser settings to block or delete cookies\n• Use our cookie consent tool to manage preferences\n• Opt-out of third-party advertising cookies\n\nPlease note that blocking certain cookies may affect your experience on our platform.`,
      },
    ],
  },
  {
    id: "terms-and-conditions",
    title: "Terms and Conditions",
    intro: "These Terms and Conditions govern your use of EasyReserv's reservation management platform. By accessing or using our services, you agree to be bound by these terms.",
    articles: [
      {
        number: "Art. 1 - Service Agreement",
        content: `By using EasyReserv, you agree to:\n\n• Provide accurate and complete information\n• Use the service in compliance with applicable laws\n• Maintain the confidentiality of your account credentials\n• Not misuse or abuse the platform\n• Accept our pricing and subscription terms\n\nWe reserve the right to modify these terms at any time, with notice provided to users.`,
      },
      {
        number: "Art. 2 - Limitations and Liability",
        content: `EasyReserv provides the service "as is" and makes no warranties regarding:\n\n• Uninterrupted or error-free operation\n• Specific results or outcomes\n• Third-party integrations\n\nOur liability is limited to the amount paid for the service. We are not responsible for indirect, incidental, or consequential damages arising from the use of our platform.`,
      },
    ],
  },
];

export const PoliciesSection = (): JSX.Element => {
  const [activePolicy, setActivePolicy] = React.useState("#privacy-policy");

  React.useEffect(() => {
    const hash = window.location.hash || "#privacy-policy";
    setActivePolicy(hash);
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#privacy-policy";
      setActivePolicy(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePolicyClick = (anchor: string) => {
    window.location.hash = anchor;
  };

  const currentPolicy = policies.find((p) => `#${p.id}` === activePolicy) || policies[0];

  return (
    <section className="flex flex-col lg:flex-row items-start gap-[35px] px-4 md:px-[10%] py-[100px]">
      <Card className="w-full lg:w-[403px] bg-white rounded-[30px] shadow-[0px_2px_15px_#63636333] lg:sticky lg:top-24">
        <CardContent className="p-[29px]">
          <div className="flex flex-col gap-[54px]">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-[40px] tracking-[0] leading-[44px]">
              Policies
            </h2>

            <nav className="flex flex-col gap-2">
              {policyItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => handlePolicyClick(item.anchor)}
                  className={`h-auto w-full justify-center p-2.5 rounded-[15px] transition-colors ${
                    activePolicy === item.anchor
                      ? "bg-[linear-gradient(40deg,rgba(254,152,0,0.1)_0%,rgba(254,187,1,0.1)_100%)]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-base tracking-[0] leading-[22px] px-0 py-[5px]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </nav>
          </div>
        </CardContent>
      </Card>

      <main className="flex flex-col w-full lg:w-[842px]">
        <h1 className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-[56px] text-center tracking-[0] leading-[67.2px] mb-8">
          {currentPolicy.title}
        </h1>

        <div className="flex flex-col gap-8">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#909090] text-lg tracking-[0] leading-[27px]">
            {currentPolicy.intro}
          </p>

          {currentPolicy.articles.map((article, index) => (
            <div key={index} className="pt-6">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-brandcharcoal text-4xl tracking-[0] leading-[46.8px] mb-4">
                {article.number}
              </h3>

              <p className="[font-family:'Inter',Helvetica] font-normal text-brandcharcoal text-lg tracking-[0] leading-[31.5px] whitespace-pre-line">
                {article.content}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};
