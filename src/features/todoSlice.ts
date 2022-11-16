import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterTypes, TodoItemType, TodoStateType, UpdatedKeysType, VisibleModalKeysType } from "./types"

const initialState: TodoStateType = {
  todoItems: [],
  todoTitle: "",
  todoDescription: "",
  searchValue: "",
  filterType: "all",

  isVisibleAddTask: false,
  isVisibleRemoveAll: false,
}

type ToggleBooleanAction = PayloadAction<{ id: string; key: keyof UpdatedKeysType }>
type ToggleVisibleModalAction = PayloadAction<keyof VisibleModalKeysType>

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setItem(state, { payload }: PayloadAction<TodoItemType>) {
      state.todoItems.push(payload)
    },

    removeItem(state, { payload }: PayloadAction<string>) {
      const prevState = state.todoItems
      state.todoItems = prevState.filter(({ id }) => id !== payload)
    },

    removeAll(state) {
      state.todoItems = []
    },

    toggleBooleanField(state, { payload }: ToggleBooleanAction) {
      const { id, key } = payload
      const index = state.todoItems.findIndex((item) => item.id === id)
      const oldState = state.todoItems[index][key]
      state.todoItems[index][key] = !oldState
    },

    setTodoTitle(state, { payload }: PayloadAction<string>) {
      state.todoTitle = payload
    },

    setTodoDescription(state, { payload }: PayloadAction<string>) {
      state.todoDescription = payload
    },

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload
    },

    setFilterType(state, { payload }: PayloadAction<FilterTypes>) {
      state.filterType = payload
    },

    toggleVisibleModal(state, { payload }: ToggleVisibleModalAction) {
      const oldState = state[payload]
      state[payload] = !oldState
    },
  },
})

export const {
  setItem,
  toggleBooleanField,
  removeItem,
  removeAll,
  setTodoTitle,
  setTodoDescription,
  setSearchValue,
  setFilterType,
  toggleVisibleModal,
} = todoSlice.actions

export default todoSlice.reducer
