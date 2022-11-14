import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterTypes, TodoItemType, TodoStateType, UpdatedKeysType } from "./types"

const initialState: TodoStateType = {
  todoItems: [],
  todoTitle: "",
  searchValue: "",
  filterType: "all",
}

type ToggleBooleanAction = PayloadAction<{ id: string; key: keyof UpdatedKeysType }>

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

    toggleBooleanField(state, { payload }: ToggleBooleanAction) {
      const { id, key } = payload
      const index = state.todoItems.findIndex((item) => item.id === id)
      const oldState = state.todoItems[index][key]
      state.todoItems[index][key] = !oldState
    },

    setTodoTitle(state, { payload }: PayloadAction<string>) {
      state.todoTitle = payload
    },

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload
    },

    setFilterType(state, { payload }: PayloadAction<FilterTypes>) {
      state.filterType = payload
    },
  },
})

export const {
  setItem,
  toggleBooleanField,
  removeItem,
  setTodoTitle,
  setSearchValue,
  setFilterType,
} = todoSlice.actions

export default todoSlice.reducer
