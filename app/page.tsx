import Nav from "@/components/nav";
import Hero from "@/components/hero";
import DemoStrip from "@/components/demo-strip";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DemoStrip />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
