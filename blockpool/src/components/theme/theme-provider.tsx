"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "dark" | "light" | "blue" | "green" | "purple" | "orange" | "red" | "neutral" | "system"
type Font = "inter" | "poppins" | "roboto" | "playfair" | "space-grotesk"
type Background = "default" | "gradient" | "dots" | "grid" | "waves"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultFont?: Font
  defaultBackground?: Background
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  font: Font
  background: Background
  setTheme: (theme: Theme) => void
  setFont: (font: Font) => void
  setBackground: (background: Background) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  font: "inter",
  background: "default",
  setTheme: () => null,
  setFont: () => null,
  setBackground: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultFont = "inter",
  defaultBackground = "default",
  storageKey = "chainsupply-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [font, setFont] = useState<Font>(defaultFont)
  const [background, setBackground] = useState<Background>(defaultBackground)

  // Debounced theme application to prevent resize loops
  const applyTheme = useCallback((currentTheme: Theme, currentFont: Font, currentBackground: Background) => {
    requestAnimationFrame(() => {
      const root = window.document.documentElement
      const body = window.document.body

      // Remove all theme classes
      root.classList.remove("light", "dark", "blue", "green", "purple", "orange", "red", "neutral")
      body.classList.remove("light", "dark", "blue", "green", "purple", "orange", "red", "neutral")

      // Remove all font classes
      root.classList.remove("font-inter", "font-poppins", "font-roboto", "font-playfair", "font-space-grotesk")
      body.classList.remove("font-inter", "font-poppins", "font-roboto", "font-playfair", "font-space-grotesk")

      // Remove all background classes
      root.classList.remove("bg-default", "bg-gradient", "bg-dots", "bg-grid", "bg-waves")
      body.classList.remove("bg-default", "bg-gradient", "bg-dots", "bg-grid", "bg-waves")

      let resolvedTheme = currentTheme
      if (currentTheme === "system") {
        resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      }

      // Add theme classes
      root.classList.add(resolvedTheme)
      body.classList.add(resolvedTheme)

      // Add font class
      root.classList.add(`font-${currentFont}`)
      body.classList.add(`font-${currentFont}`)

      // Add background class
      root.classList.add(`bg-${currentBackground}`)
      body.classList.add(`bg-${currentBackground}`)
    })
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem(`${storageKey}-color`) as Theme | null
    const savedFont = localStorage.getItem(`${storageKey}-font`) as Font | null
    const savedBackground = localStorage.getItem(`${storageKey}-background`) as Background | null

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (defaultTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme as Theme)
    }

    if (savedFont) {
      setFont(savedFont)
    }

    if (savedBackground) {
      setBackground(savedBackground)
    }
  }, [defaultTheme, defaultFont, defaultBackground, storageKey])

  useEffect(() => {
    applyTheme(theme, font, background)
  }, [theme, font, background, applyTheme])

  const value = {
    theme,
    font,
    background,
    setTheme: (theme: Theme) => {
      localStorage.setItem(`${storageKey}-color`, theme)
      setTheme(theme)
    },
    setFont: (font: Font) => {
      localStorage.setItem(`${storageKey}-font`, font)
      setFont(font)
    },
    setBackground: (background: Background) => {
      localStorage.setItem(`${storageKey}-background`, background)
      setBackground(background)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
