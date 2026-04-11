'use client'

import { Testimonials as TestimonialsWidget } from "@/components/ui/unique-testimonial"

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          TESTIMONIALS
        </p>
        <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-[#0d0d0d]">
          What our clients say.
        </h2>
      </div>
      <TestimonialsWidget />
    </section>
  )
}
