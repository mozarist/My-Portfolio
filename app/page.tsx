'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import IntroductionSection from "@/components/blocks/introduction";
import { StickyFooter } from "@/components/blocks/footer";
import Hero from "@/components/blocks/hero";
import NavBar from "@/components/blocks/navigation";
import SelectedWorksSection from "@/components/blocks/works";
import ContactSection from "@/components/blocks/contact";
import AboutSection from "@/components/blocks/about";
import { useEffect, useState } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);
  const rotate = useTransform(scrollYProgress, [0, 0.1], [0.5, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    setIsDesktop(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <NavBar />

      <Hero />

      <motion.main
        style={{ rotate: isDesktop ? rotate : 0 }}
        className="relative top-[-140vh] sm:top-[-116vh] max-w-4xl 2xl:max-w-5xl flex flex-col gap-24 bg-card p-5 mx-auto border rounded z-10"
      >
        <AboutSection />
        <SelectedWorksSection />
        <ContactSection />
      </motion.main>

      <StickyFooter />
    </div>
  );
}