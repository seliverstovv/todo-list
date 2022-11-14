import { ButtonHTMLAttributes } from "react"

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: <T>(param: T) => void
  size?: "small" | "mid" | "large"
  direction?: "row" | "column"
  className?: string
  qwerty?: number
}
