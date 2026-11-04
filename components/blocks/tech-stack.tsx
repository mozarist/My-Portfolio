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

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="relative flex flex-col gap-4 scroll-mt-24 pb-8 border-b border-dashed">

            <div className="relative w-full rounded-xl overflow-hidden">
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
                        "relative flex w-14 aspect-square items-center justify-center cursor-pointer overflow-hidden rounded-lg sm:grayscale-50 hover:grayscale-0 sm:saturate-75 hover:saturate-100 transition-all duration-200"
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