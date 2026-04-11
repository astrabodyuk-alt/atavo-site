"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "In 7 days I had a site that actually brings in customers. The audit alone was worth it.",
    name: "James T.",
    role: "Barbershop owner, London",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
  },
  {
    quote: "They built us a custom booking system that saved 10 hours a week. Proper agency quality without the agency price.",
    name: "Sarah M.",
    role: "Physio clinic, Manchester",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    quote: "The competitor analysis they gave us for free was better than what we paid a marketing agency £2,000 for.",
    name: "Marcus D.",
    role: "Personal trainer, Birmingham",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  },
]

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-16">
      {/* Quote */}
      <div className="relative min-h-[80px] mb-12">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-foreground
              transition-all duration-500 ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm pointer-events-none"
              }
            `}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-6">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View testimonial from ${t.name}`}
              className={`
                relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-background
                transition-all duration-300 ease-out cursor-pointer
                ${active === i ? "z-10 scale-110" : "grayscale hover:grayscale-0 hover:scale-105"}
              `}
            >
              <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-border" />

        {/* Active Author Info */}
        <div className="relative flex-1 min-h-[44px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center
                transition-all duration-400 ease-out
                ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
              `}
            >
              <span className="text-sm font-medium text-foreground">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
