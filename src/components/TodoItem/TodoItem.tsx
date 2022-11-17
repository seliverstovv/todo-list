/** @jsxImportSource @emotion/react */
import Typography from "UI/Typography"
import { useAppDispath } from "store/hooks"
import { toggleBooleanField, removeItem, setEditableTask, toggleVisibleModal } from "features/todoSlice"
import { TodoItemType } from "features/types"
import BorderButton from "UI/Buttons/BorderButton"
import { css, useTheme } from "@emotion/react"
import { ReactComponent as DoneIcon } from "./icons/done.svg"
import { ReactComponent as ImportantIcon } from "./icons/important.svg"
import { ReactComponent as DeleteIcon } from "./icons/delete.svg"

const TodoItem = ({ id, title, body, done, important }: TodoItemType) => {
  const { colors, radius } = useTheme()
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
    dispatch(setEditableTask({ id, title, body }))
    dispatch(toggleVisibleModal("isVisibleTaskForm"))
  }

  const doneStyles = css`
    background-color: ${colors.secondary.b};
    border: 1px solid ${colors.secondary.b};
  `

  const importantStyles = css`
    background-color: ${colors.secondary.d};
    border: 1px solid ${colors.primary.accent.b};
  `

  const baseStyes = css`
    background-color: ${colors.secondary.d};
    border: 1px solid ${colors.secondary.d};
  `

  const styles = css`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: ${radius.paper};
    padding: 1rem 2rem;

    ${baseStyes}
    ${important && importantStyles}
    ${done && doneStyles}

    .buttons {
      display: flex;
      button:not(:last-of-type) {
        margin-right: 1rem;
      }
    }

    .title {
      margin-right: 2.4rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.8rem;
      margin-bottom: 0.8rem;
    }

    .description {
      width: 100%;
      overflow-wrap: break-word;
      padding: 1.4rem 1.8rem 1.8rem 1.8rem;
      border-top: 1px solid ${colors.primary.deep};
    }
  `

  return (
    <li css={styles}>
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

export default TodoItem
