import { TextareaHTMLAttributes } from "react"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  value: string
  className?: string
}
