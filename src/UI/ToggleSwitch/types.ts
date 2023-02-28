import { InputHTMLAttributes, ReactNode } from "react"

export type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode
    withError?: boolean
}
