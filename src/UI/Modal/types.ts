import { ReactNode } from "react"

export type ModalProps = {
    isOpened: boolean
    onClose: () => void
    children: ReactNode
    className?: string
}
