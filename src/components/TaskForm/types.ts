import { TodoItemType } from "features/todo/types"

export type TodoFormValues = Pick<TodoItemType, "body" | "title">

export type TaskFormProps = {
    className?: string
}
