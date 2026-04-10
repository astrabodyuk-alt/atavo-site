export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-white flex flex-col items-center justify-center text-center px-6 md:px-12 py-24">
      {/* Headline */}
      <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-black leading-none tracking-tight max-w-5xl">
        We build websites that get you{" "}
        <span className="text-[#00c47a]">more customers.</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-[#6b6b6b] text-lg md:text-xl text-center max-w-xl mx-auto">
        Premium web design for UK restaurants and local businesses.
        <br />
        From £699. Live in 7 days.
      </p>

      {/* CTA */}
      <a
        href="#pricing"
        className="mt-10 bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#00c47a] hover:text-black transition"
      >
        Get your free audit 👋
      </a>

      {/* Scroll arrow */}
      <div className="mt-16 flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full border border-[#e8e8e8] flex items-center justify-center text-[#6b6b6b] text-lg animate-bounce">
          ↓
        </div>
      </div>

      {/* Stats strip */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-16">
        {[
          { number: "£699", label: "Launch price" },
          { number: "7 days", label: "Delivery" },
          { number: "90 days", label: "Maintenance" },
          { number: "3×", label: "Pay with Klarna" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-black font-heading font-bold text-2xl">
              {stat.number}
            </div>
            <div className="text-[#6b6b6b] text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
