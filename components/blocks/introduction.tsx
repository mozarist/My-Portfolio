import Image from "next/image";
import CurvedLoop from "../ui/CurvedLoop";

export default function IntroductionSection() {
    return (
        <div className="relative flex flex-col justify-center items-center gap-24 -top-36 text-center">
             
            <div className="flex items-center -space-x-56">
                <div className="relative w-64 h-82 -rotate-6 z-2 border-4 border-primary-foreground overflow-hidden">
                    <Image
                        src="/Azzam-Solo-Photoshoot.jpg"
                        alt="Mozarist's Picture"
                        fill={true}
                        preload={true}
                        className="object-cover"
                    />
                </div>
                <div className="relative top-6 w-64 h-82 rotate-2 z-1 border-4 border-primary-foreground overflow-hidden">
                    <Image
                        src="/Azzam-Photoshoot.jpg"
                        alt="Mozarist's Picture"
                        fill={true}
                        preload={true}
                        className="object-cover"
                    />
                </div>
                <div className="relative top-12 w-64 h-82 rotate-8 z-0 border-4 border-primary-foreground overflow-hidden">
                    <Image
                        src="/Azzam-Juara1.jpg"
                        alt="Mozarist's Picture"
                        fill={true}
                        preload={true}
                        className="object-cover"
                    />
                </div>
            </div>

            <p className="text-4xl font-medium">
                I enjoy building websites that look good and feel great to use. I pay close attention to the little details, from spacing and motion to how an interface feels, because they're often what make a website feel right.
            </p>
        </div>
    )
}
