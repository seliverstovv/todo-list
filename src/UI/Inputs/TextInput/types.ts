import { InputHTMLAttributes, ReactNode } from "react"

export type InputError = string | null

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  value: string
  icon?: ReactNode
  className?: string
  error?: InputError
}
