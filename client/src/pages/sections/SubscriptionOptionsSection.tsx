import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export const SubscriptionOptionsSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col w-full items-center gap-5 px-4 py-[50px] relative">
      <h2 className="relative max-w-[974px] w-full [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
        {t('pricing_page.subscription_options.title')}
      </h2>

      <p className="relative max-w-[674px] w-full [font-family:'Onest',Helvetica] font-normal text-textblack text-base text-center tracking-[0] leading-[20.8px]">
        {t('pricing_page.subscription_options.description')}
      </p>

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4" data-testid="button-contact-us">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          {t('pricing_page.subscription_options.cta')}
        </span>
      </Button>
    </section>
  );
};
