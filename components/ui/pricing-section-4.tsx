"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef } from "react";

const plans = [
  {
    name: "Business Audit",
    description: "Understand your market before you invest a penny.",
    price: "£299",
    subtitle: "one-time",
    buttonText: "Get your audit →",
    buttonVariant: "outline" as const,
    popular: false,
    includes: [
      "What's included:",
      "Full competitor analysis",
      "SEO performance review",
      "Digital strategy report",
      "Market positioning insights",
      "Actionable recommendations",
    ],
  },
  {
    name: "Professional Website",
    description: "A custom site that turns visitors into customers.",
    price: "£699",
    subtitle: "one-time · Klarna 3× £233",
    buttonText: "Start your project →",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Audit, plus:",
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
    description: "Custom software built around how your business works.",
    price: "From £1,499",
    subtitle: "one-time",
    buttonText: "Let's discuss →",
    buttonVariant: "outline" as const,
    popular: false,
    includes: [
      "Everything in Audit, plus:",
      "Lead tracking & CRM",
      "Booking & scheduling",
      "Client portal",
      "Admin dashboard",
      "Custom built for your workflow",
    ],
  },
  {
    name: "Business Automation",
    description: "Put your growth on autopilot with AI-powered workflows.",
    price: "£299/mo",
    subtitle: "monthly retainer",
    buttonText: "Automate your business →",
    buttonVariant: "outline" as const,
    popular: false,
    includes: [
      "Everything in Audit, plus:",
      "Email sequences & CRM",
      "AI-powered workflows",
      "Lead nurturing on autopilot",
      "Make.com / n8n setup",
      "Save hours every week",
    ],
  },
];

export default function PricingSection4() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      id="pricing"
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden"
      ref={pricingRef}
    >
      {/* Sparkle grid background */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={1800}
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      {/* Green glow ellipses */}
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div>
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #00c47a",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
          />
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #00c47a",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
          />
        </div>
      </TimelineContent>

      {/* Section header */}
      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-3 relative z-50 px-6">
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase">
          PRICING
        </p>

        <h2 className="text-4xl font-medium text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            One price. No surprises.
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300"
        >
          Every engagement starts with a free business audit worth £299.
          Pick the service that fits your goals.
        </TimelineContent>
      </article>

      {/* Radial green overlay */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #00c47a 0%, transparent 70%)`,
          opacity: 0.08,
          mixBlendMode: "screen",
        }}
      />

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl gap-4 py-10 mx-auto px-6">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "relative text-white border-neutral-800 h-full flex flex-col",
                  plan.popular
                    ? "bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#00c47a55] z-20"
                    : "bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 z-10"
                )}
              >
                {/* Green top accent for featured */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg bg-[#00c47a]" />
                )}

                <CardHeader className="text-left">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{plan.subtitle}</p>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  <a
                    href="#audit-form"
                    className={cn(
                      "w-full mb-6 py-3.5 px-4 text-sm font-semibold rounded-xl block text-center transition-opacity hover:opacity-90",
                      plan.popular
                        ? "bg-gradient-to-t from-[#009e62] to-[#00c47a] shadow-lg shadow-[#00c47a]/20 border border-[#00c47a] text-black"
                        : "bg-gradient-to-t from-neutral-950 to-neutral-700 shadow-lg shadow-neutral-900/50 border border-neutral-800 text-white"
                    )}
                  >
                    {plan.buttonText}
                  </a>

                  <div className="space-y-3 pt-4 border-t border-neutral-700 flex-1">
                    <h4 className="font-medium text-sm text-gray-400 mb-3">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-2.5">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2.5">
                          <span className="h-2 w-2 bg-[#00c47a] rounded-full shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
