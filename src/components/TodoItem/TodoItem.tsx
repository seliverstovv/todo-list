/** @jsxImportSource @emotion/react */
import Typography from "UI/Typography"
import { useAppDispath } from "store/hooks"
import { toggleBooleanField, removeItem } from "features/todoSlice"
import { TodoItemType } from "features/types"
import BorderButton from "UI/Buttons/BorderButton"
import { css, useTheme } from "@emotion/react"
import { ReactComponent as DoneIcon } from "./icons/done.svg"
import { ReactComponent as ImportantIcon } from "./icons/important.svg"
import { ReactComponent as DeleteIcon } from "./icons/delete.svg"

const TodoItem = ({ id, title, done, important }: TodoItemType) => {
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

  const styles = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${colors.secondary.d};
    border-radius: ${radius.paper};
    padding: 1rem 2rem;

    .buttons {
      display: flex;
      button:not(:last-of-type) {
        margin-right: 1rem;
      }
    }

    .text {
      padding-top: 0.4rem;
      margin-right: 2.4rem;
    }

    .important {
      width: 6rem;
    }
  `

  return (
    <li css={styles}>
      <Typography className="text" size="xl">
        {title}
      </Typography>

      <span className="buttons">
        <BorderButton isActive={done} kind="success" onClick={onMarkDone} isToggle>
          <DoneIcon />
        </BorderButton>

        <BorderButton
          isActive={important}
          className="important"
          kind="warn"
          onClick={onMarkImportant}
          isToggle
        >
          <ImportantIcon />
        </BorderButton>

        <BorderButton kind="warn" onClick={onDeleteItem}>
          <DeleteIcon />
        </BorderButton>
      </span>
    </li>
  )
}

export default TodoItem
