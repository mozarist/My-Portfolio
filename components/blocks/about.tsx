import { Button } from "../ui/button";
import { FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative flex flex-col gap-5 scroll-mt-24 pb-8 border-b-2 border-dashed">
      <div className="space-y-2 text-sm sm:text-base md:text-lg font-medium text-muted-foreground leading-tight">
        <h2 className="text-foreground font-semibold">
          Hi, I'm Ahmad Azzam Mozarist! 👋
        </h2>

        <p>
          I'm a passionate full stack web developer and UI/UX designer based in Indonesia. Currently studying Software Engineering at <a href="https://smkpesat.sch.id" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/85">SMK Informatika Pesat</a>. I specialize in creating seamless websites that combine aesthetic appeal with functional excellence.
        </p>

        <p>
          I build websites where design and development meet beautifully, focusing on the fine details from typography to motion that make digital experiences memorable. Outside of coding, I'm constantly refining my workflow to create products people love using.
        </p>

        <p>
          I'm currently open to freelance opportunities and internships. Let's connect and build something great together!
        </p>
      </div>

      <Button variant="link" size="sm" onClick={() => window.open('https://drive.google.com/file/d/1Fv_G0vHwNjlshrT9HurqIMqdXfoCskm-/view?usp=sharing', '_blank')} className="px-0 w-fit">
        <FileText />
        View My Resume
      </Button>
    </section>
  );
}