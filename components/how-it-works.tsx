import { FileText, Laptop, Rocket, CheckCircle } from "lucide-react";
import Reveal from "@/components/reveal";

const steps = [
  {
    number: "01",
    icon: FileText,
    day: "Day 1",
    title: "Tell us about your business",
    description:
      "Fill a short form. We send you a questionnaire. 30 minutes max. That's it.",
  },
  {
    number: "02",
    icon: Laptop,
    day: "Days 2–6",
    title: "We build your site",
    description:
      "Daily progress updates. You review and give feedback. We adjust until it's perfect.",
  },
  {
    number: "03",
    icon: Rocket,
    day: "Day 7",
    title: "Your site goes live",
    description:
      "We handle hosting, domain setup, and Google indexing. You start getting customers.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-24 px-6 md:px-12">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-[0.3em] text-green uppercase font-body">
        THE PROCESS
      </p>

      {/* Title */}
      <h2 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-white max-w-2xl">
        From idea to live site in 7 days.
      </h2>

      {/* Steps */}
      <Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="bg-bg rounded-2xl p-8 border border-border-dark flex flex-col gap-4"
            >
              <span className="font-heading font-black text-7xl text-green opacity-20 leading-none">
                {step.number}
              </span>
              <Icon className="text-green w-6 h-6" />
              <div>
                <p className="text-green text-xs font-semibold tracking-widest uppercase mb-2">
                  {step.day}
                </p>
                <h3 className="text-white font-heading font-bold text-xl">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
      </Reveal>

      {/* Guarantee line */}
      <p className="mt-12 flex items-center justify-center gap-2 text-muted text-sm">
        <CheckCircle className="text-green w-4 h-4 shrink-0" />
        Average delivery: 7 days. Guaranteed.
      </p>
    </section>
  );
}
