import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "webpage-theme"

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      console.error("Failed to save theme to localStorage")
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggleTheme }
}
