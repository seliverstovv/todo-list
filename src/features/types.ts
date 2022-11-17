import { SerializedError } from "@reduxjs/toolkit"

export type ItemIdType = number

export type TodoItemType = {
  id: ItemIdType
  userId: number
  title: string
  body: string
  done?: boolean
  important?: boolean
}

export type UpdatedKeysType = Pick<TodoItemType, "done" | "important">

export type FilterTypes = "all" | "important" | "done"

export type AsyncError = SerializedError | null

export type EditableTaskType = {
  id: ItemIdType | null
  title: string
  body: string
}

export type TodoStateType = {
  todoItems: TodoItemType[]
  searchValue: string
  filterType: FilterTypes

  isLoading: boolean
  error: AsyncError

  isVisibleTaskForm: boolean
  isVisibleRemoveAll: boolean

  editableTask: EditableTaskType
}

export type VisibleModalKeysType = Pick<TodoStateType, "isVisibleTaskForm" | "isVisibleRemoveAll">
