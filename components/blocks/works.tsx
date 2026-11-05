import ProjectCard from "../ui/cards/project-card";

export default function SelectedWorksSection() {
    return (
        <section id="works" className="flex flex-col gap-4 scroll-mt-24 pb-8 border-b-2 border-dashed">
            <div className="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-heading overflow-hidden">
                Selected Works
            </div>

            <div className="grid gap-y-5 w-full">
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
            title: "ScholarSys",
            description: "An academic administration platform engineered to digitize student record management and streamline school workflows.",
            imageUrl: "/scholarsys-preview1.png",
            projectUrl: "https://github.com/mozarist/ScholarSys",
            categories: ["Web Development", "Laravel"]
        },
        {
            title: "View more on my GitHub",
            description: "Explore a wider range of my projects and contributions on my GitHub profile.",
            imageUrl: "/github-profile-repositories.png",
            projectUrl: "https://github.com/mozarist/?tab=repositories"
        },
    ]