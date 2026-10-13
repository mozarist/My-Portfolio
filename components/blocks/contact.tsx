import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/bytesize-github";
import { LinkedinIcon } from "../icons/devicon-plain-linkedin";
import { InstagramIcon } from "../icons/fa-brands-instagram";
import { Button } from "../ui/button";

export default function ContactSection() {
    return (
        <div id="contact" className="relative flex flex-col justify-center items-center gap-6 min-h-82">
            <div className="text-center space-y-2">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium font-heading">
                    Let's Collaborate!
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance leading-tight">
                    Whether you have a project in mind, need assistance with your website, or just want to say hello, feel free to reach out. Let's create something great together!
                </p>
            </div>

            <div className="flex items-center justify-center gap-2 w-full">
                <Button size="lg" variant="outline" onClick={() => window.open("mailto:azzammozarist@gmail.com", "_blank")}>
                    <Mail /> azzammozarist@gmail.com
                </Button>
                <Button size="icon-lg" variant="outline" onClick={() => window.open("https://github.com/mozarist", "_blank")}>
                    <GithubIcon />
                </Button>
                <Button size="icon-lg" variant="outline" onClick={() => window.open("https://www.linkedin.com/in/azzam-mozarist-b83a82406/", "_blank")}>
                    <LinkedinIcon />
                </Button>
                <Button size="icon-lg" variant="outline" onClick={() => window.open("https://www.instagram.com/mozarist.dev", "_blank")}>
                    <InstagramIcon />
                </Button>
            </div>
        </div>
    )
}
