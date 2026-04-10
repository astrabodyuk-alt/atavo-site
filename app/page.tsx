import Nav from "@/components/nav";
import Hero from "@/components/hero";
import USPAudit from "@/components/usp-audit";
import AuditForm from "@/components/audit-form";
import DemoStrip from "@/components/demo-strip";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import { CinematicFooter } from "@/components/ui/cinematic-footer";

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
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <CinematicFooter />
    </>
  );
}
