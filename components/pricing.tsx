import Reveal from "@/components/reveal";
import PricingSection4 from "@/components/ui/pricing-section-4";

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

        {/* Cards */}
        <Reveal>
          <div className="mt-14">
            <PricingSection4 />
          </div>
        </Reveal>

        {/* Footnote */}
        <p className="mt-8 text-center text-[#6b6b6b] text-xs">
          50% deposit to start. Balance on delivery. No lock-in.
        </p>
      </div>
    </section>
  );
}
