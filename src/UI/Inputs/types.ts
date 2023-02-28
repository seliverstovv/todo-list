import { TextareaHTMLAttributes, InputHTMLAttributes, ReactNode } from "react"

export type BaseInputProps = {
    label: string
    value: string
    error?: string
    className?: string
}

export type TextInputProps = BaseInputProps &
    InputHTMLAttributes<HTMLInputElement> & {
        icon?: ReactNode
        withError?: boolean
    }

export type TextAreaProps = BaseInputProps &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        maxLength?: number
    }
