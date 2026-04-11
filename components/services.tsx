'use client'

import * as RadixAccordion from "@radix-ui/react-accordion";
import { Globe, LayoutGrid, Zap, Check, Plus, Minus } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/reveal";

const services = [
  {
    value: "websites",
    icon: Globe,
    title: "Professional Websites",
    bullets: [
      "Custom-designed websites that convert visitors into customers",
      "Mobile responsive on every device",
      "SEO foundation built in from day one",
      "90 days free maintenance included",
      "Restaurants, salons, trades, clinics, agencies — any industry",
      "Free business audit included with every project",
    ],
  },
  {
    value: "saas",
    icon: LayoutGrid,
    title: "SaaS & Business Tools",
    bullets: [
      "Lead tracking & client management systems",
      "Booking & scheduling platforms",
      "Admin dashboards tailored to your workflow",
      "Client portals for seamless communication",
      "100% custom built — no off-the-shelf software",
      "Free business audit included with every project",
    ],
  },
  {
    value: "automation",
    icon: Zap,
    title: "Business Automation",
    bullets: [
      "Automated email sequences & CRM integration",
      "AI-powered workflows that save hours every week",
      "Lead nurturing automation on autopilot",
      "Make.com / n8n setup and management",
      "Stop doing repetitive tasks manually — focus on growth",
      "Free business audit included with every project",
    ],
  },
];

export default function Services() {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          SERVICES
        </p>

        {/* Title */}
        <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-black leading-tight">
          Built for your business.
          <br />
          Not copied from a template.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-[#6b6b6b] text-lg">
          Every project starts with a deep understanding of your business. Then
          we build exactly what you need — nothing more, nothing less.
        </p>

        {/* Accordion */}
        <Reveal>
          <RadixAccordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val)}
            className="w-full mt-12 flex flex-col gap-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isOpen = openItem === service.value;

              return (
                <RadixAccordion.Item
                  key={service.value}
                  value={service.value}
                  className={`
                    rounded-2xl border transition-colors duration-150
                    ${isOpen
                      ? "border-[#00c47a]/40 bg-[#f0fdf8]"
                      : "border-[#e8e8e8] bg-white hover:border-[#00c47a]/30"
                    }
                  `}
                >
                  <RadixAccordion.Header className="flex">
                    <RadixAccordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none group">
                      {/* Icon + title */}
                      <span className="flex items-center gap-4">
                        <span className={`
                          flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-150
                          ${isOpen ? "bg-[#00c47a] text-white" : "bg-[#f7f7f7] text-[#00c47a] group-hover:bg-[#00c47a]/10"}
                        `}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className={`
                          font-heading font-bold text-xl leading-snug transition-colors duration-150
                          ${isOpen ? "text-[#00c47a]" : "text-[#0d0d0d] group-hover:text-[#00c47a]"}
                        `}>
                          {service.title}
                        </span>
                      </span>

                      {/* Plus / Minus toggle */}
                      <span className={`
                        ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-150
                        ${isOpen ? "bg-[#00c47a] text-white" : "bg-[#f7f7f7] text-[#6b6b6b] group-hover:bg-[#00c47a]/10 group-hover:text-[#00c47a]"}
                      `}>
                        {isOpen
                          ? <Minus className="h-3.5 w-3.5" />
                          : <Plus className="h-3.5 w-3.5" />
                        }
                      </span>
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>

                  <RadixAccordion.Content className="overflow-hidden duration-150 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <ul className="px-6 pb-6 pt-1 space-y-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="text-emerald-500/60 w-4 h-4 mt-0.5 shrink-0" />
                          <span className="text-[#6b6b6b] text-base leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
              );
            })}
          </RadixAccordion.Root>

          {/* CTA */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors duration-200"
            >
              Start with a free audit →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
