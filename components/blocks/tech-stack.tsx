import { Badge } from "@/components/ui/badge";

const iconLabels: Record<string, string> = {
    html: "HTML5",
    css: "CSS3",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    postgresql: "PostgreSQL",
    supabase: "Supabase",
    neon: "Neon",
    mysql: "MySQL",
    sqlite: "SQLite",
    laravel: "Laravel",
    nextjs: "Next.js",
    tanstack: "TanStack Start",
    reactjs: "React.js",
    reactnative: "React Native",
    expo: "Expo",
    androidstudio: "Android Studio",
    tailwindcss: "Tailwind CSS",
    bootstrap: "Bootstrap",
    shadcnui: "shadcn/ui",
    alpinejs: "Alpine.js",
    git: "Git",
    github: "GitHub",
    githubcopilot: "GitHub Copilot",
    opencode: "OpenCode",
    nodejs: "Node.js",
    vite: "Vite",
    visualstudiocode: "VS Code",
    postman: "Postman",
    figma: "Figma",
    canva: "Canva",
    wordpress: "WordPress",
    framer: "Framer",
    vercel: "Vercel",
    netlify: "Netlify",
};

type TechCategory = {
    title: string;
    description: string;
    items: string[];
};

const techCategories: TechCategory[] = [
    {
        title: "Frontend & UI",
        description: "Responsive interfaces built with modern, accessible components.",
        items: [
            "html", "css", "javascript", "typescript", "reactjs", "nextjs", "tanstack",
            "tailwindcss", "bootstrap", "shadcnui", "alpinejs", "framer" , "wordpress",
        ],
    },
    {
        title: "Backend & Database",
        description: "APIs, server-side logic, and dependable data storage.",
        items: ["php", "laravel", "nodejs", "postgresql", "mysql", "sqlite", "supabase", "neon"],
    },
    {
        title: "Mobile Development",
        description: "Cross-platform apps that feel native on every device.",
        items: ["reactnative", "expo", "androidstudio"],
    },
    {
        title: "Tools & Workflow",
        description: "The tooling I use to design, build, and ship faster.",
        items: ["git", "github", "githubcopilot", "opencode", "visualstudiocode", "postman", "vite", "figma", "canva", "vercel", "netlify"],
    },
];

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="relative flex flex-col gap-4 scroll-mt-24 pb-8 border-b-2 border-dashed">
            <div className="flex flex-col gap-1">
                <h2 className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-heading">
                    Technologies I Used
                </h2>
            </div>

            <div className="flex flex-col divide-y divide-border">
                {techCategories.map((category) => (
                    <div
                        key={category.title}
                        className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:gap-x-6"
                    >
                        <div className="flex-1 w-full">
                            <h3 className="text-base font-medium sm:pt-0.5">
                                {category.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {category.description}
                            </p>
                        </div>

                        <div className="flex-2 flex flex-wrap content-start gap-2 sm:col-start-2 lg:col-start-3 lg:row-start-1">
                            {category.items.map((icon) => (
                                <TechBadge key={icon} name={icon} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function TechBadge({ name }: { name: string }) {
    const label = iconLabels[name] || name;

    return (
        <Badge
            variant="outline"
            className="h-8 gap-1.5 rounded-full bg-card px-3 text-sm shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
        >
            <img
                src={`https://skills.syvixor.com/api/icons?i=${name}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="size-4 shrink-0 object-contain"
            />
            {label}
        </Badge>
    );
}
