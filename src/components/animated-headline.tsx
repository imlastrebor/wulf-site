"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface AnimatedHeadlineProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function AnimatedHeadline({ text, className = "", style }: AnimatedHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.char')
    
    // Set initial state
    gsap.set(chars, { y: 100, opacity: 0 })

    // Create stagger animation
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      delay: 0.2
    })
  }, [])

  // Split text into words and characters
  const words = text.split(' ')
  
  return (
    <div ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => (
        <div 
          key={wordIndex} 
          className="inline-block overflow-hidden mr-4 last:mr-0"
          style={{ height: '1.2em' }}
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block"
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
