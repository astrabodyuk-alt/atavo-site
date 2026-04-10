import Nav from "@/components/nav";
import Hero from "@/components/hero";
import DemoStrip from "@/components/demo-strip";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DemoStrip />
        <Services />
      </main>
    </>
  );
}
