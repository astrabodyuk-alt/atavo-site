"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Business Audit",
    description: "Understand your market before you invest a penny.",
    price: "£299",
    subtitle: "one-time",
    buttonText: "Book an audit →",
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
      "Custom design. No templates.",
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Center on featured card (index 1) on mount — mobile only
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      const featured = container.querySelector<HTMLElement>('[data-featured="true"]');
      if (featured) {
        featured.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" });
      }
    });
  }, []);

  // Track scroll position to toggle arrow opacity
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const update = () => {
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    };

    container.addEventListener("scroll", update, { passive: true });
    update();
    return () => container.removeEventListener("scroll", update);
  }, []);

  const scrollCard = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = window.innerWidth * 0.85 + 16; // 85vw + gap-4 (16px)
    container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

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
      className="min-h-screen mx-auto relative bg-[#f7f7f7] overflow-x-hidden"
      ref={pricingRef}
    >
      {/* Sparkle grid background */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={800}
          speed={1}
          color="#0d0d0d"
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
              opacity: 0.04,
            }}
          />
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid #00c47a",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
              opacity: 0.04,
            }}
          />
        </div>
      </TimelineContent>

      {/* Section header */}
      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-3 relative z-50 px-6">
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase">
          PRICING
        </p>

        <h2 className="text-4xl font-medium text-[#0d0d0d]">
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
          className="text-[#6b6b6b]"
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
          opacity: 0.03,
          mixBlendMode: "multiply",
        }}
      />

      {/* Carousel wrapper — relative for arrow positioning */}
      <div className="relative">
        {/* Left arrow — mobile only */}
        <button
          onClick={() => scrollCard("left")}
          aria-label="Previous card"
          className={cn(
            "md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-20",
            "w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm",
            "flex items-center justify-center transition-opacity duration-200",
            canScrollLeft ? "opacity-100" : "opacity-30 pointer-events-none"
          )}
        >
          <ChevronLeft className="h-4 w-4 text-[#0d0d0d]" />
        </button>

        {/* Right arrow — mobile only */}
        <button
          onClick={() => scrollCard("right")}
          aria-label="Next card"
          className={cn(
            "md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-20",
            "w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm",
            "flex items-center justify-center transition-opacity duration-200",
            canScrollRight ? "opacity-100" : "opacity-30 pointer-events-none"
          )}
        >
          <ChevronRight className="h-4 w-4 text-[#0d0d0d]" />
        </button>

        {/* Pricing cards */}
        <div
          ref={scrollContainerRef}
          className="
            flex snap-x snap-mandatory overflow-x-auto gap-4 py-10 px-6
            md:grid md:grid-cols-2 md:overflow-x-visible
            xl:grid-cols-4
            max-w-7xl mx-auto
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
              className="snap-center min-w-[85vw] md:min-w-0 h-full flex-shrink-0 md:flex-shrink"
            >
              <motion.div
                data-featured={plan.popular ? "true" : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="h-full"
              >
                {plan.popular ? (
                  <ShineBorder
                    borderWidth={2}
                    duration={4}
                    gradient="from-[#00c47a] via-emerald-100 to-[#00c47a]"
                    className="h-full"
                  >
                    <Card className="relative text-[#0d0d0d] h-full flex flex-col border-0 shadow-none bg-transparent">
                      <CardHeader className="text-left">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-[#0d0d0d]">{plan.price}</span>
                        </div>
                        <p className="text-xs text-[#6b6b6b] mt-0.5">{plan.subtitle}</p>
                        <p className="text-sm text-[#6b6b6b] mt-2 leading-relaxed">
                          {plan.description}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0 flex flex-col flex-1">
                        <a
                          href="#audit-form"
                          className="w-full mb-6 py-3.5 px-4 text-sm font-semibold rounded-xl block text-center transition-colors bg-black text-white hover:bg-gray-800"
                        >
                          {plan.buttonText}
                        </a>

                        <div className="space-y-3 pt-4 border-t border-[#e8e8e8] flex-1">
                          <h4 className="font-medium text-sm text-[#6b6b6b] mb-3">
                            {plan.includes[0]}
                          </h4>
                          <ul className="space-y-2.5">
                            {plan.includes.slice(1).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2.5">
                                <span className="h-2 w-2 bg-emerald-500/60 rounded-full shrink-0" />
                                <span className="text-sm text-[#6b6b6b]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </ShineBorder>
                ) : (
                  <Card className="relative text-[#0d0d0d] border-[#e8e8e8] bg-white h-full flex flex-col z-10">
                    <CardHeader className="text-left">
                      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-[#0d0d0d]">{plan.price}</span>
                      </div>
                      <p className="text-xs text-[#6b6b6b] mt-0.5">{plan.subtitle}</p>
                      <p className="text-sm text-[#6b6b6b] mt-2 leading-relaxed">
                        {plan.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0 flex flex-col flex-1">
                      <a
                        href="#audit-form"
                        className="w-full mb-6 py-3.5 px-4 text-sm font-semibold rounded-xl block text-center transition-colors bg-[#f7f7f7] border border-[#e8e8e8] text-[#0d0d0d] hover:bg-[#f0f0f0]"
                      >
                        {plan.buttonText}
                      </a>

                      <div className="space-y-3 pt-4 border-t border-[#e8e8e8] flex-1">
                        <h4 className="font-medium text-sm text-[#6b6b6b] mb-3">
                          {plan.includes[0]}
                        </h4>
                        <ul className="space-y-2.5">
                          {plan.includes.slice(1).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2.5">
                              <span className="h-2 w-2 bg-emerald-500/60 rounded-full shrink-0" />
                              <span className="text-sm text-[#6b6b6b]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TimelineContent>
          ))}
        </div>
      </div>
    </div>
  );
}
