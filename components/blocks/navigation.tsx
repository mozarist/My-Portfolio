'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function NavBar() {
  const { scrollY } = useScroll();
  const { resolvedTheme, setTheme } = useTheme();

  const [isPast, setIsPast] = useState(false); // sudah menyentuh #main-content?
  const [isSM, setIsSM] = useState(false);
  const [is2Xl, setIs2Xl] = useState(false);

  // Cek apakah bagian atas layar sudah mengenai #main-content
  const checkPosition = useCallback(() => {
    const el = document.getElementById('main-content');
    if (!el) return;
    setIsPast(el.getBoundingClientRect().top <= 0);
  }, []);

  // Cek saat scroll
  useMotionValueEvent(scrollY, 'change', checkPosition);

  // Cek saat mount + resize (breakpoint & posisi)
  useEffect(() => {
    const update = () => {
      setIsSM(window.innerWidth >= 640);
      setIs2Xl(window.innerWidth >= 1536);
      checkPosition();
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [checkPosition]);

  const borderRadius = isPast || !isSM ? '0px' : '9999px';
  const top = isPast || !isSM ? '0px' : '16px';
  const height = isPast ? '64px' : '48px';
  const maxWidth = isPast ? (is2Xl ? '64rem' : '56rem') : '48rem';

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex justify-center items-center w-full">
      <motion.nav
        initial={false}
        animate={{ borderRadius, top, height, maxWidth }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 w-full mx-auto border z-999 overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{ borderRadius }}
          transition={{ duration: 0.1, ease: [0.2, 0, 0.2, 1] }}
          className="flex items-center justify-between bg-card/80 backdrop-blur-sm w-full h-full p-5"
        >
          <div className="flex-1 flex items-center justify-start gap-2 text-lg font-medium">
            <span className="font-semibold text-primary">Mozarist</span>

            <Badge variant="secondary">Available for freelance</Badge>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="size-5 dark:hidden" />
            <Moon className="size-5 hidden dark:block" />
          </Button>
        </motion.div>
      </motion.nav>
    </div>
  );
}