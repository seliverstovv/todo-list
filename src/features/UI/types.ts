export type ThemesType = "dark" | "light"

export type UIStateType = {
  theme: ThemesType
  modals: {
    isVisibleTaskForm: boolean
    isVisibleRemoveAll: boolean
  }
}
