'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from "@/components/blocks/hero";
import NavBar from "@/components/blocks/navigation";
import SelectedWorksSection from "@/components/blocks/works";
import ContactSection from "@/components/blocks/contact";
import AboutSection from "@/components/blocks/about";
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import AchievementSection from '@/components/blocks/achievements';
import CertificateListSection from '@/components/blocks/certificates';

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isEditableTarget =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT');

      if (
        event.key.toLowerCase() !== 'd' ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isEditableTarget
      ) {
        return;
      }

      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resolvedTheme, setTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative w-full">
      <NavBar />

      <Hero />

      <div className="relative sm:h-screen"></div>

      <div className="sm:px-5 w-full">
        <motion.main
          style={{ rotate: isDesktop ? rotate : 0 }}
          id="main-content"
          className="relative sm:mt-[-18vh] mb-5 max-w-4xl 2xl:max-w-5xl flex flex-col gap-5 rounded-2xl mx-auto z-10"
        >
          <div className="flex flex-col gap-10 sm:bg-card p-5 sm:border sm:rounded-2xl">
            <AboutSection />
          </div>

          <div className="flex flex-col gap-10 sm:bg-card p-5 sm:border sm:rounded-2xl">
            <SelectedWorksSection />
          </div>

          <div className="flex flex-col gap-10 sm:bg-card p-5 sm:border sm:rounded-2xl">
            <AchievementSection />
          </div>

          <div className="flex flex-col gap-10 sm:bg-card p-5 sm:border sm:rounded-2xl">
            <CertificateListSection />
          </div>

          <footer
            className="relative flex flex-col bg-linear-to-t from-background sm:from-card via-background sm:via-card to-muted p-5 border-t sm:border sm:rounded-2xl"
          >
            <ContactSection />
          </footer>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} Ahmad Azzam Mozarist. All rights reserved.
            </span>

            <div className="flex items-center gap-2">
              <Button
                variant="link"
                size="xs"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                aria-keyshortcuts="d"
                className="text-muted-foreground hover:text-foreground"
              >
                <Sun className="dark:hidden" />
                <span className="dark:hidden">Light</span>
                <Moon className="hidden dark:block" />
                <span className="hidden dark:block">Dark</span>
              </Button>

              <Button
                variant="link"
                size="xs"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowUp />
                Back to top
              </Button>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}