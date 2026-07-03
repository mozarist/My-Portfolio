import IntroductionSection from "@/components/blocks/introduction";
import { StickyFooter } from "@/components/blocks/footer";
import Hero from "@/components/blocks/hero";
import NavBar from "@/components/blocks/navigation";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavBar />

      <Hero />

      <main className="max-w-6xl p-5 mx-auto">
        <IntroductionSection />
      </main>

      <StickyFooter />
    </div>
  );
}