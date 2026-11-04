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
import TechStackSection from '@/components/blocks/tech-stack';

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();

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

      <Hero />

      <div className="relative sm:h-screen"></div>

      <div className="sm:px-5 w-full">
        <main
          id="main-content"
          className="relative sm:mt-[-16vh] mb-5 mx-auto p-5 sm:p-2 max-w-xl 2xl:max-w-2xl flex flex-col gap-8 rounded-2xl z-10"
        >
          <AboutSection />

          <TechStackSection />

          <SelectedWorksSection />

          <AchievementSection />

          <CertificateListSection />

          <div className="flex flex-col gap-5 w-full">
            <footer
              className="relative flex flex-col bg-linear-to-t from-background to-card p-5 border-t rounded-t-2xl sm:rounded-2xl"
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
          </div>
        </main>
      </div>
    </div>
  );
}