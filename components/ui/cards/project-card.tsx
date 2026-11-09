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
        <Link href={projectUrl || "#"} target="_blank" rel="noopener noreferrer" className="w-full h-full pb-8">
            <div className="group grid gap-8 w-full h-full break-inside-avoid" onClick={() => window.open(projectUrl, "_blank")}>
                <div className="relative bg-muted w-full h-fit aspect-4/3 p-8 sm:p-12 flex items-center justify-center rounded-xl border overflow-hidden">
                    <Image
                        src={imageSrc || ""}
                        alt="Project Image"
                        width={500}
                        height={300}
                        className="w-full h-3/4 object-top object-cover -rotate-2 group-hover:-rotate-1 group-hover:scale-102 rounded-lg md:rounded-xl shadow-xl transition-all duration-300 ease-in-out"
                    />
                    {badgeText && (
                        <Badge className='absolute top-3 left-3' variant={badgeVariant}>{badgeText}</Badge>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <CardTitle className='text-xl h-fit'>{title || "Project Title"}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </div>
            </div>
        </Link>
    )
}
