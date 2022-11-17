import { TodoItemType } from "features/types"

export type TodoFormValues = Pick<TodoItemType, "body" | "title">
