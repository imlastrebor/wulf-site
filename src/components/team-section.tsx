"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const teamMembers = [
  {
    name: "Aleksi Hokkanen",
    role: "Founder, Lawyer",
    image: "/images/aleksi-hokkanen.png"
  },
  {
    name: "Robert Salmi",
    role: "Founder, Business design",
    image: "/images/robert-salmi.png"
  }
]

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return

    // Set initial state
    gsap.set(cardsRef.current, { y: 100, opacity: 0 })

    // Create scroll trigger animation
    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Meet the Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              ref={el => {
                if (el) cardsRef.current[index] = el
              }}
              className="text-center"
            >
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} headshot`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
