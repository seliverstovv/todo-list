import styled from "@emotion/styled"
import { useAppDispath } from "store/hooks"
import { toggleBooleanField, removeItem, setEditableTask } from "features/todo/todoSlice"
import { toggleVisibleModal } from "features/UI/UISlice"
import Typography from "UI/Typography"
import BorderButton from "UI/Buttons/BorderButton"
import { ReactComponent as DoneIcon } from "./icons/done.svg"
import { ReactComponent as ImportantIcon } from "./icons/important.svg"
import { ReactComponent as DeleteIcon } from "./icons/delete.svg"
import { TodoItemProps } from "./types"
import styles from "./styles"

const TodoItem = (props: TodoItemProps) => {
  const { id, title, body, done, important, className } = props
  const dispatch = useAppDispath()

  const onMarkDone = () => {
    dispatch(toggleBooleanField({ id, key: "done" }))
  }

  const onMarkImportant = () => {
    dispatch(toggleBooleanField({ id, key: "important" }))
  }

  const onDeleteItem = () => {
    dispatch(removeItem(id))
  }

  const setEditableHandler = () => {
    dispatch(setEditableTask(props))
    dispatch(toggleVisibleModal("isVisibleTaskForm"))
  }

  return (
    <li className={className}>
      <div className="header">
        <Typography className="title" size="xxl">
          {title}
        </Typography>
        <span className="buttons">
          <BorderButton size="mini" onClick={setEditableHandler}>
            Edit
          </BorderButton>
          <BorderButton size="mini" isActive={done} kind="success" onClick={onMarkDone} isToggle>
            <DoneIcon />
          </BorderButton>

          <BorderButton
            isActive={important}
            kind="warn"
            onClick={onMarkImportant}
            size="mini"
            isToggle
            disabled={done}
          >
            <ImportantIcon />
          </BorderButton>

          <BorderButton kind="warn" size="mini" onClick={onDeleteItem}>
            <DeleteIcon />
          </BorderButton>
        </span>
      </div>
      <Typography className="description" size="xl">
        {body}
      </Typography>
    </li>
  )
}

export default styled(TodoItem)`
  ${styles}
`
