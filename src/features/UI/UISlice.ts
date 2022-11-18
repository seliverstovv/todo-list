import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UIStateType } from "./types"

const initialState: UIStateType = {
  modals: {
    isVisibleTaskForm: false,
    isVisibleRemoveAll: false,
  },
}

type ToggleVisibleModalAction = PayloadAction<keyof UIStateType["modals"]>

const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    toggleVisibleModal(state, { payload }: ToggleVisibleModalAction) {
      const oldState = state.modals[payload]
      state.modals[payload] = !oldState
    },
  },
})

export const { toggleVisibleModal } = UISlice.actions

export default UISlice.reducer
