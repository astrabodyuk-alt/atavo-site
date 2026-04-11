'use client'

import * as RadixAccordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/reveal";

const faqs = [
  {
    question: "What's included in the free audit?",
    answer:
      "A full competitor analysis, SEO review, and digital strategy report tailored to your business. Valued at £299, included free with every project.",
  },
  {
    question: "How long does it take to build my site?",
    answer:
      "7 days from brief sign-off. SaaS tools take 2–3 weeks depending on complexity.",
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

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section id="faq" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body text-center">
          FAQ
        </p>

        {/* Title */}
        <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-black leading-tight text-center">
          Got questions?{" "}
          <span className="text-[#00c47a]">We&apos;ve got answers.</span>
        </h2>

        {/* Accordion */}
        <Reveal>
          <RadixAccordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val)}
            className="w-full mt-12 flex flex-col gap-3"
          >
            {faqs.map((faq, i) => {
              const itemValue = `faq-${i}`;
              const isOpen = openItem === itemValue;

              return (
                <RadixAccordion.Item
                  key={itemValue}
                  value={itemValue}
                  className={`
                    rounded-2xl border transition-all duration-200
                    ${isOpen
                      ? "border-[#00c47a]/40 bg-[#f0fdf8]"
                      : "border-[#e8e8e8] bg-white hover:border-[#00c47a]/30"
                    }
                  `}
                >
                  <RadixAccordion.Header className="flex">
                    <RadixAccordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none group">
                      <span className={`
                        font-semibold text-lg leading-snug transition-colors duration-150
                        ${isOpen ? "text-[#00c47a]" : "text-[#0d0d0d] group-hover:text-[#00c47a]"}
                      `}>
                        {faq.question}
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

                  <RadixAccordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="px-6 pb-6 text-[#6b6b6b] text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
              );
            })}
          </RadixAccordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
