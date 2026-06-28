import { Circle } from "lucide-react";
import { Badge } from "../ui/badge";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full h-16 p-5 flex items-center justify-between z-999">
      <span className="flex-1 text-2xl font-semibold text-foreground">Mozarist</span>
      <div className="relative flex-1 flex items-center justify-center gap-4 text-lg font-medium w-full mix-blend-difference">
        <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Projects</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">About me</a>
        <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Badge variant={"link"} className="gap-1.5 text-base font-semibold">
          <Circle className="text-success fill-success" />
          Available for freelance
          </Badge>
      </div>
    </nav>
  )
}
