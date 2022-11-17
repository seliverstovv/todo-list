import { ButtonHTMLAttributes, MouseEvent } from "react"

export type ButtonClickEventType = MouseEvent<HTMLButtonElement>

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: ButtonClickEventType) => void
  size?: "mini" | "small" | "mid" | "large"
  direction?: "row" | "column"
  className?: string
}
