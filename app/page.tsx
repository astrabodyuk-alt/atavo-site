"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/nav";

// Heavy components lazy-loaded client-side — framer-motion, GSAP, canvas, tsparticles
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const USPAudit = dynamic(() => import("@/components/usp-audit"), { ssr: false });
const AuditForm = dynamic(() => import("@/components/audit-form"), { ssr: false });
const DemoStrip = dynamic(() => import("@/components/demo-strip"), { ssr: false });
const Services = dynamic(() => import("@/components/services"), { ssr: false });
const Pricing = dynamic(() => import("@/components/pricing"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/components/faq"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <USPAudit />
        <AuditForm />
        <DemoStrip />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
