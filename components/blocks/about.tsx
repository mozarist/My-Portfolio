import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-3 scroll-mt-24">
      <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-6">
        <h2 className="flex-4 w-full h-full text-5xl font-semibold uppercase">
          More about <span className="italic">me</span>
        </h2>
        <Button>
          <FileText />
          Download CV
        </Button>
      </div>

      <div className="flex justify-between gap-6 w-full">
        <div className="flex-1 flex flex-col gap-6 items-center justify-center">
          <div className="w-full h-full bg-muted-foreground rounded overflow-hidden">
            <Image
              src="/Azzam-Solo-Photoshoot.jpg"
              alt="Mozarist's Picture"
              width={500}
              height={500}
              preload={true}
              className="w-full h-full aspect-square object-center object-cover" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex-1 flex flex-col gap-3">
            <div>
              <p className="text-lg text-muted-foreground font-medium uppercase">
                Full Name
              </p>
              <h4 className="text-xl font-semibold">
                Ahmad Azzam Mozarist
              </h4>
            </div>
            <div>
              <p className="text-lg text-muted-foreground font-medium uppercase">
                Location
              </p>
              <h4 className="text-xl font-semibold">
                Bogor, Indonesia.
              </h4>
            </div>
            <div>
              <p className="text-lg text-muted-foreground font-medium uppercase">
                Currently Pursuing
              </p>
              <h4 className="text-xl font-semibold">
                Software Engineering at Pesat Informatics High School
              </h4>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-xl text-justify font-medium leading-tight">
              I enjoy building websites where design and development support each other. I care about the little details—from typography and spacing to motion—because they're often what make an experience memorable.
              Outside of coding, I'm always exploring new ideas, refining my workflow, and learning better ways to build products that people genuinely enjoy using.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
