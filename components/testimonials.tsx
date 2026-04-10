import { Star } from "lucide-react";
import Reveal from "@/components/reveal";

const testimonials = [
  {
    quote:
      "In 7 days I had a site that actually brings in customers. The audit alone was worth it.",
    name: "James T.",
    business: "Barbershop owner",
  },
  {
    quote:
      "They built us a custom booking system that saved 10 hours a week.",
    name: "Sarah M.",
    business: "Physio clinic",
  },
  {
    quote:
      "Proper agency quality without the agency price tag.",
    name: "Marcus D.",
    business: "Personal trainer",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="text-[#00c47a] w-4 h-4 fill-[#00c47a]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#f7f7f7] py-24 px-6 md:px-12">
      {/* Label */}
      <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
        CLIENTS
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-black text-4xl md:text-5xl text-black">
        What our clients say.
      </h2>

      {/* Cards */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-[#e8e8e8] shadow-sm flex flex-col gap-4"
            >
              <Stars />
              <p className="text-black/80 italic text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-4 border-t border-[#e8e8e8]">
                <p className="text-black font-semibold text-sm">{t.name}</p>
                <p className="text-[#6b6b6b] text-xs mt-0.5">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Social proof */}
      <p className="mt-12 text-center text-[#6b6b6b] text-sm">
        Join UK businesses already growing with Atavo.
      </p>
    </section>
  );
}
