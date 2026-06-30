import { useEffect, useState } from "react"

import Container from "@/components/Container"
import ThemeToggle from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 4
      // Only re-render when the boolean flips, not on every scroll event.
      setScrolled((prev) => (prev === next ? prev : next))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b py-4.5 backdrop-blur-md backdrop-saturate-150 transition-colors",
        "bg-background/78",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <span
            className="size-2 animate-pulse-dot rounded-full bg-primary"
            aria-hidden="true"
          />
          Zoe Le
        </a>

        <nav className="flex items-center gap-7" aria-label="Primary">
          <a
            href="/projects"
            className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
          >
            projects
          </a>
          <a
            href="/about"
            className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
          >
            about
          </a>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  )
}
