/** @jsxImportSource @emotion/react */
import { ChangeEvent, FormEvent, useState } from "react"
import { useAppDispath, useAppSelector } from "store/hooks"
import { todoTitleSelector, isVisibleAddTaskSelector, todoDescriptionSelector } from "features/selectors"
import {
  setTodoTitle,
  setItem,
  toggleVisibleModal,
  setFilterType,
  setTodoDescription,
} from "features/todoSlice"
import Modal from "UI/Modal/Modal"
import FillButton from "UI/Buttons/FillButton"
import TextInput from "UI/Inputs/TextInput"
import { InputError } from "UI/Inputs/TextInput/types"
import Textarea from "UI/Inputs/Textarea"
import Paper from "UI/Paper"
import { css } from "@emotion/react"

const TaskForm = () => {
  const [error, setError] = useState<InputError>(null)
  const dispatch = useAppDispath()
  const isVisibleAddTask = useAppSelector(isVisibleAddTaskSelector)
  const todoTitle = useAppSelector(todoTitleSelector)
  const todoDescription = useAppSelector(todoDescriptionSelector)

  const visibleModalHandler = () => {
    dispatch(toggleVisibleModal("isVisibleAddTask"))
  }

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
    visibleModalHandler()
    dispatch(setFilterType("all"))
  }

  const todoTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (todoTitle.length > 0) {
      setError(null)
    }
    dispatch(setTodoTitle(e.target.value))
  }

  const todoDescriptionHandler = (
    e: ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setTodoDescription(e.target.value))
  }

  return (
    <Modal
      isOpened={isVisibleAddTask}
      onClose={visibleModalHandler}
      css={css`
        width: 100%;
        padding: 10rem;
      `}
    >
      <Paper
        css={css`
          width: 100%;
        `}
      >
        <form onSubmit={submitHandler}>
          <TextInput
            value={todoTitle}
            onChange={todoTitleHandler}
            label="Title"
            error={error}
            css={css`
              margin-bottom: 2.4rem;
            `}
          />
          <Textarea
            label="Description"
            value={todoDescription}
            onChange={todoDescriptionHandler}
            css={css`
              margin-bottom: 2.4rem;
            `}
            rows={10}
          />
          <FillButton type="submit">Add</FillButton>
        </form>
      </Paper>
    </Modal>
  )
}

export default TaskForm
