const services = ["Web Design", "Web Apps", "Automation"];
const company = [
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border-dark py-16 px-6 md:px-12">
      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left — brand */}
        <div>
          <p className="font-heading font-bold text-2xl text-white">
            Atavo<span className="text-green">Agency</span>
          </p>
          <p className="text-muted text-sm mt-2">
            Web design for the high street.
          </p>
          <a
            href="mailto:hello@atavo.co.uk"
            className="text-muted text-sm mt-4 block hover:text-white transition-colors"
          >
            hello@atavo.co.uk
          </a>
        </div>

        {/* Center — services */}
        <div>
          <p className="text-white font-semibold mb-4">Services</p>
          {services.map((s) => (
            <a
              key={s}
              href="#services"
              className="text-muted hover:text-white text-sm transition-colors block mb-2"
            >
              {s}
            </a>
          ))}
        </div>

        {/* Right — company */}
        <div>
          <p className="text-white font-semibold mb-4">Company</p>
          {company.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="text-muted hover:text-white text-sm transition-colors block mb-2"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-dark mt-12 pt-8 flex flex-col md:flex-row justify-between gap-2">
        <p className="text-muted text-xs">
          © 2026 Achievesphere Limited trading as Atavo Agency
        </p>
        <p className="text-muted text-xs">Registered in England &amp; Wales</p>
      </div>
    </footer>
  );
}
