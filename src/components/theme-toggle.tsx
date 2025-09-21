"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check if dark class is present on html element
    const htmlElement = document.documentElement
    setIsDark(htmlElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const htmlElement = document.documentElement
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark')
      setIsDark(false)
    } else {
      htmlElement.classList.add('dark')
      setIsDark(true)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
