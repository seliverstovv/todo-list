import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import getTodosThunk from "./asyncThunk"
import { FilterTypes, ItemIdType, TodoItemType, TodoStateType, UpdatedKeysType } from "./types"

const initialState: TodoStateType = {
  todoItems: [],
  searchValue: "",
  filterType: "all",

  editableTask: {},

  isLoading: false,
  error: null,
}

type ToggleBooleanAction = PayloadAction<{ id: ItemIdType; key: keyof UpdatedKeysType }>

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setItem(state, { payload }: PayloadAction<TodoItemType>) {
      state.todoItems.unshift(payload)
    },

    editItem(state, { payload }: PayloadAction<TodoItemType>) {
      const index = state.todoItems.findIndex((item) => item.id === payload.id)
      state.todoItems[index] = payload
    },

    removeItem(state, { payload }: PayloadAction<ItemIdType>) {
      const prevState = state.todoItems
      state.todoItems = prevState.filter(({ id }) => id !== payload)
    },

    removeAll(state) {
      state.todoItems = []
    },

    setEditableTask(state, { payload }: PayloadAction<TodoItemType>) {
      state.editableTask = payload
    },

    toggleBooleanField(state, { payload }: ToggleBooleanAction) {
      const { id, key } = payload
      const index = state.todoItems.findIndex((item) => item.id === id)
      const oldState = state.todoItems[index][key]
      state.todoItems[index][key] = !oldState
    },

    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload
    },

    setFilterType(state, { payload }: PayloadAction<FilterTypes>) {
      state.filterType = payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getTodosThunk.fulfilled, (state, action) => {
        state.todoItems = action.payload
        state.isLoading = false
      })
      .addCase(getTodosThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTodosThunk.rejected, (state, action) => {
        state.error = action.error
        state.isLoading = false
      }),
})

export const {
  setItem,
  editItem,
  toggleBooleanField,
  removeItem,
  removeAll,
  setEditableTask,
  setSearchValue,
  setFilterType,
} = todoSlice.actions

export default todoSlice.reducer
