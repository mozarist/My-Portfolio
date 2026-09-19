import Image from "next/image";
import { Button } from "../ui/button";
import { FolderOpen, Hand } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative h-[200vh]">
            <div className="sticky top-0 w-screen min-h-[60vh] sm:min-h-screen p-5 flex flex-col justify-center items-center overflow-hidden z-0">
                <div className="flex flex-col justify-center items-center gap-5 z-1">
                    <div className="space-y-5 max-w-4xl 2xl:max-w-5xl w-full">
                        <div className="block md:hidden w-14 sm:w-16 h-fit bg-card rounded overflow-hidden">
                            <Image
                                src="/Azzam-Solo-Photoshoot.jpg"
                                alt="Mozarist's Picture"
                                width={500}
                                height={500}
                                preload={true}
                                className="w-full aspect-square object-center object-cover" />
                        </div>

                        <p className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-left sm:text-center font-medium text-balance w-full">
                            I build seamless websites tailored for your needs.
                        </p>

                        <div className="flex items-center justify-start sm:justify-center gap-1 w-full">
                            <Button variant="default" size="sm" onClick={() => window.open('#works', '_self')}>
                                View My Works <FolderOpen />
                            </Button>

                            <Button variant="outline" size="sm" onClick={() => window.open('contact', "_self")}>
                                Let's Talk <Hand />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
