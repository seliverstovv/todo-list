import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ModalAction, ThemesType, UIStateType } from "./types"

const initialState: UIStateType = {
    theme: "dark",
    modal: null,
}

const UISlice = createSlice({
    name: "UISlice",
    initialState,
    reducers: {
        setModal(state, { payload }: ModalAction) {
            state.modal = payload
        },

        setTheme(state, { payload }: PayloadAction<ThemesType>) {
            state.theme = payload
        },
    },
})

export const { setModal, setTheme } = UISlice.actions

export default UISlice.reducer
