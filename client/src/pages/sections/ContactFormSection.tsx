import { MailIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Country = {
  code: string;
  name: string;
  prefix: string;
  flag: string;
};

const countries: Country[] = [
  { code: "MD", name: "Moldova", prefix: "+373", flag: "🇲🇩" },
  { code: "RO", name: "România", prefix: "+40", flag: "🇷🇴" },
  { code: "IT", name: "Italia", prefix: "+39", flag: "🇮🇹" },
  { code: "ES", name: "Spania", prefix: "+34", flag: "🇪🇸" },
  { code: "FR", name: "Franța", prefix: "+33", flag: "🇫🇷" },
  { code: "DE", name: "Germania", prefix: "+49", flag: "🇩🇪" },
  { code: "UK", name: "Regatul Unit", prefix: "+44", flag: "🇬🇧" },
  { code: "US", name: "SUA", prefix: "+1", flag: "🇺🇸" },
];

type FormField = {
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  hasCountryCode?: boolean;
  options?: string[];
};

const formFields = [
  {
    row: 1,
    fields: [
      { label: "Prenume", placeholder: "ex: Giorgio Marshal", type: "text" },
      { label: "Nume", placeholder: "ex: Giorgio Marshal", type: "text" },
    ],
  },
  {
    row: 2,
    fields: [
      {
        label: "Email",
        placeholder: "yourmail@gmail.com",
        type: "email",
        icon: "mail",
      },
      {
        label: "Telefon",
        placeholder: "+373 XX XXX XXX",
        type: "phone",
        hasCountryCode: true,
      },
    ],
  },
  {
    row: 3,
    fields: [
      {
        label: "Tipul afacerii",
        placeholder: "Restaurant",
        type: "select",
        options: ["Restaurant", "Hotel", "Sală Fitness", "Salon"],
      },
      { label: "Numele companiei", placeholder: "ishunearestaurant", type: "text" },
    ],
  },
  {
    row: 4,
    fields: [
      { label: "Rolul tău", placeholder: "CEO", type: "text" },
      {
        label: "Dimensiunea companiei",
        placeholder: "10 - 50",
        type: "select",
        options: ["1 - 10", "10 - 50", "50 - 100", "100+"],
      },
    ],
  },
];

export const ContactFormSection = (): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  return (
    <section className="flex flex-col w-full max-w-[1138px] mx-auto items-center gap-5 px-0 py-[50px] bg-white rounded-[10px] border border-solid border-zinc-200 shadow-[8px_28px_30px_#00000008]">
      <h2 className="w-full max-w-[974px] [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
        Spune-ne despre afacerea ta
      </h2>

      <p className="w-full max-w-[674px] [font-family:'Onest',Helvetica] font-normal text-textblack text-base text-center tracking-[0] leading-[20.8px]">
        Te rugăm să completezi formularul de mai jos pentru ca noi să înțelegem mai bine nevoile tale.
      </p>

      <div className="inline-flex flex-col items-start justify-center gap-5 w-full max-w-[974px] px-4">
        <div className="flex flex-col w-full items-start gap-5">
          {formFields.map((row) => (
            <div key={row.row} className="flex flex-col md:flex-row items-start gap-5 w-full">
              {row.fields.map((field: FormField, index) => (
                <div
                  key={`${row.row}-${index}`}
                  className="flex flex-col items-start gap-1.5 flex-1 w-full"
                >
                  <Label className="font-text-sm-medium text-[#384250] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-[number:var(--text-sm-medium-font-weight)] tracking-[var(--text-sm-medium-letter-spacing)]">
                    {field.label}
                  </Label>

                  {field.type === "select" ? (
                    <Select defaultValue={field.placeholder}>
                      <SelectTrigger className="w-full h-11 bg-white rounded-lg border border-solid border-[#d2d6db] focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-[#d2d6db]">
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.type === "phone" ? (
                    <div className="flex items-center gap-2 h-11 w-full bg-white rounded-lg border border-solid border-[#d2d6db] focus-within:border-[#d2d6db] focus-within:ring-0 focus-within:outline-none">
                      <Select 
                        value={selectedCountry.code} 
                        onValueChange={(value) => {
                          const country = countries.find(c => c.code === value);
                          if (country) setSelectedCountry(country);
                        }}
                      >
                        <SelectTrigger className="w-auto h-full border-0 gap-1 px-3 focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0">
                          <span className="text-2xl leading-none">
                            {selectedCountry.flag}
                          </span>
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <div className="flex items-center gap-2">
                                <span className="text-xl">{country.flag}</span>
                                <span>{country.name} ({country.prefix})</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span className="font-text-md-regular text-black">
                        {selectedCountry.prefix}
                      </span>
                      <Input
                        type="tel"
                        placeholder="XX XXX XXX"
                        className="flex-1 h-full border-0 shadow-none pr-3 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-black text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-3 h-11 w-full bg-white rounded-lg border border-solid border-[#d2d6db] focus-within:border-[#d2d6db] focus-within:ring-0 focus-within:outline-none">
                      <Input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="flex-1 h-full border-0 shadow-none p-0 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-black text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                      />
                      {field.icon === "mail" && (
                        <MailIcon className="w-5 h-5" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <Label className="font-text-sm-medium text-[#384250] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-[number:var(--text-sm-medium-font-weight)] tracking-[var(--text-sm-medium-letter-spacing)]">
            Mesaj
          </Label>
          <Textarea
            placeholder="Scrie-ți mesajul Dumneavoastră aici"
            className="w-full min-h-[120px] bg-white rounded-lg border border-solid border-[#d2d6db] px-3 py-2.5 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-black text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-[#d2d6db] resize-none"
          />
        </div>

        <div className="w-full max-w-[880px] [font-family:'Inter',Helvetica] font-normal text-transparent text-sm leading-[14px]">
          <span className="text-[#282828] tracking-[0] leading-[20.5px]">
            Prin trimiterea acestor informații, ești de acord cu următorii termeni:
            <br />
            {" "}
          </span>

          <span className="text-[#282828] tracking-[-0.04px] leading-[20.5px] underline">
            Politica de Confidențialitate
          </span>

          <span className="text-[#282828] tracking-[0] leading-[20.5px]">
            {" "}
            EasyReserv va reglementa utilizarea serviciilor pe care le primești și datele personale pe care le furnizezi.
            <br />
            De asemenea, consimți să primești comunicări de marketing de la EasyReserv despre noutăți, evenimente, promoții și buletine informative lunare.
            <br />
            Te poți dezabona oricând de la email-urile EasyReserv.
          </span>
        </div>
      </div>

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4" data-testid="button-send-contact">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          Trimite
        </span>
      </Button>
    </section>
  );
};
