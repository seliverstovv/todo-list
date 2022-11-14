import { useAppSelector } from "store/hooks"
import { todoItemsFilteredSelector } from "features/selectors"
import TodoItem from "components/TodoItem"
import Typography from "UI/Typography"

const TodoList = () => {
  const { count, filteredItems } = useAppSelector(todoItemsFilteredSelector)

  if (count === 0) {
    return (
      <div>
        <Typography>Add you tasks</Typography>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {filteredItems.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>

      {!filteredItems.length && <Typography>No Tasks Found</Typography>}
    </div>
  )
}

export default TodoList
