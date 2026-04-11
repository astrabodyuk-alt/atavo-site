import Reveal from "@/components/reveal";

export default function DemoStrip() {
  return (
    <section id="demo" className="bg-[#f7f7f7] py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-[#00c47a] uppercase font-body">
        THE DETAIL THAT MAKES ALL THE DIFFERENCE
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-black max-w-2xl leading-tight">
        We create the wow effect your competitors don&apos;t have.
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-[#6b6b6b] text-lg max-w-xl">
        This animation was built for a fast food brand. We do the same for any business. Restaurant, clinic, agency, shop.
      </p>

      {/* Video showcase */}
      <Reveal>
        <div className="relative mt-16 rounded-2xl overflow-hidden bg-black">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full tracking-widest uppercase">
              Animation example
            </span>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-[400px] md:h-[600px] object-cover"
          >
            <source src="/videos/burger-animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <p className="text-white font-heading font-bold text-2xl md:text-3xl">
              This is what we can build for you.
            </p>
            <p className="text-white/60 text-sm mt-2">
              Premium animations, custom design, built around your brand.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
