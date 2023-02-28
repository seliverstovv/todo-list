import { ButtonHTMLAttributes, MouseEvent } from "react"
import { ThemeType } from "UI/_theme"

export type ButtonClickEventType = MouseEvent<HTMLButtonElement>

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: (e: ButtonClickEventType) => void
    size?: "mini" | "small" | "mid" | "large"
    direction?: "row" | "column"
    kind?: keyof ThemeType["buttons"]
    isActive?: boolean
    isToggle?: boolean
}
