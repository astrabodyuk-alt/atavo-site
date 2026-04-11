'use client'
import { TextParallaxContent } from "@/components/ui/text-parallax-content";
import { ArrowUpRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <div id="process" className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
        subheading="Step 01 — Free Audit"
        heading="We analyse your business."
      >
        <ProcessContent
          title="A full report worth £299 — completely free."
          description="We study your business, your competitors, and your entire market. Within 48 hours, you receive a detailed audit covering your online presence, SEO performance, and competitor analysis — with clear recommendations to grow."
          secondLine="No commitment. No hidden fees. Just clarity on where you stand and where you could be."
          ctaText="Claim your free audit"
          ctaHref="#audit-form"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
        subheading="Step 02 — We Build"
        heading="Built from scratch, for you."
      >
        <ProcessContent
          title="Website, SaaS tool, or automation — delivered in 7 days."
          description="No templates. No shortcuts. We design and build everything custom for your business. Whether it's a website that converts, a booking system that saves you hours, or automation that runs while you sleep."
          secondLine="You stay in the loop at every step. We build fast, but we never compromise on quality."
          ctaText="See our services"
          ctaHref="#services"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop"
        subheading="Step 03 — You Launch"
        heading="Go live with confidence."
      >
        <ProcessContent
          title="Your project goes live. We stay by your side."
          description="Launch day is just the beginning. We handle deployment, domain setup, and make sure everything runs perfectly. Then we stay available for ongoing support and improvements whenever you need us."
          secondLine="Your business grows online. That's the goal. That's what we deliver."
          ctaText="Start your project"
          ctaHref="#audit-form"
        />
      </TextParallaxContent>
    </div>
  );
}

function ProcessContent({
  title,
  description,
  secondLine,
  ctaText,
  ctaHref,
}: {
  title: string;
  description: string;
  secondLine: string;
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-2xl font-bold md:col-span-4 md:text-3xl">{title}</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{description}</p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">{secondLine}</p>
        <a
          href={ctaHref}
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit inline-block"
        >
          {ctaText} <ArrowUpRight className="inline h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
