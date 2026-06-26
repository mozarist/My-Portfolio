import { StickyFooter } from "@/components/blocks/footer";
import Hero from "@/components/blocks/hero";
import NavBar from "@/components/blocks/navigation";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavBar />

      <Hero />

      <StickyFooter />
    </div>
  );
}
