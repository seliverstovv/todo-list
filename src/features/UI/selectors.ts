import { RootState } from "store"

export const themeSelector = ({ UIReducer }: RootState) => UIReducer.theme
export const isVisibleTaskFormSelector = ({ UIReducer }: RootState) => UIReducer.modals.isVisibleTaskForm
export const isVisibleRemoveAllSelector = ({ UIReducer }: RootState) =>
  UIReducer.modals.isVisibleRemoveAll
