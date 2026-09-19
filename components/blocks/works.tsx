import { FolderOpen } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCard from "../ui/cards/project-card";

export default function SelectedWorksSection() {
    return (
        <section id="works" className="flex flex-col items-center justify-center gap-6 scroll-mt-24">
            <div className="space-y-2 w-full">
                <div className="flex justify-between items-center gap-4">
                    <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold overflow-hidden">
                        Selected Works
                    </div>

                    <Link href="https://github.com/mozarist" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                            View More of My Works
                            <FolderOpen />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-2 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageUrl}
                            projectUrl={project.projectUrl}
                            badgeText={project.badgeText}
                            badgeVariant={project.badgeVariant}
                            categories={project.categories}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

type BadgeVariant =
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";

const projects: Array<{
    title?: string;
    description?: string;
    imageUrl?: string;
    projectUrl?: string;
    badgeText?: string;
    badgeVariant?: BadgeVariant;
    categories?: string[];
}> = [
        {
            title: "Suasana",
            description: "A web platform designed to boost the visibility of Indonesia's hidden ecotourism and cultural destinations through interactive digital experiences.",
            imageUrl: "/suasana-preview1.png",
            projectUrl: "https://github.com/mozarist/suasana-exploration-app",
            badgeText: "Award Winning Web",
            badgeVariant: "destructive",
            categories: ["Web Development", "TanStack Start"]
        },
        {
            title: "CleanLab",
            description: "A cross-platform laundry management system featuring real-time tracking, seamless transactions, and automated order handling for admins and customers.",
            imageUrl: "/cleanlab-preview1.png",
            projectUrl: "https://github.com/mozarist/cleanlab",
            categories: ["Web & Mobile Development", "Laravel", "React Native (Expo)"]
        },
        {
            title: "StudentVoice",
            description: "A social mobile platform empowering students to share school-related content and voice their opinions within a dedicated community.",
            imageUrl: "/studentvoice-preview.png",
            projectUrl: "https://github.com/mozarist/StudentVoice",
            categories: ["Mobile Development", "React Native Expo"]
        },
        {
            title: "Mora",
            description: "A Smart School platform for monitoring student character development and behavior through a point system and data-driven reporting.",
            imageUrl: "/mora-preview.png",
            projectUrl: "https://github.com/mozarist/Mora",
            categories: ["Web Development", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "TeSate",
            description: "A mobile food ordering app streamlining online satay selection, customized orders, and checkout.",
            imageUrl: "/tesate-preview1.png",
            projectUrl: "https://github.com/mozarist/TeSate",
            categories: ["Mobile Development", "React Native Expo"]
        },
        {
            title: "ScholarSys",
            description: "An academic administration platform engineered to digitize student record management and streamline school workflows.",
            imageUrl: "/scholarsys-preview1.png",
            projectUrl: "https://github.com/mozarist/ScholarSys",
            categories: ["Web Development", "Laravel"]
        },
    ]