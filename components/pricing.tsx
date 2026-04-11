import { CheckCircle } from "lucide-react";
import Reveal from "@/components/reveal";

const features = [
  "Free business audit (worth £299)",
  "Custom design — no templates",
  "Mobile responsive",
  "SEO foundation",
  "Contact form + Google Maps",
  "90 days free maintenance",
  "Full code ownership",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6 md:px-12">
      {/* Label */}
      <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
        PRICING
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-black">
        One price. No surprises.
      </h2>

      {/* Card */}
      <Reveal>
        <div className="mt-16 max-w-lg mx-auto bg-[#f7f7f7] rounded-3xl p-10 border-2 border-black">
          {/* Badge */}
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full w-fit inline-block">
            LAUNCH OFFER
          </span>

          {/* Price */}
          <p className="font-heading font-black text-6xl text-black leading-none mt-4">
            £699
          </p>
          <p className="text-[#6b6b6b] text-sm mt-2">one-time payment</p>

          {/* Features */}
          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle className="text-[#00c47a] w-5 h-5 shrink-0" />
                <span className="text-[#0d0d0d] text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Klarna box */}
          <div className="mt-8 bg-white rounded-2xl p-5 border border-[#e8e8e8] flex items-center justify-between gap-4">
            <div>
              <p className="text-pink-500 font-bold italic text-lg">Klarna</p>
              <p className="text-black font-semibold text-sm mt-1">
                Pay in 3× £233 — interest free
              </p>
              <p className="text-[#6b6b6b] text-xs mt-1">No credit check. No fees.</p>
            </div>
            <CheckCircle className="text-[#00c47a] w-6 h-6 shrink-0" />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#audit-form"
              className="w-full bg-black text-white font-bold py-4 rounded-full text-center hover:bg-[#00c47a] hover:text-black transition"
            >
              Claim your free audit →
            </a>
            <a
              href="#audit-form"
              className="w-full border-2 border-black text-black py-4 rounded-full text-center font-semibold hover:bg-black hover:text-white transition"
            >
              Book a free call first
            </a>
          </div>
        </div>
      </Reveal>

      {/* Below card */}
      <p className="mt-4 text-center text-[#6b6b6b] text-xs">
        50% deposit to start. Balance on delivery. No lock-in.
      </p>
    </section>
  );
}
