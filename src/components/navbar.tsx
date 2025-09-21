"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Wulf</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Hero
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        {/* CTA Button and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex"
          >
            Contact
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
