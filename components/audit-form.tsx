'use client'
import { useState } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_MAKE_WEBHOOK || "https://hook.eu1.make.com/PLACEHOLDER";

const businessTypes = [
  "Restaurant",
  "Café & Coffee Shop",
  "Hair & Beauty",
  "Trades & Construction",
  "Health & Fitness",
  "Retail",
  "Professional Services",
  "Other",
];

const websiteOptions = [
  "No website",
  "Outdated website (5+ years)",
  "I have a website but need help",
];

const budgetOptions = [
  "£699 Website",
  "£1,499+ SaaS/App",
  "£299/mo Automation",
  "Not sure yet",
];

const fieldClass =
  "w-full border border-[#e8e8e8] rounded-xl px-4 py-3 text-black bg-white focus:outline-none focus:border-black transition text-sm";

const labelClass = "text-sm font-semibold text-black mb-1 block";

export default function AuditForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      businessType: (form.elements.namedItem("businessType") as HTMLSelectElement).value,
      currentWebsite: (form.elements.namedItem("currentWebsite") as HTMLSelectElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="audit-form" className="bg-[#f7f7f7] py-24 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Label */}
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          FREE AUDIT
        </p>

        {/* Title */}
        <h2 className="mt-4 font-heading font-black text-4xl md:text-5xl text-black">
          Tell us about your business.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-[#6b6b6b] text-lg">
          We&apos;ll audit your market, analyse your competitors, and show you exactly
          how to win online. Free. No obligation.
        </p>

        {/* Form card */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-[#e8e8e8] text-left">
          {status === "success" ? (
            <div className="py-12 text-center">
              <p className="text-2xl font-heading font-bold text-black">
                ✅ Request received!
              </p>
              <p className="mt-3 text-[#6b6b6b]">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                {/* Full name */}
                <div>
                  <label htmlFor="name" className={labelClass}>Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className={fieldClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className={fieldClass}
                  />
                </div>

                {/* Business name */}
                <div>
                  <label htmlFor="business" className={labelClass}>Business name</label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="e.g. The Coffee Room"
                    required
                    className={fieldClass}
                  />
                </div>

                {/* Business type */}
                <div>
                  <label htmlFor="businessType" className={labelClass}>Business type</label>
                  <select id="businessType" name="businessType" className={fieldClass}>
                    <option value="">Select your industry</option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Current website */}
                <div>
                  <label htmlFor="currentWebsite" className={labelClass}>Current website?</label>
                  <select id="currentWebsite" name="currentWebsite" className={fieldClass}>
                    <option value="">Select an option</option>
                    {websiteOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget</label>
                  <select id="budget" name="budget" className={fieldClass}>
                    <option value="">What are you looking for?</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Anything else? <span className="text-[#6b6b6b] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us anything else about your business or goals..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              {/* Error state */}
              {status === "error" && (
                <p className="mt-4 text-red-500 text-sm text-center">
                  Something went wrong. Please email us at{" "}
                  <a href="mailto:hello@atavo.co.uk" className="underline">
                    hello@atavo.co.uk
                  </a>
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-black text-white font-bold py-4 rounded-full mt-6 hover:bg-[#00c47a] hover:text-black transition text-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send my free audit request →"}
              </button>
            </form>
          )}
        </div>

        {/* Privacy note */}
        <p className="mt-4 text-center text-[#6b6b6b] text-xs">
          🔒 Your information is private. We reply within 24 hours.
        </p>
      </div>
    </section>
  );
}
