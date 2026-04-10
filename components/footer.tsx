const services = [
  { label: "Web Design", href: "#services" },
  { label: "SaaS & Tools", href: "#services" },
  { label: "Automation", href: "#services" },
];

const company = [
  { label: "Work", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Free Audit", href: "#audit-form" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-[#e8e8e8] py-16 px-6 md:px-12">
      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left — brand */}
        <div>
          <p className="font-heading font-bold text-2xl text-black">
            Atavo<span className="text-[#00c47a]">Agency</span>
          </p>
          <p className="text-[#6b6b6b] text-sm mt-2">
            Custom websites &amp; tools for UK businesses.
          </p>
          <a
            href="mailto:hello@atavo.co.uk"
            className="text-[#6b6b6b] text-sm mt-4 block hover:text-black transition-colors"
          >
            hello@atavo.co.uk
          </a>
        </div>

        {/* Center — services */}
        <div>
          <p className="text-black font-semibold mb-4">Services</p>
          {services.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[#6b6b6b] hover:text-black text-sm transition-colors block mb-2"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Right — company */}
        <div>
          <p className="text-black font-semibold mb-4">Company</p>
          {company.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="text-[#6b6b6b] hover:text-black text-sm transition-colors block mb-2"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e8e8e8] mt-12 pt-8 flex flex-col md:flex-row justify-between gap-2">
        <p className="text-[#6b6b6b] text-xs">
          © 2026 Achievesphere Limited trading as Atavo Agency
        </p>
        <p className="text-[#6b6b6b] text-xs">Registered in England &amp; Wales</p>
      </div>
    </footer>
  );
}
