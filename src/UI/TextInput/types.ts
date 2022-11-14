import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react"

export type InputEvent = ChangeEvent<HTMLInputElement>
export type InputChangeHandler = (event: InputEvent) => void
export type InputError = string | null

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  value: string
  icon?: ReactNode
  className?: string
  onChange: InputChangeHandler
  error?: InputError
}
