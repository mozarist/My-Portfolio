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
                <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3">
                        <p className="text-2xl font-semibold">Hi, I'm Azzam!</p>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/mozarist.png"
                                alt="@mozarist"
                            />
                            <AvatarFallback>—</AvatarFallback>
                        </Avatar>
                        <p className="text-2xl font-semibold">Full-Stack Developer Based in Indonesia.</p>
                    </div>
                    <p className="text-6xl text-center text-primary font-bold max-w-4xl">
                        I build digital experiences that look good and work well.
                    </p>
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
