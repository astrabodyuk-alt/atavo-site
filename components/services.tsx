import { Globe, LayoutDashboard, Zap, Check } from "lucide-react";
import Reveal from "@/components/reveal";

const cards = [
  {
    featured: true,
    badge: "Most popular",
    icon: Globe,
    title: "Professional Website",
    price: "From £699",
    description:
      "A fast, beautiful website that works on every device. Restaurants, salons, trades, clinics — any industry.",
    features: [
      "Custom design — no templates",
      "Mobile responsive",
      "SEO foundation",
      "90 days free maintenance",
      "Full code ownership",
      "Free business audit included",
    ],
    cta: "Start for £699 →",
    ctaClass:
      "bg-black text-white px-6 py-3 rounded-full w-full text-center font-semibold hover:bg-[#00c47a] hover:text-black transition mt-auto block",
    cardClass:
      "bg-[#f7f7f7] rounded-2xl p-8 border-2 border-black flex flex-col gap-4",
  },
  {
    featured: false,
    badge: null,
    icon: LayoutDashboard,
    title: "SaaS & Business Tools",
    price: "From £1,499",
    description:
      "Lead tracking, booking systems, client portals, custom dashboards. Built around your exact workflow.",
    features: [
      "100% custom built",
      "Lead & client management",
      "Booking & scheduling",
      "Admin dashboard",
      "Free business audit included",
    ],
    cta: "Get a quote →",
    ctaClass:
      "border-2 border-black text-black px-6 py-3 rounded-full w-full text-center font-semibold hover:bg-black hover:text-white transition mt-auto block",
    cardClass:
      "bg-[#f7f7f7] rounded-2xl p-8 border border-[#e8e8e8] flex flex-col gap-4",
  },
  {
    featured: false,
    badge: null,
    icon: Zap,
    title: "Business Automation",
    price: "From £299/mo",
    description:
      "Stop doing repetitive tasks manually. AI-powered workflows that save hours every week so you can focus on growth.",
    features: [
      "Email sequences & CRM",
      "AI-powered workflows",
      "Lead nurturing automation",
      "Make.com / n8n setup",
      "Free business audit included",
    ],
    cta: "Learn more →",
    ctaClass:
      "border-2 border-black text-black px-6 py-3 rounded-full w-full text-center font-semibold hover:bg-black hover:text-white transition mt-auto block",
    cardClass:
      "bg-[#f7f7f7] rounded-2xl p-8 border border-[#e8e8e8] flex flex-col gap-4",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12">
      {/* Label */}
      <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
        SERVICES
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-black text-4xl md:text-5xl text-black leading-tight">
        Built for your business.
        <br />
        Not copied from a template.
      </h2>

      {/* Subtitle */}
      <p className="mt-4 max-w-xl text-[#6b6b6b] text-lg">
        Every project starts with a deep understanding of your business. Then
        we build exactly what you need — nothing more, nothing less.
      </p>

      {/* Cards */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className={card.cardClass}>
                {card.badge && (
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                    {card.badge}
                  </span>
                )}

                <Icon className="text-[#00c47a] w-8 h-8" />

                <div>
                  <h3 className="text-black font-heading font-bold text-2xl">
                    {card.title}
                  </h3>
                  <p className="text-black font-heading font-black text-4xl mt-2">
                    {card.price}
                  </p>
                </div>

                <p className="text-[#6b6b6b] text-sm">{card.description}</p>

                <ul className="space-y-2 mt-4">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="text-[#00c47a] w-4 h-4 shrink-0" />
                      <span className="text-[#0d0d0d] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a href="#audit-form" className={card.ctaClass}>
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
