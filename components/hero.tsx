export default function Hero() {
  return (
    <section
      className="min-h-screen pt-16 bg-bg relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12 py-24">
        {/* Left side */}
        <div className="max-w-xl">
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-white">
            We build websites
            <br />
            that get you
            <br />
            <span className="text-green">more customers.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted max-w-lg">
            Premium web design for UK restaurants and local businesses.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#pricing"
              className="bg-green text-bg font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform text-sm text-center"
            >
              Get your free audit →
            </a>
            <a
              href="https://lushbites2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green text-green px-8 py-4 rounded-full hover:bg-green/10 transition text-sm text-center"
            >
              See a live demo
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 md:gap-16 mt-16">
            {[
              { number: "£699", label: "Launch price" },
              { number: "7 days", label: "Delivery" },
              { number: "90 days", label: "Maintenance" },
              { number: "3×", label: "Pay with Klarna" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-green font-heading font-bold text-2xl">
                  {stat.number}
                </div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — desktop only */}
        <div className="hidden md:flex items-center justify-center w-full max-w-lg h-96 rounded-2xl border border-border-dark">
          <span className="text-muted text-sm">lushbites2.vercel.app</span>
        </div>
      </div>
    </section>
  );
}
