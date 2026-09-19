'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function NavBar() {
  const { scrollY } = useScroll();
  const targetScroll = typeof window !== 'undefined' ? window.innerHeight * 0.84 : 600;
  const is2Xl = typeof window !== 'undefined' && window.innerWidth >= 1536;
  const isSM = typeof window !== 'undefined' && window.innerWidth >= 640;
  const borderRadius = useTransform(scrollY, [0, targetScroll], [isSM ? '9999px' : "0px", '0px']);
  const top = useTransform(scrollY, [0, targetScroll], [isSM ? '16px' : '0px', '0px']);
  const height = useTransform(scrollY, [0, targetScroll], ['48px', '64px']);
  const maxWidth = useTransform(scrollY,[0, targetScroll],['48rem', is2Xl ? '64rem' : '56rem']);

  return (
    <div className="flex justify-center items-center w-full">
      <motion.nav
        style={{
          borderRadius,
          top,
          height,
          maxWidth
        }}
        className="fixed top-0 w-full max-w-4xl 2xl:max-w-5xl mx-auto border z-999 overflow-hidden"
      >
        <motion.div 
          style={{ borderRadius }}
          className="flex items-center justify-between bg-card/80 backdrop-blur-sm w-full h-full p-5"
        >
          <div className="flex-1 flex items-center justify-start gap-2 text-lg font-medium">
            <span className="font-semibold text-primary">Mozarist</span>

            <Badge variant="secondary">
              Available for freelance
            </Badge>
          </div>

          <Button variant="ghost">
            Menu
            <Menu />
          </Button>
        </motion.div>
      </motion.nav>
    </div>
  )
}