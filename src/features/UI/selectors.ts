import { RootState } from "store"

export const themeSelector = ({ UIReducer }: RootState) => UIReducer.theme
export const modalSelector = ({ UIReducer }: RootState) => UIReducer.modal
