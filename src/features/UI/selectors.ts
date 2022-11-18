import { RootState } from "store"

export const isVisibleTaskFormSelector = ({ UIReducer }: RootState) => UIReducer.modals.isVisibleTaskForm
export const isVisibleRemoveAllSelector = ({ UIReducer }: RootState) =>
  UIReducer.modals.isVisibleRemoveAll
