import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/bytesize-github";
import { LinkedinIcon } from "../icons/devicon-plain-linkedin";
import { InstagramIcon } from "../icons/fa-brands-instagram";
import { DiscordFillIcon } from "../icons/ri-discord-fill";
import { Button } from "../ui/button";

export default function ContactSection() {
    return (
        <div id="contact" className="relative flex flex-col gap-6 items-center justify-center min-h-screen">
            <div className="space-y-4 z-1">
                <h2 className="text-8xl text-center font-semibold">
                    Why not say <span className="bg-blue-500 px-12 text-7xl text-white rounded-full rounded-br-none">Hi!</span>? <br /> lets work together!
                </h2>

                <p className="text-xl text-muted-foreground text-center font-medium">
                    Whether you have a project, a question, or just want to connect, I'd love to hear from you.
                </p>
            </div>

            <div className="flex justify-center items-center gap-2 z-1">
                <Button size="lg">
                    <Mail /> azzammozarist@gmail.com
                </Button>
                <Button size="lg" variant="outline">
                    <GithubIcon /> GitHub
                </Button>
                <Button size="lg" variant="outline">
                    <LinkedinIcon /> LinkedIn
                </Button>
                <Button size="lg" variant="outline">
                    <InstagramIcon /> Instagram
                </Button>
                <Button size="lg" variant="outline">
                    <DiscordFillIcon /> Discord
                </Button>
            </div>
        </div>
    )
}
