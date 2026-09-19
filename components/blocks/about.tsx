import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative flex flex-col justify-center items-center gap-3 scroll-mt-24">
      <div className="flex justify-between gap-6 w-full">
        <div className="hidden md:block flex-1 w-full h-fit bg-card rounded overflow-hidden">
          <Image
            src="/Azzam-Solo-Photoshoot.jpg"
            alt="Mozarist's Picture"
            width={500}
            height={500}
            preload={true}
            className="w-full aspect-square object-center object-cover" />
        </div>

        <div className="flex-6 flex flex-col gap-4">
          <div className="space-y-1.5 text-lg font-medium leading-tight">
            <p>
            Hi, I'm Ahmad Azzam Mozarist, a passionate full stack web developer and UI/UX designer based in Indonesia. Currently studying Software Engineering at <a href="https://smkpesat.sch.id" className="underline hover:text-foreground/85">SMK Informatika Pesat</a>. I specialize in creating seamless websites that combine aesthetic appeal with functional excellence.
          </p>

          <p>
            I build websites where design and development meet beautifully, focusing on the fine details from typography to motion that make digital experiences memorable. Outside of coding, I'm constantly refining my workflow to create products people love using.
          </p>

          <p>
            I'm currently open to freelance opportunities and internships. Let's connect and build something great together!
          </p>
          </div>

          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              View My Resume
              <FileText />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
