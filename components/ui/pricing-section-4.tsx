"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Business Audit",
    subtitle: "one-time",
    price: "£299",
    buttonText: "Get your audit →",
    buttonVariant: "outline" as const,
    popular: false,
    badge: null,
    includes: [
      "Full competitor analysis",
      "SEO performance review",
      "Digital strategy report",
      "Market positioning insights",
      "Actionable recommendations",
    ],
  },
  {
    name: "Professional Website",
    subtitle: "one-time · Klarna 3× £233",
    price: "£699",
    buttonText: "Start your project →",
    buttonVariant: "default" as const,
    popular: true,
    badge: "Most popular",
    includes: [
      "Free business audit included",
      "Custom design — no templates",
      "Mobile responsive",
      "SEO foundation",
      "Contact form + Google Maps",
      "90 days free maintenance",
      "Full code ownership",
    ],
  },
  {
    name: "SaaS & Business Tools",
    subtitle: "one-time",
    price: "From £1,499",
    buttonText: "Let's discuss →",
    buttonVariant: "outline" as const,
    popular: false,
    badge: null,
    includes: [
      "Free business audit included",
      "Lead tracking & CRM",
      "Booking & scheduling",
      "Client portal",
      "Admin dashboard",
      "Custom built for your workflow",
    ],
  },
  {
    name: "Business Automation",
    subtitle: "monthly retainer",
    price: "£299/mo",
    buttonText: "Automate your business →",
    buttonVariant: "outline" as const,
    popular: false,
    badge: null,
    includes: [
      "Free business audit included",
      "Email sequences & CRM",
      "AI-powered workflows",
      "Lead nurturing on autopilot",
      "Make.com / n8n setup",
      "Save hours every week",
    ],
  },
];

export default function PricingSection4() {
  return (
    <div className="grid md:grid-cols-2 gap-5 w-full">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "relative flex flex-col border transition-all duration-150 bg-white rounded-2xl",
            plan.popular
              ? "border-[#00c47a] shadow-lg shadow-[#00c47a]/10 ring-1 ring-[#00c47a]/30"
              : "border-[#e8e8e8] shadow-sm hover:border-[#00c47a]/30 hover:shadow-md"
          )}
        >
          {/* Green top bar for featured */}
          {plan.popular && (
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#00c47a]" />
          )}

          {/* Badge */}
          {plan.badge && (
            <span className="absolute -top-3 left-6 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
              {plan.badge}
            </span>
          )}

          <CardHeader className="pb-2 px-8 pt-8">
            <h3 className="font-heading font-bold text-xl text-[#0d0d0d]">
              {plan.name}
            </h3>
            <div className="mt-3">
              <span className="font-heading font-black text-4xl text-[#0d0d0d] leading-none">
                {plan.price}
              </span>
            </div>
            <p className="text-[#6b6b6b] text-sm mt-1">{plan.subtitle}</p>
          </CardHeader>

          <CardContent className="flex flex-col flex-1 px-8 pb-8 pt-2">
            {/* Divider */}
            <div className="border-t border-[#e8e8e8] mb-5" />

            {/* Features */}
            <ul className="space-y-3 flex-1">
              {plan.includes.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="text-[#00c47a] w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-[#0d0d0d] text-sm leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#audit-form"
              className={cn(
                "mt-8 block w-full py-3.5 rounded-full text-center font-semibold text-sm transition-colors duration-150",
                plan.buttonVariant === "default"
                  ? "bg-black text-white hover:bg-[#00c47a] hover:text-black"
                  : "border-2 border-black text-black hover:bg-black hover:text-white"
              )}
            >
              {plan.buttonText}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
