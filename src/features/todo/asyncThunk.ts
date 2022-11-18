import { createAsyncThunk } from "@reduxjs/toolkit"
import fetcher from "utils/fetcher"
import { TodoItemType } from "./types"

const getTodos = async () => {
  return fetcher<TodoItemType[]>("posts?userId=1")
}

const getTodosThunk = createAsyncThunk<TodoItemType[]>("todos", async (_, { rejectWithValue }) => {
  try {
    return await getTodos()
  } catch (error) {
    return rejectWithValue(error)
  }
})

export default getTodosThunk
