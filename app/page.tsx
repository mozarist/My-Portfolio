import IntroductionSection from "@/components/blocks/introduction";
import { StickyFooter } from "@/components/blocks/footer";
import Hero from "@/components/blocks/hero";
import NavBar from "@/components/blocks/navigation";
import SelectedWorksSection from "@/components/blocks/works";
import ContactSection from "@/components/blocks/contact";
import AboutSection from "@/components/blocks/about";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavBar />

      <Hero />

      <main className="max-w-6xl flex flex-col gap-24 p-5 mx-auto">
        <IntroductionSection />
        <SelectedWorksSection />
        <AboutSection />
        <ContactSection />
      </main>

      <StickyFooter />
    </div>
  );
}