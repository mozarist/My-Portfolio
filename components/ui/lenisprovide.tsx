"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1,         // Scroll intensity (lower means smoother/slower)
        duration: 1.5,     // Animation duration in seconds
        smoothWheel: true, // Smooth mouse wheel movements
      }}
    >
      {children}
    </ReactLenis>
  );
}
