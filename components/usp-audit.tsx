import { CheckCircle } from "lucide-react";
import Reveal from "@/components/reveal";

const points = [
  "Business deep-dive — we understand your goals, your customers, your vision.",
  "Full competitor analysis — we research every competitor in your market.",
  "Strategic positioning — we find the gaps where you can dominate online.",
];

export default function USPAudit() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <Reveal>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side */}
          <div className="max-w-xl">
            <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
              WHAT MAKES US DIFFERENT
            </p>

            <h2 className="mt-4 font-heading font-black text-4xl md:text-6xl text-white leading-tight">
              Every project starts with
              <br />
              a free £299 audit.
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-lg">
              Before we write a single line of code, we audit your business and
              analyse every one of your competitors. We find where you can win
              online — then we build exactly that.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="text-[#00c47a] w-5 h-5 mt-1 shrink-0" />
                  <span className="text-white/80 text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side — value card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-sm w-full shrink-0">
            <span className="bg-[#00c47a] text-black text-xs font-bold px-3 py-1 rounded-full w-fit inline-block">
              FREE with every project
            </span>

            <div className="mt-6 flex flex-col">
              <span className="text-white/30 line-through font-heading font-black text-5xl leading-none">
                £299
              </span>
              <span className="text-[#00c47a] font-heading font-black text-7xl leading-none mt-1">
                £0
              </span>
              <span className="text-white/50 text-sm mt-2">included</span>
            </div>

            <p className="mt-4 text-white/60 text-sm">
              Included in every website, SaaS, and automation project.
            </p>

            <a
              href="#audit-form"
              className="mt-6 bg-[#00c47a] text-black font-semibold px-6 py-3 rounded-full w-full text-center hover:brightness-110 transition block"
            >
              Claim your free audit →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
