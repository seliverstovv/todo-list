import React from 'react'
import TodoItem from '../TodoItem'
import style from './TodoList.module.scss'

const TodoList = ({
  todoData,
  visibleItems,
  onDelete,
  onToggleDone,
  onToggleImportant
}) => {

  const hasTodoData = todoData.length !== 0
  const hasVisibleData = visibleItems.length !== 0

  return (
    <>
      {
        hasTodoData ? (
          <ul className={style.list}>
            {visibleItems.map(({ id, ...rest }) => (
              <TodoItem
                key={id}
                id={id}
                onDelete={onDelete}
                onToggleDone={onToggleDone}
                onToggleImportant={onToggleImportant}
                {...rest}
              />
            ))}
          </ul>
        ) : <p className={style.empty}>Add you tasks</p>
      }
      {!hasVisibleData && hasTodoData && <p className={style.empty}>No Tasks Found</p>}
    </>
  )
}

export default TodoList