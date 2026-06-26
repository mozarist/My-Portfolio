import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="w-full h-screen hero-container flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                        <p className="text-lg font-medium">Hi, I'm Mozarist!</p>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/mozarist.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>—</AvatarFallback>
                        </Avatar>
                        <p className="text-lg font-medium">Full-Stack Developer Based in Indonesia.</p>
                    </div>
                    <p className="text-6xl text-center text-primary font-bold max-w-4xl">
                        I build digital experiences that look good and work well.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Button size={"lg"}>View My Projects</Button>
                    <Button size={"lg"} variant={"outline"}>Get in Touch</Button>
                </div>
            </div>
        </div>
    )
}
