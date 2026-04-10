import { CheckCircle } from "lucide-react";
import Reveal from "@/components/reveal";

const steps = [
  {
    number: "01",
    tag: "Free Audit — 48h",
    title: "We analyse your business.",
    description:
      "We study your business, your competitors, and your market. You receive a full report worth £299 — completely free.",
  },
  {
    number: "02",
    tag: "We Build — 7 days",
    title: "Built from scratch, for you.",
    description:
      "Website, SaaS tool, or automation — designed and built from scratch for your business. No templates. No shortcuts.",
  },
  {
    number: "03",
    tag: "You Launch & Grow",
    title: "Go live with confidence.",
    description:
      "Your project goes live. We stay available for ongoing support and improvements whenever you need us.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      {/* Label */}
      <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
        THE PROCESS
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-black text-4xl md:text-5xl text-black max-w-2xl leading-tight">
        From idea to live in 7 days.
      </h2>

      {/* Steps */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#f7f7f7] rounded-2xl p-8 border border-[#e8e8e8] flex flex-col gap-4"
            >
              <span className="font-heading font-black text-7xl text-[#00c47a] opacity-30 leading-none">
                {step.number}
              </span>

              <span className="text-[#00c47a] text-xs font-semibold tracking-widest uppercase">
                {step.tag}
              </span>

              <h3 className="text-black font-heading font-bold text-xl">
                {step.title}
              </h3>

              <p className="text-[#6b6b6b] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee line */}
        <p className="mt-10 flex items-center justify-center gap-2 text-[#6b6b6b] text-sm">
          <CheckCircle className="text-[#00c47a] w-4 h-4 shrink-0" />
          Average delivery: 7 days. Guaranteed.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#audit-form"
            className="bg-black text-white font-bold px-10 py-4 rounded-full hover:bg-[#00c47a] hover:text-black transition"
          >
            Claim your free audit →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
