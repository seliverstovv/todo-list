import styled from "@emotion/styled"
import { useAppSelector } from "store/hooks"
import { todoItemsFilteredSelector } from "features/todo/selectors"
import Typography from "UI/Typography"
import TodoItem from "components/TodoItem"
import styles from "./styles"

const TodoList = ({ className }: { className?: string }) => {
  const { count, filteredItems } = useAppSelector(todoItemsFilteredSelector)

  if (count === 0) {
    return (
      <div className={className}>
        <Typography>Add you tasks</Typography>
      </div>
    )
  }

  return (
    <div className={className}>
      <ul className="list">
        {filteredItems.map((item) => (
          <TodoItem className="item" key={item.id} {...item} />
        ))}

        {!filteredItems.length && <Typography>No Tasks Found</Typography>}
      </ul>
    </div>
  )
}

export default styled(TodoList)`
  ${styles}
`
