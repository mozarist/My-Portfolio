import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative w-full h-screen hero-container flex flex-col justify-center items-center overflow-hidden">
            <InteractiveGridPattern
                className={cn(
                    "[mask:radial-gradient(500px_circle_at_center,white,transparent)]"
                )}
                width={40}
                height={40}
                squares={[80, 80]}
            />
            <div className="flex flex-col justify-center items-center gap-5 z-1">
                <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center justify-center">
                        <p className="text-7xl text-center font-medium">
                            Hi, I'm Mozarist.</p>
                        <p className="text-7xl text-center font-medium">Full-Stack Developer <span className="text-primary/80">Based in Indonesia</span>.</p>
                    </div>
                    {/* <p className="text-7xl text-center text-primary font-semibold max-w-3xl">
                        I build digital experiences that look good and work well.
                    </p> */}
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Link href="#works">
                        <Button size={"lg"}>View My Works <ArrowUpRight /></Button>
                    </Link>
                    <a href="#contact">
                        <Button size={"lg"} variant={"outline"}>Get in Touch <ArrowUpRight /></Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
