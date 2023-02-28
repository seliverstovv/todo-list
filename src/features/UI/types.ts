import { PayloadAction } from "@reduxjs/toolkit"

export type ThemesType = "dark" | "light"

export type Modals = "isVisibleTaskForm" | "isVisibleRemoveAll"

export type UIStateType = {
    theme: ThemesType
    modal: Modals | null
}

export type ModalAction = PayloadAction<UIStateType["modal"]>
