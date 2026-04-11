import { Check } from "lucide-react";
import Reveal from "@/components/reveal";

const tiers = [
  {
    badge: null,
    title: "Business Audit",
    priceStruck: "£299",
    price: "£0",
    priceGreen: true,
    subtitle: "Free with every project — or standalone",
    features: [
      "Full competitor analysis",
      "SEO performance review",
      "Digital strategy report",
      "Market positioning insights",
      "Actionable recommendations",
    ],
    cta: "Get your free audit →",
    ctaStyle: "outline" as const,
    featured: false,
  },
  {
    badge: "Most popular",
    title: "Professional Website",
    priceStruck: null,
    price: "£699",
    priceGreen: false,
    subtitle: "one-time payment · Klarna 3× £233",
    features: [
      "Everything in Audit (free)",
      "Custom design — no templates",
      "Mobile responsive",
      "SEO foundation",
      "Contact form + Google Maps",
      "90 days free maintenance",
      "Full code ownership",
    ],
    cta: "Start your project →",
    ctaStyle: "primary" as const,
    featured: true,
  },
  {
    badge: null,
    title: "SaaS & Business Tools",
    priceStruck: null,
    price: "From £1,499",
    priceGreen: false,
    subtitle: "one-time payment",
    features: [
      "Everything in Audit (free)",
      "Lead tracking & CRM",
      "Booking & scheduling system",
      "Client portal",
      "Admin dashboard",
      "Custom built for your workflow",
    ],
    cta: "Let's discuss your project →",
    ctaStyle: "outline" as const,
    featured: false,
  },
  {
    badge: null,
    title: "Business Automation",
    priceStruck: null,
    price: "£299/mo",
    priceGreen: false,
    subtitle: "monthly retainer",
    features: [
      "Everything in Audit (free)",
      "Email sequences & CRM",
      "AI-powered workflows",
      "Lead nurturing on autopilot",
      "Make.com / n8n setup",
      "Save hours every week",
    ],
    cta: "Automate your business →",
    ctaStyle: "outline" as const,
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          PRICING
        </p>

        {/* Title */}
        <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-black leading-tight">
          One price. No surprises.
        </h2>

        {/* Grid */}
        <Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className={`
                  relative flex flex-col rounded-2xl p-8 border transition-all duration-150
                  ${tier.featured
                    ? "border-[#00c47a] shadow-lg shadow-[#00c47a]/10 bg-white ring-1 ring-[#00c47a]/30"
                    : "border-[#e8e8e8] bg-white shadow-sm hover:border-[#00c47a]/30 hover:shadow-md"
                  }
                `}
              >
                {/* Badge */}
                {tier.badge && (
                  <span className="absolute -top-3 left-8 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                )}

                {/* Featured top bar */}
                {tier.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#00c47a]" />
                )}

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-[#0d0d0d]">
                  {tier.title}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  {tier.priceStruck && (
                    <span className="text-[#6b6b6b] text-xl line-through">
                      {tier.priceStruck}
                    </span>
                  )}
                  <span
                    className={`font-heading font-black text-4xl leading-none ${
                      tier.priceGreen ? "text-[#00c47a]" : "text-[#0d0d0d]"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="mt-2 text-[#6b6b6b] text-sm">{tier.subtitle}</p>

                {/* Divider */}
                <div className="mt-6 border-t border-[#e8e8e8]" />

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="text-[#00c47a] w-4 h-4 mt-0.5 shrink-0" />
                      <span className="text-[#0d0d0d] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#audit-form"
                    className={`
                      block w-full py-3.5 rounded-full text-center font-semibold text-sm transition-colors duration-150
                      ${tier.ctaStyle === "primary"
                        ? "bg-black text-white hover:bg-[#00c47a] hover:text-black"
                        : "border-2 border-black text-black hover:bg-black hover:text-white"
                      }
                    `}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Below grid */}
        <p className="mt-8 text-center text-[#6b6b6b] text-xs">
          50% deposit to start. Balance on delivery. No lock-in.
        </p>
      </div>
    </section>
  );
}
