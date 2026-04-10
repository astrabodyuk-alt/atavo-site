import Reveal from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I own the website after it's built?",
    answer:
      "Yes. 100% code ownership. You receive the full source code on delivery and can host it anywhere. No monthly platform fees, no lock-in.",
  },
  {
    question: "What if I don't have a logo or photos?",
    answer:
      "No problem. We create a professional logo for your business and use high-quality images if you don't have photos. No extra charge.",
  },
  {
    question: "Can I make changes to the website myself?",
    answer:
      "Yes. We build on standard technology (Next.js + Tailwind) that any developer can maintain. We also offer a maintenance plan at £30/month if you prefer we handle updates.",
  },
  {
    question: "How does payment work?",
    answer:
      "50% deposit to start (£349.50), balance on delivery. Pay by card via Stripe or split into 3 monthly payments of £233 with Klarna — interest free.",
  },
  {
    question: "What information do you need from me?",
    answer:
      "Just a short brief: your business name, what you do, your logo (or we create one), and your contact details. Takes about 30 minutes.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-[#00c47a] uppercase font-body">
        FAQ
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-black">
        Frequently asked questions.
      </h2>

      {/* Accordion */}
      <Reveal>
        <div className="mt-16 max-w-2xl mx-auto">
          <Accordion multiple={false} className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[#e8e8e8] py-2"
              >
                <AccordionTrigger className="text-black font-semibold text-lg text-left hover:no-underline hover:text-[#00c47a] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6b6b6b] text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
