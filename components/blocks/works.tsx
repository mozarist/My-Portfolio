import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCard from "../ui/cards/project-card";

export default function SelectedWorksSection() {
    return (
        <section id="works" className="flex flex-col items-center justify-center gap-6 scroll-mt-24">
            <div className="space-y-2 w-full">
                <div className="text-9xl text-center font-semibold h-24 overflow-hidden">
                    Selected <span className="bg-foreground px-1"><span className="relative -left-5 text-background italic">Works</span></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
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

            <Link href="https://github.com/mozarist" target="_blank" rel="noopener noreferrer">
                <Button variant="link">View More of My Works <ArrowRight /></Button>
            </Link>
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
            description: "Suasana exists as a digital bridge between the public and Indonesia's cultural and ecotourism riches. The platform takes an informative, visual, and participatory approach to boosting the visibility of lesser-known destinations.",
            imageUrl: "/suasana-preview1.png",
            projectUrl: "https://github.com/mozarist/suasana-exploration-app",
            badgeText: "Award Winning Web",
            badgeVariant: "destructive",
            categories: ["Web Development", "TanStack Start"]
        },
        {
            title: "TeSate",
            description: "A mobile app for ordering satay that allows users to view the menu and place orders online.",
            imageUrl: "/tesate-preview1.png",
            projectUrl: "https://github.com/mozarist/tesate",
            categories: ["Mobile Development", "React Native"]
        },
    ]