/** @jsxImportSource @emotion/react */
import { Form, Field } from "react-final-form"
import { useAppDispath, useAppSelector } from "store/hooks"
import { isVisibleTaskFormSelector, editableTaskSelector } from "features/selectors"
import { setItem, toggleVisibleModal, setFilterType, setEditableTask } from "features/todoSlice"
import Modal from "UI/Modal/Modal"
import FillButton from "UI/Buttons/FillButton"
import TextInput from "UI/Inputs/TextInput"
import Textarea from "UI/Inputs/Textarea"
import Paper from "UI/Paper"
import { css } from "@emotion/react"
import { TodoFormValues } from "./types"
import validate, { DESCRIPTION_MAX_LENGTH } from "./validate"

const TaskForm = () => {
  const dispatch = useAppDispath()
  const isVisibleTaskForm = useAppSelector(isVisibleTaskFormSelector)
  const editableTask = useAppSelector(editableTaskSelector)

  const getInitialValues = () => ({
    title: editableTask.title || "",
    body: editableTask.body || "",
  })

  const resetEditableTask = () => {
    if (editableTask.id) {
      dispatch(setEditableTask({ id: null, body: "", title: "" }))
    }
  }

  const visibleModalHandler = () => {
    dispatch(toggleVisibleModal("isVisibleTaskForm"))
    resetEditableTask()
  }

  const submitHandler = (values: TodoFormValues) => {
    dispatch(
      setItem({
        id: editableTask.id ? editableTask.id : Date.now(),
        // mockUserId
        userId: 1,
        title: values.title,
        body: values.body,
        done: false,
        important: false,
      })
    )
    visibleModalHandler()
    dispatch(setFilterType("all"))
    resetEditableTask()
  }

  return (
    <Modal
      isOpened={isVisibleTaskForm}
      onClose={visibleModalHandler}
      css={css`
        max-width: 500px;
        width: 100%;
      `}
    >
      <Paper
        css={css`
          width: 100%;
        `}
      >
        <Form
          initialValues={getInitialValues()}
          onSubmit={submitHandler}
          validate={(values) => validate(values, getInitialValues())}
          render={({ handleSubmit, hasValidationErrors }) => (
            <form>
              <Field<string> name="title">
                {({ input, meta }) => (
                  <TextInput
                    name={input.name}
                    label="Title"
                    value={input.value}
                    onChange={input.onChange}
                    error={meta.error && meta.modified && meta.error}
                    withError
                    css={css`
                      margin-bottom: 1.4rem;
                    `}
                  />
                )}
              </Field>
              <Field<string> name="body">
                {({ input, meta }) => (
                  <Textarea
                    name={input.name}
                    label="Description"
                    value={input.value}
                    onChange={input.onChange}
                    error={meta.error && meta.modified && meta.error}
                    maxLength={DESCRIPTION_MAX_LENGTH}
                    css={css`
                      margin-bottom: 2.4rem;
                    `}
                  />
                )}
              </Field>
              <div
                css={css`
                  display: flex;
                  button:first-of-type {
                    margin-right: 1.2rem;
                  }
                `}
              >
                <FillButton type="button" onClick={handleSubmit} disabled={hasValidationErrors}>
                  {editableTask.id ? "Save" : "Add"}
                </FillButton>
                <FillButton type="button" onClick={visibleModalHandler}>
                  Cancel
                </FillButton>
              </div>
            </form>
          )}
        />
      </Paper>
    </Modal>
  )
}

export default TaskForm
