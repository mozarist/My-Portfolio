import React from 'react'
    
export default function NavBar() {
  return    (
    <nav className="sticky top-0 w-full flex items-center justify-between">
      <span className="text-3xl font-medium text-foreground">Mozarist</span>
      <div className="space-x-4">
        <a href="#" className="text-muted hover:text-foreground text-xl">Home</a>
        <a href="#" className="text-muted hover:text-foreground text-xl">Projects</a>
        <a href="#" className="text-muted hover:text-foreground text-xl">About me</a>
        <a href="#" className="text-muted hover:text-foreground text-xl">Contact</a>
      </div>
    </nav>
  )
}
