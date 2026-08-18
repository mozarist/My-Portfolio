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
            title: "StudentVoice",
            description: "A mobile and social media platform for students to make their voices heard and share school-related content.",
            imageUrl: "/studentvoice-preview.png",
            projectUrl: "https://github.com/mozarist/StudentVoice",
            categories: ["Mobile Development", "React Native Expo"]
        },
        {
            title: "CleanLab",
            description: "CleanLab is a web & mobile-based laundry management system that facilitates the management of transactions, payments, and real-time laundry status tracking for both administrators and customers.",
            imageUrl: "/cleanlab-preview1.png",
            projectUrl: "https://github.com/mozarist/cleanlab",
            categories: ["Web & Mobile Development", "Laravel", "React Native (Expo)"]
        },
        {
            title: "Mora",
            description: "A Smart School platform that helps schools manage student data and character development through a point system, behavior monitoring, and structured, data-driven reporting.",
            imageUrl: "/mora-preview.png",
            projectUrl: "https://github.com/mozarist/Mora",
            categories: ["Web Development", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "TeSate",
            description: "A mobile app for ordering satay that allows users to view the menu and place orders online.",
            imageUrl: "/tesate-preview1.png",
            projectUrl: "https://github.com/mozarist/TeSate",
            categories: ["Mobile Development", "React Native Expo"]
        },
        {
            title: "ScholarSys",
            description: "ScholarSys is a modern web application for managing student records within a school environment. The system is designed to make academic administration processes faster, more structured, and free from manual errors.",
            imageUrl: "/scholarsys-preview1.png",
            projectUrl: "https://github.com/mozarist/ScholarSys",
            categories: ["Web Development", "Laravel"]
        },
    ]