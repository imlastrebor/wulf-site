"use client"

import { Button } from "@/components/ui/button"
import { AnimatedHeadline } from "@/components/animated-headline"
import { useEffect } from "react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // Initialize Unicorn Studio only on client side
    if (typeof window !== 'undefined' && !window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false }
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js"
      script.onload = function() {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-end">
      {/* Background div for future interactive/visual elements */}
      <div 
        id="hero-background" 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
      >
        <div 
          data-us-project="0d79UetuDBrMG0fMuoSE" 
          style={{width: '100%', height: '100%'}}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="max-w-4xl">
          <AnimatedHeadline 
            text="Simplify Invoicing. Recover Debts Faster."
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            style={{ lineHeight: 0.9 }}
          />
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Wulf helps businesses automate invoicing and recover unpaid debts with ease.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-3"
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}
