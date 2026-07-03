import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


export default function SelectedWorksSection() {
    return (
        <section id="works" className="flex flex-col items-center justify-center gap-6 scroll-mt-24">
            <div className="space-y-2 w-full">
                <div className="text-9xl text-center font-semibold h-24 overflow-hidden">
                    Selected <span className="bg-foreground px-1"><span className="relative -left-5 text-background italic">Works</span></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                    <div className="w-full aspect-square bg-muted-foreground rounded"></div>
                    <div className="w-full aspect-square bg-muted-foreground rounded"></div>
                    <div className="w-full aspect-square bg-muted-foreground rounded"></div>
                    <div className="w-full aspect-square bg-muted-foreground rounded"></div>
                    <div className="w-full aspect-square bg-muted-foreground rounded"></div>
                    <div className="w-full aspect-square bg-muted-foreground rounded"></div>
                </div>
            </div>

            <Link href="https://github.com/mozarist" target="_blank" rel="noopener noreferrer">
                <Button variant="link">View More of My Works <ArrowRight /></Button>
            </Link>
        </section>
    )
}
