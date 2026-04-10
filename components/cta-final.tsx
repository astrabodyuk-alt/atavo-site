import Reveal from "@/components/reveal";

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-surface py-32 px-6 md:px-12 text-center">
      <Reveal>
      {/* Title */}
      <h2 className="font-heading font-black text-5xl md:text-7xl text-white leading-none">
        Ready to get
        <br />
        <span className="text-green">online?</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-6 text-muted text-xl">7 days. £699. No surprises.</p>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 justify-center flex-wrap">
        <a
          href="https://buy.stripe.com/XXXX"
          className="bg-green text-bg font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform"
        >
          Start your project →
        </a>
        <a
          href="https://lushbites2.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-green text-green px-10 py-5 rounded-full text-lg hover:bg-green/10 transition"
        >
          See the demo
        </a>
      </div>

      {/* Email */}
      <p className="mt-8">
        <span className="text-muted text-sm">Or email us: </span>
        <a
          href="mailto:hello@atavo.co.uk"
          className="text-green text-sm hover:underline"
        >
          hello@atavo.co.uk
        </a>
      </p>
      </Reveal>
    </section>
  );
}
