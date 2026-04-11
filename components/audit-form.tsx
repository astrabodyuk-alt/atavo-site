import AuditMultistepForm from "@/components/ui/multistep-form";

export default function AuditForm() {
  return (
    <section id="audit-form" className="bg-[#f7f7f7] py-24 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Label */}
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          FREE AUDIT
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-heading font-black text-4xl md:text-5xl text-black">
          Get your free business audit.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-[#6b6b6b] text-lg">
          We&apos;ll audit your market, analyse your competitors, and show you exactly
          how to win online. Free. No obligation.
        </p>

        {/* Multi-step form */}
        <AuditMultistepForm />

        {/* Privacy note */}
        <p className="mt-2 text-center text-[#6b6b6b] text-xs">
          🔒 Your information is private. We reply within 48 hours.
        </p>
      </div>
    </section>
  );
}
