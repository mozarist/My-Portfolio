"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { FolderOpen, Hand } from "lucide-react";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const [isFaded, setIsFaded] = useState(false);
    const { scrollY } = useScroll();
    const desktopOpacity = useTransform(scrollY, [0, 180], [1, 0]);
    const mobileOpacity = useTransform(scrollY, [0, 1], [1, 1]);
    const opacity = isMobile ? mobileOpacity : desktopOpacity;

    useMotionValueEvent(opacity, "change", (value) => {
        setIsFaded(value <= 0.01);
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 639px)");
        const updateViewport = () => setIsMobile(mediaQuery.matches);

        updateViewport();
        mediaQuery.addEventListener("change", updateViewport);
        return () => mediaQuery.removeEventListener("change", updateViewport);
    }, []);

    return (
        <div className="relative sm:fixed top-0 w-screen h-[75vh] sm:h-screen sm:bg-linear-to-t from-muted/50 via-background to-background flex flex-col justify-center items-center overflow-hidden z-2">
            <motion.div
                initial={false}
                style={{ opacity }}
                animate={{ pointerEvents: !isMobile && isFaded ? "none" : "auto" }}
                className="flex flex-col gap-5 p-5 sm:p-0 max-w-xl 2xl:max-w-2xl w-full z-1"
            >
                <div className="w-16 sm:w-20 h-fit bg-card rounded-sm overflow-hidden">
                    <Image
                        src="/Azzam-Solo-Photoshoot.jpg"
                        alt="Mozarist's Picture"
                        width={500}
                        height={500}
                        preload={true}
                        className="w-full aspect-square object-center object-cover" />
                </div>

                <p className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium font-heading text-balance w-full">
                    I build seamless websites tailored for your needs.
                </p>

                <div className="flex items-center gap-1 w-full">
                    <Button variant="default" size="sm" onClick={() => window.open('#works', '_self')}>
                        View My Works <FolderOpen />
                    </Button>

                    <Button variant="outline" size="sm" onClick={() => window.open('#contact', "_self")}>
                        Let's Talk <Hand />
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}