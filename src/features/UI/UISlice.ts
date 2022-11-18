import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThemesType, UIStateType } from "./types"

const initialState: UIStateType = {
  theme: "dark",
  modals: {
    isVisibleTaskForm: false,
    isVisibleRemoveAll: false,
  },
}

type ModalAction = PayloadAction<keyof UIStateType["modals"]>

const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    openModal(state, { payload }: ModalAction) {
      state.modals[payload] = true
    },

    closeModal(state, { payload }: ModalAction) {
      state.modals[payload] = false
    },

    setTheme(state, { payload }: PayloadAction<ThemesType>) {
      state.theme = payload
    },
  },
})

export const { openModal, closeModal, setTheme } = UISlice.actions

export default UISlice.reducer
