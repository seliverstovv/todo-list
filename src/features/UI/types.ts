import { PayloadAction } from "@reduxjs/toolkit"

export type ThemesType = "dark" | "light"

export type UIStateType = {
  theme: ThemesType
  modals: {
    isVisibleTaskForm: boolean
    isVisibleRemoveAll: boolean
  }
}

export type ModalAction = PayloadAction<keyof UIStateType["modals"]>