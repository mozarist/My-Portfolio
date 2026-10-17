"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowDown, FolderOpen, Hand } from "lucide-react";

export default function Hero() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    const check = () => {
        const el = document.getElementById("main-content");
        if (!el) return;
        // true kalau ujung atas #main-content sudah menyentuh / lewat ujung atas layar
        setHidden(el.getBoundingClientRect().top <= 0);
    };

    // Cek tiap scroll
    useMotionValueEvent(scrollY, "change", check);

    // Cek sekali pas mount (misal halaman reload di tengah scroll) dan pas resize
    useEffect(() => {
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div className="relative sm:fixed top-0 w-screen h-screen p-5 bg-linear-to-t from-muted/50 via-background to-background flex flex-col justify-center items-center overflow-hidden z-2">
            <motion.div
                initial={false}
                animate={{
                    opacity: hidden ? 0 : 1,
                    pointerEvents: hidden ? "none" : "auto",
                }}
                transition={{ duration: 0 }}
                className="flex flex-col justify-center items-center gap-5 z-1"
            >
                <div className="space-y-5 max-w-4xl 2xl:max-w-5xl w-full">
                    <div className="block sm:hidden w-14 sm:w-16 h-fit bg-card rounded overflow-hidden">
                        <Image
                            src="/Azzam-Solo-Photoshoot.jpg"
                            alt="Mozarist's Picture"
                            width={500}
                            height={500}
                            preload={true}
                            className="w-full aspect-square object-center object-cover" />
                    </div>

                    <p className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-left sm:text-center font-medium font-heading text-balance w-full">
                        I build seamless websites tailored for your needs.
                    </p>

                    <div className="flex items-center justify-start sm:justify-center gap-1 w-full">
                        <Button variant="default" size="sm" onClick={() => window.open('#works', '_self')}>
                            View My Works <FolderOpen />
                        </Button>

                        <Button variant="outline" size="sm" onClick={() => window.open('#contact', "_self")}>
                            Let's Talk <Hand />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}