'use client'

import * as RadixAccordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/reveal";

const items = [
  {
    value: "deep-dive",
    label: "Business deep-dive",
    body: "We study your goals, your customers, and your vision.",
  },
  {
    value: "competitor",
    label: "Competitor analysis",
    body: "We research every competitor in your market.",
  },
  {
    value: "positioning",
    label: "Strategic positioning",
    body: "We find the gaps where you can dominate online.",
  },
];

export default function USPAudit() {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section id="usp" className="bg-[#f9f9f9] py-20 px-6 md:px-12">
      <Reveal>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left side */}
          <div className="max-w-xl w-full">
            <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
              WHAT MAKES US DIFFERENT
            </p>

            <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-[#0d0d0d] leading-tight">
              Every project starts with
              <br />
              a free £299 audit.
            </h2>

            <RadixAccordion.Root
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="w-full mt-8 flex flex-col gap-2"
            >
              {items.map((item) => {
                const isOpen = openItem === item.value;
                return (
                  <RadixAccordion.Item
                    key={item.value}
                    value={item.value}
                    className={`
                      rounded-xl border transition-colors duration-150
                      ${isOpen
                        ? "border-[#00c47a]/30 bg-white"
                        : "border-[#e8e8e8] bg-white hover:border-[#00c47a]/30"
                      }
                    `}
                  >
                    <RadixAccordion.Header className="flex">
                      <RadixAccordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left focus-visible:outline-none group">
                        <span className={`
                          font-semibold text-base leading-snug transition-colors duration-150
                          ${isOpen ? "text-[#00c47a]" : "text-[#0d0d0d] group-hover:text-[#00c47a]"}
                        `}>
                          {item.label}
                        </span>
                        <span className={`
                          ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-150
                          ${isOpen
                            ? "bg-[#00c47a] text-white"
                            : "bg-[#f7f7f7] text-[#6b6b6b] group-hover:bg-[#00c47a]/10 group-hover:text-[#00c47a]"
                          }
                        `}>
                          {isOpen
                            ? <Minus className="h-3 w-3" />
                            : <Plus className="h-3 w-3" />
                          }
                        </span>
                      </RadixAccordion.Trigger>
                    </RadixAccordion.Header>
                    <RadixAccordion.Content className="overflow-hidden duration-150 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <p className="px-5 pb-4 text-[#6b6b6b] text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </RadixAccordion.Content>
                  </RadixAccordion.Item>
                );
              })}
            </RadixAccordion.Root>
          </div>

          {/* Right side — value card */}
          <div className="bg-white border border-[#e8e8e8] rounded-2xl p-8 max-w-sm w-full shrink-0">
            <span className="bg-[#00c47a] text-black text-xs font-bold px-3 py-1 rounded-full w-fit inline-block">
              FREE with every project
            </span>

            <div className="mt-6 flex flex-col">
              <span className="text-[#6b6b6b] line-through font-heading font-black text-4xl leading-none">
                £299
              </span>
              <span className="text-[#0d0d0d] font-heading font-black text-6xl leading-none mt-1">
                £0
              </span>
              <span className="text-[#6b6b6b] text-sm mt-2">included</span>
            </div>

            <p className="mt-4 text-[#6b6b6b] text-sm">
              Included in every website, SaaS, and automation project.
            </p>

            <a
              href="#audit-form"
              className="mt-6 bg-black text-white font-semibold px-6 py-3 rounded-full w-full text-center hover:bg-gray-800 transition block"
            >
              Claim your free audit →
            </a>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
