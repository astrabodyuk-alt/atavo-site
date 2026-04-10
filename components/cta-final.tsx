import Reveal from "@/components/reveal";

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-black py-32 px-6 md:px-12 text-center">
      <Reveal>
        {/* Title */}
        <h2 className="font-heading font-black text-5xl md:text-7xl text-white leading-none">
          Ready to grow
          <br />
          your business{" "}
          <span className="text-[#00c47a]">online?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-white/60 text-xl">
          Free business audit. Custom build. Live in 7 days.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href="#audit-form"
            className="bg-[#00c47a] text-black font-bold px-10 py-5 rounded-full text-lg hover:brightness-110 transition"
          >
            Claim your free audit →
          </a>
          <a
            href="#pricing"
            className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            See our services
          </a>
        </div>

        {/* Email */}
        <p className="mt-8">
          <span className="text-white/40 text-sm">Or email us: </span>
          <a
            href="mailto:hello@atavo.co.uk"
            className="text-[#00c47a] text-sm hover:underline"
          >
            hello@atavo.co.uk
          </a>
        </p>
      </Reveal>
    </section>
  );
}
