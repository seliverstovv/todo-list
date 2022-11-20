import { Form, Field } from "react-final-form"
import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { editableTaskSelector } from "features/todo/selectors"
import { modalSelector } from "features/UI/selectors"
import { setModal } from "features/UI/UISlice"
import { setItem, editItem, setFilterType, setEditableTask } from "features/todo/todoSlice"
import Modal from "UI/Modal/Modal"
import ThemeButton from "UI/Buttons/ThemeButton"
import TextInput from "UI/Inputs/TextInput"
import Textarea from "UI/Inputs/Textarea"
import Paper from "UI/Paper"
import Typography from "UI/Typography"
import { TaskFormProps, TodoFormValues } from "./types"
import validate, { DESCRIPTION_MAX_LENGTH } from "./validate"
import styles from "./styles"

const TaskForm = ({ className }: TaskFormProps) => {
  const dispatch = useAppDispath()
  const modal = useAppSelector(modalSelector)
  const editableTask = useAppSelector(editableTaskSelector)

  const getInitialValues = () => ({
    title: editableTask.title || "",
    body: editableTask.body || "",
  })

  const resetEditableTask = () => {
    if (editableTask.id) {
      dispatch(setEditableTask(Object.create(null)))
    }
  }

  const closeModalHandler = () => {
    dispatch(setModal(null))
    resetEditableTask()
  }

  const submitHandler = (values: TodoFormValues) => {
    const result = {
      id: editableTask.id || Date.now(),
      // mockUserId
      userId: 1,
      title: values.title,
      body: values.body,
      done: editableTask.done,
      important: editableTask.important,
    }

    if (editableTask.id) {
      dispatch(editItem(result))
      resetEditableTask()
    } else {
      dispatch(setItem(result))
      dispatch(setFilterType("all"))
    }

    closeModalHandler()
  }

  return (
    <Modal isOpened={modal === "isVisibleTaskForm"} onClose={closeModalHandler} className={className}>
      <Paper className="paper">
        <Typography className="title" size="xxl">
          Add task
        </Typography>
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
                    className="text-input"
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
                    className="textarea"
                  />
                )}
              </Field>
              <div className="buttons">
                <ThemeButton
                  kind="fill"
                  type="button"
                  onClick={handleSubmit}
                  disabled={hasValidationErrors}
                >
                  {editableTask.id ? "Save" : "Add"}
                </ThemeButton>
                <ThemeButton kind="fill" type="button" onClick={closeModalHandler}>
                  Cancel
                </ThemeButton>
              </div>
            </form>
          )}
        />
      </Paper>
    </Modal>
  )
}

export default styled(TaskForm)`
  ${styles}
`
