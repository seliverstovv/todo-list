export type CategoryTypes = "home" | "work" | "study"

export type TodoItemType = {
  id: string
  title: string
  description?: string
  done: boolean
  important: boolean
  category: CategoryTypes
}

export type UpdatedKeysType = Pick<TodoItemType, "done" | "important">

export type FilterTypes = "all" | "important" | "done"

export type TodoStateType = {
  todoItems: TodoItemType[]
  todoTitle: string
  todoDescription: string
  searchValue: string
  filterType: FilterTypes

  isVisibleAddTask: boolean
  isVisibleRemoveAll: boolean
}

export type VisibleModalKeysType = Pick<TodoStateType, "isVisibleAddTask" | "isVisibleRemoveAll">
