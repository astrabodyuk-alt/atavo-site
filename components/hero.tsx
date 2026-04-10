'use client'
import { ChevronDown } from "lucide-react";
import LiquidMetalButton from "@/components/ui/liquid-metal-button";

export default function Hero() {
  const scrollToNext = () => {
    const next = document.getElementById("usp");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white text-center flex flex-col items-center justify-center min-h-screen pt-16 px-6">
      {/* Headline */}
      <h1 className="font-heading font-black text-6xl md:text-8xl text-black leading-none tracking-tight">
        Your competitors
        <br />
        are online.
        <br />
        <span className="text-[#00c47a]">Are you?</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 max-w-lg mx-auto text-center text-[#6b6b6b] text-lg md:text-xl">
        We build websites and business tools that get you more customers.
        <br />
        Custom-built. Any industry. From £699.
      </p>

      {/* CTA */}
      <div className="mt-10">
        <LiquidMetalButton
          label="Let's build yours →"
          onClick={() => {
            document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      {/* Scroll arrow */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="mt-16 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mx-auto hover:bg-black hover:text-white transition cursor-pointer group"
      >
        <ChevronDown className="text-black group-hover:text-white w-5 h-5 transition-colors" />
      </button>

      {/* Stats strip */}
      <div className="mt-20 flex flex-wrap justify-center gap-12">
        {[
          { number: "£699", label: "Websites from" },
          { number: "7 days", label: "Average delivery" },
          { number: "All industries", label: "Restaurants to SaaS" },
          { number: "3×", label: "Pay with Klarna" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-heading font-black text-3xl text-black">
              {stat.number}
            </span>
            <span className="text-[#6b6b6b] text-sm mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="w-16 bg-[#e8e8e8] h-px mx-auto mt-20" />
    </section>
  );
}
