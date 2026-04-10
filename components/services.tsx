import { Globe, Code2, Zap, Check } from "lucide-react";
import Reveal from "@/components/reveal";

const cards = [
  {
    highlighted: true,
    badge: "Most Popular",
    icon: Globe,
    iconClass: "text-green",
    title: "Professional Website",
    price: "From £699",
    priceClass: "text-green",
    description:
      "A fast, beautiful website that works on every device. Built in 7 days.",
    features: [
      "Custom design (not a template)",
      "Mobile responsive",
      "SEO ready",
      "90 days free maintenance",
      "Full code ownership",
    ],
    cta: "Start for £699 →",
    ctaClass:
      "bg-green text-bg font-semibold px-6 py-3 rounded-full w-full text-center hover:brightness-110 transition",
    cardClass: "bg-surface rounded-2xl p-8 border border-green/40 flex flex-col gap-4",
    href: "#pricing",
  },
  {
    highlighted: false,
    badge: null,
    icon: Code2,
    iconClass: "text-blue",
    title: "Web Application",
    price: "From £1,499",
    priceClass: "text-white",
    description:
      "Custom apps, booking systems, client portals. Built to scale.",
    features: [
      "Custom functionality",
      "Database & user accounts",
      "Admin dashboard",
      "API integrations",
    ],
    cta: "Get a quote →",
    ctaClass:
      "border border-white/20 text-white px-6 py-3 rounded-full w-full text-center hover:border-white/50 transition",
    cardClass: "bg-surface rounded-2xl p-8 border border-border-dark flex flex-col gap-4",
    href: "#pricing",
  },
  {
    highlighted: false,
    badge: null,
    icon: Zap,
    iconClass: "text-green",
    title: "Business Automation",
    price: "From £299/mo",
    priceClass: "text-white",
    description:
      "Stop doing repetitive tasks. AI workflows that save hours every week.",
    features: [
      "Email automation",
      "AI-powered workflows",
      "CRM integration",
      "Make.com / n8n setup",
    ],
    cta: "Learn more →",
    ctaClass:
      "border border-white/20 text-white px-6 py-3 rounded-full w-full text-center hover:border-white/50 transition",
    cardClass: "bg-surface rounded-2xl p-8 border border-border-dark flex flex-col gap-4",
    href: "#pricing",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-green uppercase font-body">
        WHAT WE BUILD
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-white max-w-2xl">
        Everything your business needs online.
      </h2>

      {/* Cards grid */}
      <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className={card.cardClass}>
              {card.badge && (
                <span className="bg-green text-bg text-xs font-bold px-3 py-1 rounded-full w-fit">
                  {card.badge}
                </span>
              )}

              <Icon className={`${card.iconClass} w-8 h-8`} />

              <div>
                <h3 className="text-white font-heading font-bold text-2xl">
                  {card.title}
                </h3>
                <p className={`${card.priceClass} font-heading font-black text-4xl mt-2`}>
                  {card.price}
                </p>
              </div>

              <p className="text-muted">{card.description}</p>

              <ul className="space-y-2 mt-4">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="text-green w-4 h-4 shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a href={card.href} className={card.ctaClass}>
                  {card.cta}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      </Reveal>
    </section>
  );
}
