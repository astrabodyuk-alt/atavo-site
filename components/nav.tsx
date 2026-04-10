export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-surface/80 backdrop-blur-md border-b border-border-dark">
      <div className="flex items-center justify-between h-full px-6 md:px-12">
        {/* Logo */}
        <a href="/" className="font-heading font-bold text-white text-lg tracking-tight">
          Atavo<span className="text-green">Agency</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-muted hover:text-white transition-colors text-sm">
            Work
          </a>
          <a href="#services" className="text-muted hover:text-white transition-colors text-sm">
            Services
          </a>
          <a href="#pricing" className="text-muted hover:text-white transition-colors text-sm">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#pricing"
          className="bg-green text-bg font-semibold px-5 py-2 rounded-full hover:brightness-110 transition text-sm"
        >
          Start project →
        </a>
      </div>
    </header>
  );
}
