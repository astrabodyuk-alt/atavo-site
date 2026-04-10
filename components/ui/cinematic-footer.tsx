'use client'

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { gsap } from "gsap";

const MARQUEE_ITEMS = [
  "Custom Websites",
  "✦",
  "SaaS Tools",
  "✦",
  "Business Automation",
  "✦",
  "Free Audit",
  "✦",
  "Built in 7 Days",
  "✦",
];

const LINKS_LEFT = [
  { label: "Work", href: "#demo" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

const LINKS_RIGHT = [
  { label: "Free Audit", href: "#audit-form" },
  { label: "Contact", href: "mailto:hello@atavo.co.uk" },
];

export function CinematicFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const backTopRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const magnetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // ── Marquee ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;
    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((v: string) => parseFloat(v) % totalWidth),
      },
    });
    return () => { tween.kill(); };
  }, []);

  // ── Heading entrance ────────────────────────────────────────────────────────
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── CTA entrance ────────────────────────────────────────────────────────────
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el.children,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12, delay: 0.2 }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Magnetic back-to-top ────────────────────────────────────────────────────
  const handleMagnetMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = backTopRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
  }, []);

  const handleMagnetLeave = useCallback(() => {
    gsap.to(backTopRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">

      {/* ── Grid background ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Aurora glow ─────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, #00c47a 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #00c47a 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/4 -right-40 h-[350px] w-[350px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #00b4d8 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Giant background text ────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none overflow-hidden">
        <span
          className="font-heading font-black leading-none text-white/[0.03]"
          style={{ fontSize: "clamp(8rem, 25vw, 22rem)", letterSpacing: "-0.05em" }}
          aria-hidden
        >
          ATAVO
        </span>
      </div>

      {/* ── Marquee ─────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/10 py-5 overflow-hidden">
        <div ref={marqueeRef} className="flex gap-10 whitespace-nowrap will-change-transform">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={
                item === "✦"
                  ? "text-[#00c47a] text-lg"
                  : "text-white/50 text-sm font-semibold uppercase tracking-[0.25em] font-body"
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 pt-24 pb-16">

        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight max-w-3xl mb-12 opacity-0"
          style={{
            textShadow: "0 0 80px rgba(0,196,122,0.25), 0 0 160px rgba(0,196,122,0.1)",
          }}
        >
          Ready to grow your
          <br />
          <span className="text-[#00c47a]">business online?</span>
        </h2>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#audit-form"
            className="inline-flex items-center gap-2 bg-[#00c47a] text-black font-semibold px-8 py-4 rounded-full text-base hover:brightness-110 transition-all duration-200 opacity-0"
          >
            Claim your free audit
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-8 py-4 rounded-full text-base hover:border-white/40 hover:text-white transition-all duration-200 opacity-0"
          >
            See our services
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand + links */}
          <div className="flex flex-col gap-6">
            <p className="font-heading font-bold text-2xl">
              Atavo<span className="text-[#00c47a]">Agency</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {[...LINKS_LEFT, ...LINKS_RIGHT].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <button
            ref={backTopRef}
            onClick={scrollToTop}
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
            aria-label="Back to top"
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00c47a] hover:text-[#00c47a] transition-colors shrink-0 will-change-transform"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white/25 text-xs">
          <p>© 2026 Achievesphere Limited trading as Atavo Agency</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="mailto:hello@atavo.co.uk" className="hover:text-white/50 transition-colors">hello@atavo.co.uk</a>
          </div>
        </div>

        <p className="mt-6 text-white/15 text-xs">Crafted with ❤ by Atavo</p>
      </div>
    </footer>
  );
}
