"use client"

import Link from 'next/link';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../card'
import Image from 'next/image'
import { Badge } from '../badge';
import { ArrowRight } from 'lucide-react';

type BadgeVariant =
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";

type ProjectCardProps = {
    title?: string;
    description?: string;
    imageSrc?: string;
    projectUrl?: string;
    badgeText?: string;
    badgeVariant?: BadgeVariant;
    categories?: string[];
}

export default function ProjectCard({ title, description, imageSrc, projectUrl, badgeText, badgeVariant, categories }: ProjectCardProps) {
    return (
        <Link href={projectUrl || "#"} target="_blank" rel="noopener noreferrer" className="w-full h-full">
            <Card className="group w-full h-full pt-0" onClick={() => window.open(projectUrl, "_blank")}>
                <div className="relative bg-muted w-full h-52 md:h-64 lg:h-72 xl:h-86 overflow-hidden">
                    <Image
                        src={imageSrc || ""}
                        alt="Project Image"
                        width={500}
                        height={300}
                        className="absolute inset-12 w-full h-auto bg-background border-2 -rotate-4 group-hover:-rotate-2 group-hover:scale-105 rounded-xl transition-all duration-300 ease-in-out"
                    />
                    {badgeText && (
                        <Badge className='absolute top-3 left-3' variant={badgeVariant}>{badgeText}</Badge>
                    )}
                </div>

                <CardHeader>
                    <CardTitle className='text-xl'>{title || "Project Title"}</CardTitle>
                    <CardDescription className="line-clamp-2">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <p className="text-sm text-muted-foreground font-mono">
                        {categories?.join(" / ")}
                    </p>
                </CardFooter>
            </Card>
        </Link>
    )
}
