import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconLabels: Record<string, string> = {
  html: "HTML5",
  css: "CSS3",
  javascript: "JavaScript",
  typescript: "TypeScript",
  php: "PHP",
  postgresql: "PostgreSQL",
  supabase: "Supabase",
  mysql: "MySQL",
  sqlite: "SQLite",
  laravel: "Laravel",
  nextjs: "Next.js",
  tanstack: "TanStack",
  reactjs: "React",
  reactnative: "React Native",
  expo: "Expo",
  tailwindcss: "Tailwind CSS",
  bootstrap: "Bootstrap",
  shadcnui: "shadcn/ui",
  alpinejs: "Alpine.js",
  lucide: "Lucide Icons",
  git: "Git",
  github: "GitHub",
  githubcopilot: "GitHub Copilot",
  nodejs: "Node.js",
  npm: "npm",
  vite: "Vite",
  visualstudiocode: "VS Code",
  figma: "Figma",
  wordpress: "WordPress",
  framer: "Framer",
  vercel: "Vercel",
  netlify: "Netlify",
};

export default function AboutSection() {
  return (
    <section id="about" className="relative flex flex-col justify-center items-center gap-10 scroll-mt-24">
      <div className="flex justify-between gap-6 w-full">
        <div className="hidden md:block flex-1 w-full h-fit bg-card rounded overflow-hidden">
          <Image
            src="/Azzam-Solo-Photoshoot.jpg"
            alt="Mozarist's Picture"
            width={500}
            height={500}
            preload={true}
            className="w-full aspect-square object-center object-cover"
          />
        </div>

        <div className="flex-6 flex flex-col gap-4">
          <div className="space-y-2 text-sm sm:text-base md:text-lg font-medium text-muted-foreground leading-tight">
            <h2 className="text-foreground font-semibold">
              Hi, I'm Ahmad Azzam Mozarist! 👋
            </h2>

            <p>
              I'm a passionate full stack web developer and UI/UX designer based in Indonesia. Currently studying Software Engineering at <a href="https://smkpesat.sch.id" className="underline hover:text-foreground/85">SMK Informatika Pesat</a>. I specialize in creating seamless websites that combine aesthetic appeal with functional excellence.
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
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="space-y-2">
          <Marquee pauseOnHover className="[--duration:40s] [--gap:0.5rem]">
            {firstRow.map((icon) => (
              <IconsCard key={icon} name={icon} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:0.5rem]">
            {secondRow.map((icon) => (
              <IconsCard key={icon} name={icon} />
            ))}
          </Marquee>
        </div>

        <div className="from-background via-transparent to-transparent pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background via-transparent to-transparent pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}

const iconsList = [
  "html", "css", "javascript", "typescript", "php", "postgresql", "mysql", "sqlite", "supabase",
  "laravel", "nextjs", "tanstack", "reactjs", "reactnative", "expo",
  "tailwindcss", "bootstrap", "shadcnui", "alpinejs", "lucide", "git",
  "github", "githubcopilot", "nodejs", "npm", "vite", "visualstudiocode",
  "figma", "wordpress", "framer", "vercel", "netlify"
];

const firstRow = iconsList.slice(0, Math.ceil(iconsList.length / 2));
const secondRow = iconsList.slice(Math.ceil(iconsList.length / 2));

const IconsCard = ({ name }: { name: string }) => {
  const label = iconLabels[name] || name;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <figure
          className={cn(
            "relative flex w-14 aspect-square items-center justify-center cursor-pointer overflow-hidden rounded-lg grayscale-50 hover:grayscale-0 saturate-75 hover:saturate-100 transition-all duration-200"
          )}
        >
          <img
            src={`https://skills.syvixor.com/api/icons?i=${name}`}
            alt={label}
            className="h-full w-full object-contain"
          />
        </figure>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs font-medium">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};