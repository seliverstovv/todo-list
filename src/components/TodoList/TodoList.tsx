/** @jsxImportSource @emotion/react */
import { useAppSelector } from "store/hooks"
import { todoItemsFilteredSelector } from "features/selectors"
import TodoItem from "components/TodoItem"
import Typography from "UI/Typography"
import { css } from "@emotion/react"

const TodoList = () => {
  const { count, filteredItems } = useAppSelector(todoItemsFilteredSelector)

  const rootStyles = css`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3.2rem 0;
  `

  if (count === 0) {
    return (
      <div css={rootStyles}>
        <Typography>Add you tasks</Typography>
      </div>
    )
  }

  const styles = css`
    ${rootStyles}
    ul {
      width: 100%;
    }
    li {
      margin-bottom: 3rem;
    }
  `

  return (
    <div css={styles}>
      <ul className="list">
        {filteredItems.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}

        {!filteredItems.length && <Typography>No Tasks Found</Typography>}
      </ul>
    </div>
  )
}

export default TodoList
