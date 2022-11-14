import { FormEvent, useState } from "react"
import { useAppDispath, useAppSelector } from "store/hooks"
import { todoTitleSelector } from "features/selectors"
import { setTodoTitle, setItem } from "features/todoSlice"
import BorderButton from "UI/BorderButton"
import FillButton from "UI/FillButton"
import TextInput from "UI/TextInput"
import { InputError, InputEvent } from "UI/TextInput/types"

const AddPanel = () => {
  const [error, setError] = useState<InputError>(null)
  const dispatch = useAppDispath()
  const todoTitle = useAppSelector(todoTitleSelector)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todoTitle.length === 0) {
      setError("Required")
      return
    }

    dispatch(
      setItem({
        id: `${Date.now()}`,
        title: todoTitle,
        done: false,
        important: false,
        category: "home",
      })
    )
    dispatch(setTodoTitle(""))
  }

  const todoTitleHandler = (e: InputEvent) => {
    if (todoTitle.length > 0) {
      setError(null)
    }
    dispatch(setTodoTitle(e.target.value))
  }

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        value={todoTitle}
        onChange={todoTitleHandler}
        label="Inter you task"
        error={error}
      />
      <FillButton type="submit">Add</FillButton>
      <BorderButton kind="warn" type="button">
        Clear all
      </BorderButton>
    </form>
  )
}

export default AddPanel
