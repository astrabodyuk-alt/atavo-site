'use client'

import { FAQ } from "@/components/ui/faq-tabs";

const categories = {
  "services": "Our Services",
  "process": "Process",
  "pricing": "Pricing & Support",
};

const faqData = {
  "services": [
    {
      question: "What's included in the free audit?",
      answer: "A full competitor analysis, SEO review, and digital strategy report tailored to your business. Valued at £299, included free with every project.",
    },
    {
      question: "Do you work with any industry?",
      answer: "Yes. Restaurants, clinics, agencies, personal trainers, barbershops, e-commerce — we build custom solutions for any business in the UK.",
    },
  ],
  "process": [
    {
      question: "How long does it take to build my site?",
      answer: "7 days from brief sign-off. SaaS tools take 2–3 weeks depending on complexity.",
    },
    {
      question: "Do I need to provide anything?",
      answer: "Just your logo (if you have one), brand colours, and a few details about your business. We handle the rest.",
    },
  ],
  "pricing": [
    {
      question: "Can I pay in instalments?",
      answer: "Yes. We offer 3× monthly payments via Klarna — so you can start for £233 today.",
    },
    {
      question: "What happens after launch?",
      answer: "We offer ongoing support and maintenance. Ask us about our monthly retainer packages.",
    },
  ],
};

export default function FAQSection() {
  return (
    <div id="faq">
      <FAQ
        title="Got questions? We've got answers."
        subtitle="FAQ"
        categories={categories}
        faqData={faqData}
        className="bg-[#f7f7f7] py-24"
      />
    </div>
  );
}
