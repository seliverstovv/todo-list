import { ReactNode } from "react"

import { ThemeType } from "theme"

type FontSizes = keyof ThemeType["fontSizes"]

export interface TypographyProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  children?: ReactNode
  size?: FontSizes
  className?: string
}
