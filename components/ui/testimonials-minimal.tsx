'use client'

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "In 10 days I had a site that actually brings in customers. The audit alone was worth it.",
    name: "James T.",
    role: "Barbershop owner, London",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
  },
  {
    quote:
      "They built us a custom booking system that saved 10 hours a week. Proper agency quality without the agency price.",
    name: "Sarah M.",
    role: "Physio clinic, Manchester",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    quote:
      "The competitor analysis they gave us for free was better than what we paid a marketing agency £2,000 for.",
    name: "Marcus D.",
    role: "Personal trainer, Birmingham",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#00c47a] text-[#00c47a]" />
      ))}
    </div>
  );
}

export function TestimonialsMinimal() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-6 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="group relative flex flex-col gap-5 rounded-2xl border border-[#e8e8e8] bg-white p-8 transition-shadow duration-300 hover:shadow-md hover:border-[#00c47a]/30"
        >
          {/* Stars */}
          <Stars />

          {/* Quote */}
          <p className="flex-1 text-[#0d0d0d]/80 text-base leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#e8e8e8]">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#f7f7f7]">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0d0d0d]">{t.name}</p>
              <p className="text-xs text-[#6b6b6b] mt-0.5">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
