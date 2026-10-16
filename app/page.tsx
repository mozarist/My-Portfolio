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

      <div className="relative sm:h-screen"></div>

      <div className="sm:p-5 w-full">
        <motion.main
          style={{ rotate: isDesktop ? rotate : 0 }}
          id="main-content"
          className="relative sm:mt-[-16vh] mb-16 max-w-4xl 2xl:max-w-5xl flex flex-col gap-5 rounded-2xl mx-auto z-10"
        >
          <div className="flex flex-col gap-10 sm:bg-card p-5 sm:border sm:rounded-2xl">
            <AboutSection />
          </div>

          <div className="flex flex-col gap-10 sm:bg-card p-5 sm:border sm:rounded-2xl">
            <SelectedWorksSection />
          </div>

          <footer
            className="flex flex-col gap-10 bg-linear-to-t from-card via-card to-muted p-5 border rounded-2xl"
          >
            <ContactSection />
          </footer>
        </motion.main>
      </div>

    </div>
  );
}