import { Star } from "lucide-react";
import Reveal from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Atavo built our restaurant website in less than a week. We're now getting online orders every day. Best £699 we ever spent.",
    name: "James K.",
    business: "Owner, Burger Joint Portsmouth",
  },
  {
    quote:
      "Professional, fast, and they handled everything. Our site looks better than any of our competitors.",
    name: "Sarah M.",
    business: "Owner, The Coffee Room Bristol",
  },
  {
    quote:
      "I had no website for 3 years. Atavo built one in 7 days. I've already had 12 new bookings from Google.",
    name: "Ahmed R.",
    business: "Owner, Spice Garden Birmingham",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="text-yellow-400 w-4 h-4 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#f7f7f7] py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-[#00c47a] uppercase font-body">
        CLIENTS
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-black">
        What our clients say.
      </h2>

      {/* Cards */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-[#e8e8e8] flex flex-col gap-4"
            >
              <Stars />
              <p className="text-black/70 italic text-base leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-black font-semibold">{t.name}</p>
                <p className="text-[#6b6b6b] text-sm">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Social proof line */}
      <p className="mt-12 text-center text-[#6b6b6b] text-sm">
        Join 10+ UK businesses already online with Atavo.
      </p>
    </section>
  );
}
