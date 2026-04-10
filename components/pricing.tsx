import { CheckCircle } from "lucide-react";

const features = [
  "Custom design (not a template)",
  "Mobile responsive",
  "SEO foundation (Google-ready)",
  "Contact form + Google Maps",
  "Social media links",
  "90 days free maintenance",
  "Full code ownership",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-green uppercase font-body">
        PRICING
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-white">
        One price. No surprises.
      </h2>

      {/* Pricing card */}
      <div
        className="mt-16 max-w-lg mx-auto bg-surface rounded-3xl p-10 border border-green/30"
        style={{ boxShadow: "0 0 60px rgba(0,245,160,0.06)" }}
      >
        {/* Top */}
        <span className="bg-green/10 text-green text-xs font-bold px-3 py-1 rounded-full w-fit inline-block">
          LAUNCH OFFER
        </span>

        <p className="font-heading font-black text-8xl text-white leading-none mt-4">
          £699
        </p>
        <p className="text-muted text-sm mt-2">one-time payment</p>

        {/* Features */}
        <ul className="mt-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle className="text-green w-5 h-5 shrink-0" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Klarna box */}
        <div className="mt-8 bg-bg rounded-2xl p-5 border border-border-dark flex items-center justify-between gap-4">
          <div>
            <p className="text-pink-400 font-bold italic text-lg">Klarna</p>
            <p className="text-white text-sm font-semibold mt-1">
              Pay in 3× £233 — interest free
            </p>
            <p className="text-muted text-xs mt-1">No credit check. No fees.</p>
          </div>
          <CheckCircle className="text-green w-6 h-6 shrink-0" />
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="https://buy.stripe.com/XXXX"
            className="w-full bg-green text-bg font-bold py-4 rounded-full text-center hover:brightness-110 transition cursor-pointer"
          >
            Start your project →
          </a>
          <a
            href="#contact"
            className="w-full border border-white/20 text-white py-4 rounded-full text-center hover:border-white/40 transition cursor-pointer"
          >
            Book a free call first
          </a>
        </div>
      </div>

      {/* Below card */}
      <p className="mt-4 text-center text-muted text-xs">
        50% deposit to start. Balance on delivery.
      </p>
    </section>
  );
}
