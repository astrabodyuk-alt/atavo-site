'use client'

import * as RadixAccordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What's included in the free audit?",
    answer:
      "A full competitor analysis, SEO review, and digital strategy report tailored to your business. Valued at £299, included free with every project.",
  },
  {
    question: "How long does it take to build my site?",
    answer:
      "10 days from brief sign-off. SaaS tools take 2–3 weeks depending on complexity.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "Just your logo (if you have one), brand colours, and a few details about your business. We handle the rest.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. We offer 3× monthly payments via Klarna — so you can start for £233 today.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing support and maintenance. Ask us about our monthly retainer packages.",
  },
  {
    question: "Do you work with any industry?",
    answer:
      "Yes. Restaurants, clinics, agencies, personal trainers, barbershops, e-commerce — we build custom solutions for any business in the UK.",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

interface CustomAccordionProps {
  children: React.ReactNode;
  value: string[];
  onValueChange: (value: string[]) => void;
}

function CustomAccordion({ children, value, onValueChange }: CustomAccordionProps) {
  return (
    <RadixAccordion.Root
      type="multiple"
      value={value}
      onValueChange={onValueChange}
      className="w-full"
    >
      {children}
    </RadixAccordion.Root>
  );
}

interface CustomAccordionItemProps {
  children: React.ReactNode;
  value: string;
  isOpen: boolean;
}

function CustomAccordionItem({ children, value, isOpen }: CustomAccordionItemProps) {
  return (
    <RadixAccordion.Item
      value={value}
      className={`
        mb-3 rounded-2xl border transition-all duration-200
        ${isOpen
          ? "border-[#00c47a]/40 bg-[#f0fdf8]"
          : "border-[#e8e8e8] bg-white hover:border-[#00c47a]/30"
        }
      `}
    >
      {children}
    </RadixAccordion.Item>
  );
}

interface CustomAccordionTriggerProps {
  children: React.ReactNode;
  isOpen: boolean;
}

function CustomAccordionTrigger({ children, isOpen }: CustomAccordionTriggerProps) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none group">
        <span className={`font-semibold text-lg leading-snug transition-colors duration-150 ${isOpen ? "text-[#00c47a]" : "text-[#0d0d0d] group-hover:text-[#00c47a]"}`}>
          {children}
        </span>
        <span className={`
          ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200
          ${isOpen ? "bg-[#00c47a] text-white" : "bg-[#f7f7f7] text-[#6b6b6b] group-hover:bg-[#00c47a]/10 group-hover:text-[#00c47a]"}
        `}>
          {isOpen
            ? <Minus className="h-3.5 w-3.5" />
            : <Plus className="h-3.5 w-3.5" />
          }
        </span>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}

interface CustomAccordionContentProps {
  children: React.ReactNode;
}

function CustomAccordionContent({ children }: CustomAccordionContentProps) {
  return (
    <RadixAccordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
      <p className="px-6 pb-6 text-[#6b6b6b] text-base leading-relaxed">
        {children}
      </p>
    </RadixAccordion.Content>
  );
}

// ── Main exported component ───────────────────────────────────────────────────

export function AccordionComponent() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <div className="w-full max-w-2xl mx-auto px-6 md:px-0">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body mb-4">
          FAQ
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-black leading-tight">
          Got questions?{" "}
          <span className="text-[#00c47a]">We&apos;ve got answers.</span>
        </h2>
      </div>

      {/* Accordion */}
      <CustomAccordion value={openItems} onValueChange={setOpenItems}>
        {faqs.map((faq, i) => {
          const itemValue = `item-${i}`;
          const isOpen = openItems.includes(itemValue);
          return (
            <CustomAccordionItem key={itemValue} value={itemValue} isOpen={isOpen}>
              <CustomAccordionTrigger isOpen={isOpen}>
                {faq.question}
              </CustomAccordionTrigger>
              <CustomAccordionContent>
                {faq.answer}
              </CustomAccordionContent>
            </CustomAccordionItem>
          );
        })}
      </CustomAccordion>
    </div>
  );
}
