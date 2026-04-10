import Nav from "@/components/nav";
import Hero from "@/components/hero";
import DemoStrip from "@/components/demo-strip";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DemoStrip />
      </main>
    </>
  );
}
