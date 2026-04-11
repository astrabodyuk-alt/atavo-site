'use client'
import { TestimonialsMinimal } from "@/components/ui/testimonials-minimal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 flex flex-col items-center justify-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00c47a] mb-2">Testimonials</p>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">What our clients say.</h2>
      <TestimonialsMinimal />
    </section>
  );
}
