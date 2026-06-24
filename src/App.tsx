import { Achievements } from "@/components/Achievements";
import { CTA } from "@/components/CTA";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InterestingInfo } from "@/components/InterestingInfo";
import { Nav } from "@/components/Nav";
import { Portfolio } from "@/components/Portfolio";

export default function App() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Portfolio />
        <Expertise />
        <Achievements />
        <InterestingInfo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
