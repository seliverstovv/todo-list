export type CategoryTypes = "home" | "work" | "study"

export type TodoItemType = {
  id: string
  title: string
  done: boolean
  important: boolean
  category: CategoryTypes
}

export type UpdatedKeysType = Pick<TodoItemType, "done" | "important">

export type FilterTypes = "all" | "important" | "done"

export type TodoStateType = {
  todoItems: TodoItemType[]
  todoTitle: string
  searchValue: string
  filterType: FilterTypes
}
