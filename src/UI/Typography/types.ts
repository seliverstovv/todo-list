import { ReactNode } from "react"

import { ThemeType } from "UI/_theme"

type FontSizes = keyof ThemeType["fonts"]["sizes"]
type FontColors = keyof ThemeType["fonts"]["colors"]

export interface TypographyProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
    children?: ReactNode
    size?: FontSizes
    color?: FontColors
    className?: string
}
