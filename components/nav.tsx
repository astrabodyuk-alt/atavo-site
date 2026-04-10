export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-[#e8e8e8]">
      <div className="flex items-center justify-between h-full px-6 md:px-12">
        {/* Logo */}
        <a href="/" className="font-heading font-bold text-black text-lg tracking-tight">
          Atavo<span className="text-[#00c47a]">Agency</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-[#6b6b6b] hover:text-black transition-colors text-sm">
            Work
          </a>
          <a href="#services" className="text-[#6b6b6b] hover:text-black transition-colors text-sm">
            Services
          </a>
          <a href="#pricing" className="text-[#6b6b6b] hover:text-black transition-colors text-sm">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#audit-form"
          className="bg-black text-white font-semibold px-5 py-2 rounded-full hover:bg-[#00c47a] hover:text-black transition text-sm"
        >
          Start project →
        </a>
      </div>
    </header>
  );
}
