import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import NavBar from "./navigation";
import { Circle } from "lucide-react";

export default function Hero() {
    return (
        <div className="w-full h-screen bg-background hero-container flex flex-col justify-between">
            <div className="flex flex-col flex-1 justify-between">
                <NavBar />
                <div className="flex flex-col gap-5">
                    <Badge>
                        <Circle className="text-primary fill-primary" size={12} />
                        Available for Freelance
                    </Badge>
                    <p className="text-6xl tracking-[-0.06em]">
                        Hi, I&apos;m Mozarist, a Full-stack developer. <br />
                        I build projects that <span className="text-muted">look good on the outside </span> <br />
                        and <span className="text-muted">work</span> just as well <span className="text-muted">on the inside</span>.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex justify-between items-end">
                <div className="flex items-center justify-center gap-2">
                    <Button size={"lg"}>View My Works</Button>
                    <Button variant={"outline"} size={"lg"}>Get in Touch</Button>
                </div>
                <p className="text-9xl leading-24 text-muted-foreground italic font-[Instrument_Serif] tracking-[-0.06em] opacity-15">
                    *2026 Portfolio
                </p>
            </div>
        </div>
    )
}
