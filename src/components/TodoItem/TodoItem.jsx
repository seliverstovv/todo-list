import React from 'react'
import style from './TodoItem.module.scss'
import cn from 'classnames'
import { ReactComponent as DoneIcon } from './icons/done.svg'
import { ReactComponent as ImportantIcon } from './icons/important.svg'
import { ReactComponent as DeleteIcon } from './icons/delete.svg'

const TodoItem = ({
  label,
  done,
  important,
  id,
  onDelete,
  onToggleDone,
  onToggleImportant
}) => {

  const onMarkDone = () => {
    onToggleDone(id)
  }

  const onMarkImportant = () => {
    onToggleImportant(id)
  }

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className={style.item}>
      <p
        className={cn({
          [style.text]: true,
          [style.urgently]: important,
          [style.textDone]: done
        })}
      >
        {label}
      </p>

      <span>
        <button
          className={cn({
            [style.button]: true,
            [style.done]: true,
            [style.doneActive]: done,
          })}
          onClick={onMarkDone}
          type="button"
        >
          <DoneIcon />
        </button>

        <button
          className={cn({
            [style.button]: true,
            [style.important]: true,
            [style.importantActive]: important
          })}
          onClick={onMarkImportant}
          type="button"
        >
          <ImportantIcon />
        </button>

        <button
          className={cn(style.button, style.delete)}
          onClick={onDeleteItem}
          type="button"
        >
          <DeleteIcon />
        </button>
      </span>
    </li>
  )
}

export default TodoItem