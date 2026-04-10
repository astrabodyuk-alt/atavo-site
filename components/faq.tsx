import Reveal from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the free audit?",
    answer:
      "A full competitor analysis, SEO review, and digital strategy report tailored to your business. Valued at £299, included free with every project.",
  },
  {
    question: "How long does it take to build my site?",
    answer:
      "7 days from brief sign-off. SaaS tools take 2–3 weeks depending on complexity.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "Just your logo (if you have one), brand colours, and a few details about your business. We handle the rest.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. We offer 3× monthly payments via Klarna — so you can start for £233 today.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer ongoing support and maintenance. Ask us about our monthly retainer packages.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 px-6 md:px-12">
      {/* Label */}
      <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
        FAQ
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-black text-4xl md:text-5xl text-black">
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
